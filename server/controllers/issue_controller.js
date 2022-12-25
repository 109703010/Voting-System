const { getIssueGroup, getIssues } = require("../models/issue_model.js");

const getIssueGroupDetail = async (req, res) => {
    const issueGroupID = req.query.issueGroupID;
    const result = await getIssueGroup(issueGroupID);
    if (result.length == 0) {
        res.status(400).send({err: "Request error: issueGroup does not exist"});
    } else {
        delete result[0].password;
        res.status(200).json(result);
    }
};

const getCustomIssues = async (req, res) => {
    const issueGroupID = req.query.issueGroupID;
    const regions = req.query.regions.split(' ');

    const result = await getIssues(issueGroupID, regions);
    if (result.length == 0) {
        res.status(400).send({err: "Request error: No valid issue"});
    } else {
        res.status(200).json(result);
    }
};

module.exports = {
    getIssueGroupDetail,
    getCustomIssues
};