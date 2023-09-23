const db = require("../config/db");

const incomeModel = db.model(
  "income",
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
    },
    {
      timestamps: true,
    }
  )
);

module.exports = incomeModel;
