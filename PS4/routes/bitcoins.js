// const express = require('express');
// const router = express.Router();
// const request = require('request-promise-lite');
// const async = require('async');
//
//
// // router.route('/')
// //     .get(function (req, res, next) {
// //         console.log('Starting Waterfall')
// //         async.waterfall([getBitcoinprice],
// //             function (err, result, price) {
// //                 if (err) {
// //                     res.render('bit', {result: 'Error processing'})
// //                 } else {
// //                     res.render('bit', {result: result, price: price})
// //                 }
// //             })
// //
// //     })
// router.get('/',function (req, res, next) {
//     getBitcoinprice().then( msg =>{
//         res.render('bit', msg);
//     }).catch(msg=>{
//         console.log(msg);
//     })
//
// })
// const getBitcoinprice = new Promise(((resolve, reject)=>{
//     const priceURL = 'https://www.okcoin.com/api/v1/ticker.do?symbol=eth_usd'
//     request.get(options)
//         .then(function (response) {
//             console.log(response);
//         }
// //                         resolve(response)
//
// }))
// // const getBitcoinprice = function (cb) {
// //     return new Promise(function (resolve, reject) {
// //         const priceURL = 'https://www.okcoin.com/api/v1/ticker.do?symbol='
// //         // let prices = [
// //         //     {symbol: 'btc_usd', price: null},
// //         //     {symbol: 'eth_usd', price: null},
// //         //     {symbol: 'ltc_usd', price: null}
// //         // ]
// //         let getPrices = function (crypto) {
// //             return new Promise(function (resolve, reject) {
// //
// //                 const options = {
// //                     method: 'GET',
// //                     url: 'https://www.okcoin.com/api/v1/ticker.do',
// //                     qs: {symbol: 'eth_usd'}
// //                 }
// //
// //                 request.get(options)
// //                     .then(function (response) {
// //                         console.log(response);
// //                         resolve(response)
// //
// //                     });
// //             })
// //         }
// //         // console.log('Starting price loop')
// //         // let cryptoPromises = prices.map(getPrices)
// //         //
// //         // Promise.all(cryptoPromises)
// //         //     .then(function () {
// //         //         cb(null, prices)
// //         //
// //         //     })
// //         //     .catch(function (err) {
// //         //         console.log(err)
// //         //     })
// //     })
// // }
//
// module.exports = router