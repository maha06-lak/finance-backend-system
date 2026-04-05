const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createRecord, getRecords } = require("../controllers/recordController");

router.post("/", auth, createRecord);
router.get("/", auth, getRecords);

module.exports = router;