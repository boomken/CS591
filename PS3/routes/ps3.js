const express = require('express');
const router = express.Router();

/* POST home page */
router.post('/', function (req, res, next) {
    const body = req.body.string;
    res.render('ps3', {str: body,strLength: body.length});

})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', {str: 'Hey now PS3!'});
});
module.exports = router;