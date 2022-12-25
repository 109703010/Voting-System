const { pool } = require('./mysqlcon');

const getResult = async (constraint) => {
    const conn = await pool.getConnection();
    const [data] = await conn.query("SELECT * FROM options WHERE ?", constraint);
    return data;
}

module.exports = {
    getResult
};