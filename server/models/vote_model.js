const { pool } = require('./mysqlcon');

const getVotingStatus = async (info) => {
    const conn = await pool.getConnection();
    const constraint = Object.entries(info).map(([key, value]) => ({[key]: value}));
    const result = await conn.query("SELECT * FROM voteRecord WHERE ? AND ? AND ?", constraint);
    return result;
}

const vote = async (info) => {
    const conn = await pool.getConnection();
    const constraint = Object.entries(info).map(([key, value]) => ({[key]: value}));
    try {
        await conn.query("START TRANSACTION");
        // await conn.query("SET FOREIGN_KEY_CHECKS = 0"); # For test only
        await conn.query("INSERT INTO voteRecord SET ?", info);
        await conn.query("UPDATE options SET number = number + 1 WHERE ?", constraint);
        await conn.query("COMMIT");
    } catch (err) {
        await conn.query("ROLLBACK");
        console.log(err);
    } finally {
        conn.release();
    }
}

const getOptions = async (info) => {
    const conn = await pool.getConnection();
    const constraint = Object.entries(info).map(([key, value]) => ({[key]: value}));
    const [options] =  await conn.query("SELECT name FROM options WHERE ?", constraint);
    return options;
};

const getDescription = async (info) => {
    const conn = await pool.getConnection();
    const constraint = Object.entries(info).map(([key, value]) => ({[key]: value}));
    const [issue] =  await conn.query("SELECT description FROM issue WHERE ?", constraint);
    return issue[0].description;
};

module.exports = {
    getVotingStatus,
    vote,
    getOptions,
    getDescription
};