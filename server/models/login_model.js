const { pool } = require('./mysqlcon');

const userLogin = async (id) => {
    const conn = await pool.getConnection();
    const [user] = await conn.query("SELECT * FROM user WHERE id = ?", [id]);
    return user;
}

const userRegister = async (id) => {
    const conn = await pool.getConnection();
    const userData = {
        id: id,
        region: 'all'
    };
    await conn.query("INSERT INTO user SET ?", userData);
}

const adminLogin = async (issueGroupID) => {
    const conn = await pool.getConnection();
    const [data] = await conn.query("SELECT * FROM issueGroup WHERE id = ?", [issueGroupID]);
    return data;
}


module.exports = {
    userLogin,
    userRegister,
    adminLogin,
};