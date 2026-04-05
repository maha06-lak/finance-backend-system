const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

  res.json({ token });
};