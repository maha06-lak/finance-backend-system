const Transaction = require("../models/Transaction");

exports.getSummary = async (req, res) => {
  try {
    const records = await Transaction.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(record => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    const balance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      balance
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};