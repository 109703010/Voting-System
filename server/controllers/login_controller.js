const { userLogin, userRegister, adminLogin } = require("../models/login_model.js");
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    const id = req.query.id;
    let result = await userLogin(id);
    if(result.length == 0) {
        await userRegister(id);
        result = await userLogin(id);
    }
    res.status(200).json(result);
};

const getAdmin = async (req, res) => {
    const issueGroupID = req.query.issueGroupID;
    const password = req.query.password;
    const result = await adminLogin(issueGroupID);
    if (result.length == 0) {
        res.status(400).send({ err: "Request error: issueGroup does not exist" });
    } else if (password != result[0].password && !bcrypt.compareSync(password, result[0].password)) {
        // const salt = parseInt(process.env.BCRYPT_SALT);
        // bcrypt.hashSync(password, salt); # When insert into database
        res.status(400).send({ err: "Invalid password" });
    } else {
        delete result[0].password;
        res.status(200).json(result);
    }
};

module.exports = {
    getUser,
    getAdmin
};