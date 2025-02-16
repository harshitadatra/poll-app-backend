const express = require("express");
const { createPoll, getAllPolls, votePoll } = require("../controllers/pollController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, createPoll);
router.get("/", getAllPolls);
router.post("/:id/vote", verifyToken, votePoll);

module.exports = router;
