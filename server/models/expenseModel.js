const db = require("../config/db");

const expenseModel = db.model(
  "expense",
  new db.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      mode:{
        type:String
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
