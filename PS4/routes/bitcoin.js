
const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const coinmarket = require('../_config/config.js')

const getPrices = new Promise((resolve, reject) => {
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
    rp(requestOptions)
        .then(function (response) {
            resolve(response.data);
        })
        .catch(function (err) {
            reject(err)
            
        });
})




router.get('/', function (req, res, next) {
    getPrices.then(response => {
        res.render('bit', { price: response.BTC.quote.USD.price})
        console.log('API call response:', response);
    }).catch((err) => {
        console.log('API call error:', err.message);
    });
})

module.exports = router

// const coinmarketcap = {
//     ACCESS_KEY: '896318b6-6c53-43db-9d9e-1cd27ca8f012',
//     ACCOUNT_SETTING_URL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC',
// }
// //
// module.exports = coinmarketcap
