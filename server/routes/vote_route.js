const router = require('express').Router();
const {wrapAsync} = require('../../util/util.js');

const {
    verifyAndVote,
    getOptionsForVote,
    getDescriptionForVote
} = require('../controllers/vote_controller.js');

router.route('/vote').get(wrapAsync(verifyAndVote));
router.route('/vote/options').get(wrapAsync(getOptionsForVote));
router.route('/vote/description').get(wrapAsync(getDescriptionForVote));


module.exports = router;