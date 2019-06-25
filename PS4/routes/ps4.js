//
// const express = require('express');
// const router = express.Router();
// const rp = require('request-promise');
// const coinmarket = require('../_config.js')
//
//
// const requestOptions = {
//     method: 'GET',
//     uri: coinmarket.ACCOUNT_SETTING_URL,
//     // qs: {
//     //     'id': '1'
//     // },
//     headers: {
//         'X-CMC_PRO_API_KEY': coinmarket.ACCESS_KEY
//     },
//     json: true,
//     gzip: true
// };
//
//
// router.get('/', function (req, res, next) {
//     rp(requestOptions).then(response => {
//         res.render('bit', { price: response.data.BTC.quote.USD.price, })
//         console.log('API call response:', response.data.BTC.quote.USD.price);
//     }).catch((err) => {
//         console.log('API call error:', err.message);
//     });
// })
//
// module.exports = router
//
const fetch = require("node-fetch");

var express = require("express");
router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const url = 'localhost:27017';
const cmc_key = require('./_config').ACCESS_KEY;

var categorySchema = require('./models/category_model.js');

const cmc_url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=2000";

router.get('/', async (req, res) => {

    try {

        var options = {
            method: 'get',
            headers: {
                'X-CMC_PRO_API_KEY' : cmc_key
            }
        }

        mongoose.connect(url, {useMongoClient: true})
        console.log('connection')
        const db = mongoose.connection;

        const categories = mongoose.model('categories', categorySchema);

        const response = await fetch(cmc_url, options)
            .then(res => res.json())
            .then(json => {

                const data = json.data;

                var bulk = categories.collection.initializeUnorderedBulkOp();
                data.forEach(element => {
                    var query = {};
                    const reducedElement = {
                        name: element.name,
                        slug: element.slug,
                        cmc_rank: element.cmc_rank,
                        cmc_id: element.id,
                        id: element.id,
                        source: `https://s2.coinmarketcap.com/static/img/coins/64x64/${element.id}.png`,
                        type: 'public',
                        _category: 'cryptocurrency'
                    }
                    query['name'] = reducedElement['name'];
                    bulk.find(query).upsert().update({
                        '$set' : {
                            name: reducedElement.name,
                            slug: reducedElement.slug,
                            cmc_rank: reducedElement.cmc_rank,
                            cmc_id: reducedElement.id,
                            id: reducedElement.id,
                            source: reducedElement.source,
                            type: reducedElement.type,
                            _category: reducedElement._category
                        }
                    })
                });

                bulk.execute(function (err, bulkres){
                    if (err) res.send({"bulk error" : err.message});
                })

                res.send({"success" : data})
            });
    }
    catch (e) {
        res.send({"message" : e.message});
    }

})

module.exports = router;
