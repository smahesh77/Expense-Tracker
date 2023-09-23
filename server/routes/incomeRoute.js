const router = require("express").Router();
const userModel = require("../models/userModel");
const incomeModel = require("../models/incomeModel");
const { validateToken } = require("../middleware/authMiddleware");


router.post('/create', async (req, res, next) => {
  try {

    const { name, cat, description, amount, userId } = req.body;

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
      cat,
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

router.post("/getuserincomes", async (req, res, next) => {
    const { userid } = req.body;
  
    try {
        const user = await userModel.findById(userid);

        const incomeIds = user.incomes

        const userincomes = await incomeModel.find({ _id: { $in: incomeIds } });

        res.json({ userincomes });

    } catch (err) {
      next(err);
    }
});

// Delete an income and update user balance and debt
router.post("/deleteincome", async (req, res, next) => {
    const { incomeId } = req.body;

    try {
        // Find the income to be deleted
        const incomeToDelete = await incomeModel.findById(incomeId);

        if (!incomeToDelete) {
            return res.status(404).json({ error: "Income not found" });
        }

        // Find the user associated with the income
        const user = await userModel.findById(incomeToDelete.userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Calculate new balance after deleting income
        const newBalance = user.balance - incomeToDelete.amount;

        // Update the user's balance
        user.balance = newBalance;

        // Calculate new debt based on the updated balance
        const newDebt = newBalance < 0 ? Math.abs(newBalance) : 0;

        // Update the user's debt
        user.debt = newDebt;

        // Remove the income from the user's incomes array
        user.incomes = user.incomes.filter((income) => income.toString() !== incomeId);

        // Save the updated user
        await user.save();

        // Delete the income
        await incomeModel.deleteOne({ _id: incomeId });

        res.status(200).json({ message: "Income deleted successfully", user });
    } catch (error) {
        next(error);
    }
});


router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = router;
