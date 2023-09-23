const db = require("../config/db");

const expenseModel = db.model(
  "expense",
  new db.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      type: {
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

module.exports = expenseModel;
