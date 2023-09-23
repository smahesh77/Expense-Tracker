const router = require("express").Router();
const userModel = require("../models/userModel");
const expenseModel = require('../models/expenseModel')

const { validateToken } = require("../middleware/authMiddleware");

//add new expense
router.post('/create', async (req, res, next) => {
    try {

      const { name, cat, description, amount, userId } = req.body;
  
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
        cat,
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

// get user expenses
router.post("/getuserexpens", async (req, res, next) => {
    const { userid } = req.body;
  
    try {
        const user = await userModel.findById(userid);

        const expenseIds = user.expenses

        const userExpenses = await expenseModel.find({ _id: { $in: expenseIds } });

        res.json({ userExpenses });

    } catch (err) {
      next(err);
    }
});


router.post("/deleteexpense", async (req, res, next) => {
    const { expenseId } = req.body;
    

    try {
        // Find the expense to be deleted
        const expenseToDelete = await expenseModel.findById(expenseId);

        if (!expenseToDelete) {
            return res.status(404).json({ error: "Expense not found" });
        }

        // Find the user associated with the expense
        const user = await userModel.findById(expenseToDelete.userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's balance and debt
        user.balance += expenseToDelete.amount;
        if (user.balance < 0) {
            user.debt = Math.abs(user.balance);
        } else {
            user.debt = 0;
        }

        // Remove the expense from the user's expenses array
        user.expenses = user.expenses.filter((expense) => expense.toString() !== expenseId);

        // Save the updated user
        await user.save();

        // Delete the expense
        await expenseModel.deleteOne({ _id: expenseId });

        res.status(200).json({ message: "Expense deleted successfully", user });
    } catch (error) {
        next(error);
    }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = router;