const { getResult } = require("../models/statistic_model.js");

const getNumberOfVote = async (req, res) => {
    const data = await getResult(req.query);
    res.status(200).json(data);
};

module.exports = {
    getNumberOfVote
};