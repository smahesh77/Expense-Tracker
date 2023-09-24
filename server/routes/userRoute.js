const router = require("express").Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/authMiddleware.js");

router.post("/sign", async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      email: email,
      name: name,
      password: hash,
      passwordSneak: req.body.password, // this to remember the password and will be removed before deployment
    });

    await newUser.save();
    console.log(name);
    res.json({ msg: "User Created" });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({ error: "Wrong email And Password Combination" });
    }

    const accessToken = sign(
      { email: user.email, id: user.id, name: user.name, user: user },
      "shhhhh its a secret"
    );

    res.json({
      token: accessToken,
      name: user.name,
      id: user.id,
      user: user,
      gmail: user.email,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/getuserdata", async (req, res, next) => {
  const { id } = req.body;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }

    res.json({
      user,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/getusercats", async (req, res, next) => {
  const { id } = req.body;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }

    res.json({
      Electricity:user.Electricity,
      Rent:user.Rent,
      Food:user.Food,
      Health:user.Health,
      Entertainment:user.Entertaintment
    });
  } catch (err) {
    next(err);
  }
});

// to check if the user is already logged in
router.get("/logcheck", validateToken, (req, res) => {
  res.json(req.user);
});

//to update
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: data },
      {
        new: true,
      }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = router;
