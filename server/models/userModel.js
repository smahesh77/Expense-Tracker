const db = require("../config/db");

const userModel = db.model(
  "user",
  new db.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      pfp: {
        type: String,
      },
      notifications: [
        {
          type: db.Schema.Types.ObjectId,
        },
      ],
      expenses: [
        {
          type: db.Schema.Types.ObjectId,
        },
      ],
      incomes: [
        {
          type: db.Schema.Types.ObjectId,
        },
      ],
      balance: {
        type: Number,
        default: 0, 
        required: true,
      },
      debt :{
        type: Number,
        default: 0, 
        required: true,
      }
    },
    {
      timestamps: true,
    }
  )
);

module.exports = userModel;

