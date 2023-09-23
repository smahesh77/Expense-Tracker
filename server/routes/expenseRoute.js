const router = require("express").Router();
const userModel = require("../models/userModel");
const expenseModel = require('../models/expenseModel')
const { validateToken } = require("../middleware/authMiddleware");

//add new expense
router.post('/create', async (req, res, next) => {
    try {

      const { name, type, description, amount, userId } = req.body;
  

      const user = await userModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
  

      const newBalance = user.balance - amount;
  

      const newDebt = newBalance < 0 ? Math.abs(newBalance) : 0;
  
      console.log(user.balance);
      user.set({
        balance: newBalance,
        debt: newDebt
      })

      const newExpense = new expenseModel({
        name,
        type,
        userId, 
        description,
        amount,
      });
  
      
      user.expenses.push(newExpense);
  
    
      await Promise.all([user.save(), newExpense.save()]);
  
      res.status(201).json({ user, expense: newExpense }); 
    } catch (error) {
      next(error);
    }
  });

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = router;