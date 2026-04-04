const Transaction = require("../models/Transaction");

// Create Record
exports.createRecord = async (req, res) => {
  try {
    const record = new Transaction(req.body);
    await record.save();
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Records
exports.getRecords = async (req, res) => {
  try {
    const records = await Transaction.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};