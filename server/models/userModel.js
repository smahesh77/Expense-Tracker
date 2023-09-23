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
    //   movie:{
    //     type: Number,
    //     default: 0,
    //   },
    //   food:{
    //     type: Number,
    //     default: 0,
    //   },
    //   drink:{
    //     type: Number,
    //     default: 0,
    //   },
    //   salary:{
    //     type: Number,
    //     default: 0,
    //   },
    //   rent:{
    //     type: Number,
    //     default: 0,
    //   },
    //   travel:{
    //     type: Number,
    //     default: 0,
    //   },
    //   personal:{
    //     type: Number,
    //     default: 0,
    //   },
    //   health:{
    //     type: Number,
    //     default: 0,
    //   },
    //   bonus:{
    //     type: Number,
    //     default: 0,
    //   },
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

