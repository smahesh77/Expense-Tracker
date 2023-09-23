const db = require("../config/db");

const homeExpenseModel = db.model(
  "homeExpense",
  new db.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      cat: {
        type: String,
        required: true,
      },
      userId: {
        type: db.Schema.Types.ObjectId,
        ref: "user",
      },
      description: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = homeExpenseModel;
