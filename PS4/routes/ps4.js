
const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const coinmarket = require('../_config.js')


const requestOptions = {
    method: 'GET',
    uri: coinmarket.ACCOUNT_SETTING_URL,
    // qs: {
    //     'id': '1'
    // },
    headers: {
        'X-CMC_PRO_API_KEY': coinmarket.ACCESS_KEY
    },
    json: true,
    gzip: true
};


router.get('/', function (req, res, next) {
    rp(requestOptions).then(response => {
        res.render('bit', { price: response.data.BTC.quote.USD.price, })
        console.log('API call response:', response.data.BTC.quote.USD.price);
    }).catch((err) => {
        console.log('API call error:', err.message);
    });
})

module.exports = router

