const Transaction = require("../models/Transaction");

exports.createRecord = async (req, res) => {
  const record = await Transaction.create({ ...req.body, user: req.user.id });
  res.json({ message: "Record added", record });
};

exports.getRecords = async (req, res) => {
  const records = await Transaction.find({ user: req.user.id });
  res.json(records);
};