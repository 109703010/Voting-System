const { pool } = require('./mysqlcon');

const getResult = async (info) => {
    const conn = await pool.getConnection();
    let constraint = Object.entries(info).map(([key, value]) => ({[key]: value}));
    const [data] = await conn.query("SELECT * FROM options WHERE ? AND ?", constraint);
    return data;
}

module.exports = {
    getResult
};