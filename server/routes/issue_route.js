const router = require('express').Router();
const {wrapAsync} = require('../../util/util.js');

const {
    getIssueGroupDetail,
    getCustomIssues
} = require('../controllers/issue_controller.js');

router.route('/issues').get(wrapAsync(getIssueGroupDetail));
router.route('/issues/validIssues').get(wrapAsync(getCustomIssues));


module.exports = router;