const router = require("express").Router();
const userModel = require("../models/userModel");
const incomeModel = require("../models/incomeModel");
const { validateToken } = require("../middleware/authMiddleware");


router.post('/create', async (req, res, next) => {
  try {

    const { name, type, description, amount, userId } = req.body;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.debt > 0) {
      const remainingDebt = user.debt - amount;
      if (remainingDebt <= 0) {
        user.debt = 0;
      } else {
        user.debt = Math.abs(remainingDebt);
      }
    }

    const amountToAddToBalance = Math.max(0, amount - user.debt);

    user.balance += amountToAddToBalance;

    const newIncome = new incomeModel({
      name,
      type,
      userId,
      description,
      amount
    });

    
    user.incomes.push(newIncome);

    
    await Promise.all([user.save(), newIncome.save()]);

    res.status(201).json({ user, income: newIncome });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = router;
