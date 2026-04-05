const Transaction = require("../models/Transaction");

exports.getSummary = async (req, res) => {
  const records = await Transaction.find({ user: req.user.id });

  let income = 0, expense = 0;

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
  });
};