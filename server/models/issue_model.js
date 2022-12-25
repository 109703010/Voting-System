const { pool } = require('./mysqlcon');

const getIssueGroup = async (issueGroupID) => {
    const conn = await pool.getConnection();
    const [issueGroup] = await conn.query("SELECT * FROM issueGroup WHERE id = ?", [issueGroupID]);
    return issueGroup;
}

const getIssues = async (issueGroupID, regions) => {
    const conn = await pool.getConnection();
    const [issues] = await conn.query("SELECT * FROM issue WHERE issueGroupID = ?", [issueGroupID]);
    console.log(regions);
    console.log(issues);
    return issues.filter(issue => {
        const issueRegions = issue.region.split(' ');
        if(regions.filter(region => issueRegions.includes(region)).length != 0) {
            // Check if intersection exist
            return issue;
        }
    });
}

module.exports = {
    getIssueGroup,
    getIssues
};