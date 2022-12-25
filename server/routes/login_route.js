const router = require('express').Router();
const {wrapAsync} = require('../../util/util.js');

const {
    getUser,
    getAdmin
} = require('../controllers/login_controller.js');

router.route('/login/user').get(wrapAsync(getUser));
router.route('/login/admin').get(wrapAsync(getAdmin));


module.exports = router;