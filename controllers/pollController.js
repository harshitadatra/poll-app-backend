const Poll = require("../models/Poll");

const createPoll = async (req, res) => {
    const { question, options } = req.body;
    const poll = new Poll({ 
        question, 
        options: options.map(text => ({ text, votes: 0 })), 
        createdBy: req.user.username 
    });

    await poll.save();
    res.json(poll);
};

const getAllPolls = async (req, res) => {
    const polls = await Poll.find();
    res.json(polls);
};

const votePoll = async (req, res) => {
    const { optionIndex } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: "Poll not found" });

    poll.options[optionIndex].votes += 1;
    await poll.save();
    res.json(poll);
};
module.exports = {createPoll,getAllPolls,votePoll}
