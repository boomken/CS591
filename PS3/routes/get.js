const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('get', {str: 'Hey now PS3!'});
});

module.exports = router;
