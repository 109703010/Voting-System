const router = require('express').Router();
const {wrapAsync} = require('../../util/util.js');

const {
    getNumberOfVote
} = require('../controllers/statistic_controller.js');

router.route('/statistic').get(wrapAsync(getNumberOfVote));


module.exports = router;