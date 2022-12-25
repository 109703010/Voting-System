const { getVotingStatus, vote, getOptions, getDescription } = require("../models/vote_model.js");

const verifyAndVote = async (req, res) => {
    const [record] = await getVotingStatus({
        userID: req.query.userID,
        issueID: req.query.issueID
    });
    if (record.length != 0) {
        res.status(400).send({ err: "Request Error: Repeated Vote" });
    } else {
        await vote({
            issueID: req.query.issueID,
            userID: req.query.userID
        }, [
            { issueID: req.query.issueID },
            { name: req.query.name }
        ]);
        res.status(200).json({status: "Sucess"});
    }
};

const getOptionsForVote = async (req, res) => {
    const options = await getOptions(req.query);
    if (options.length == 0) {
        res.status(400).send({ err: "Requset Error: This issue does not exist" })
    } else {
        res.status(200).json(options);
    }
};

const getDescriptionForVote = async (req, res) => {
    const description = await getDescription(req.query);
    if (description == null) {
        res.status(400).send({ err: "Request Error: Check if your parameter is valid" });
    } else {
        res.status(200).send(description);
    }
};

module.exports = {
    verifyAndVote,
    getOptionsForVote,
    getDescriptionForVote
};