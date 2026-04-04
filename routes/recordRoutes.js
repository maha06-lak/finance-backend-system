const express = require("express");
const { createRecord, getRecords } = require("../controllers/recordController");

const router = express.Router();

router.post("/", createRecord);
router.get("/", getRecords);

module.exports = router;