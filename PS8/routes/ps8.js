
// *****************************************************
// const path = require('path');
// console.log(__dirname);
const fetch = require("node-fetch");
const express = require("express");

router = express.Router();
const config = require('./../_config');
const categorySchema = require('./../model/category_model');

// mongo packages
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");


// EXTRA POINTS: second API
const CryptoNewsAPI = require('crypto-news-api').default
const News = new CryptoNewsAPI(config.CRYPTONEW_KEY);
// const news_url = 'https://cryptocontrol.io/api/v1/public/news/coin/'
// const news_key = '?key=1351d52fda3012a88281f7987126955a'


//mongo host port
const url = config.mongoURL;

// FIRST API: by coin market cap
const cmc_key = config.ACCESS_KEY;
const cmc_url = config.ACCOUNT_SETTING_URL;


router.get('/', async (req, res) => {

    try {

        var options = {
            method: 'get',
            headers: {
                'X-CMC_PRO_API_KEY' : cmc_key
            }
        }

        mongoose.connect(url, {useNewUrlParser: true})
        const db = mongoose.connection;

        const categories = mongoose.model('categories', categorySchema);

        const response = await fetch(cmc_url, options)
            .then(res => res.json())
            .then(json => {

                const data = json.data;
                const bulk = categories.collection.initializeUnorderedBulkOp();
                data.forEach(element => {
                    const query = {};
                    // console.log(element)
                    // second api, get the latest feed by coin, since there are too many coins, my labtop will crash
                    // we can read through element array, get its name iterately
                    // I took litecoin as an example
                    // News.getTopFeedByCoin('litecoin')
                    //     .then(function (feed) { console.log(feed) })
                    //     .catch(function (error) { console.log(error) });
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
                console.log('success');
            });
    }
    catch (e) {
        res.send({"message" : e.message});
    }

})
//POST method
router.post('/category', function(req, res) {
    mongoose.connect(url, {useNewUrlParser: true});
    const db = mongoose.connection;

    const Category = mongoose.model("Category", categorySchema);

    let id = req.body.id;
    // let type = req.body.type;
    let source = req.body.source;
    let _category = req.body._category;
    let name = req.body.name;
    let description = req.body.description;
    let slug = req.body.slug;

    let newCategory = new Category({
        id: id,
        type: 'private',
        source: source,
        _category: _category,
        name: name,
        description: description,
        slug: slug,
        cmc_rank: 0,
        cmc_id: 0
    })

    newCategory.save(function(err, results) {
        if (err) res.send({error: err});
        else res.send(results);
    });
})
// *****************************************************
// *****************  Testing **************************
// commandline: mongo mongodb://localhost:27017/crypto
// show collections
//  =>  categories
// db.categories.find();
// {
// 	"_id" : ObjectId("5d11b3c5af3ef07d8157d8eb"),
// 	"name" : "Bitcoin",
// 	"_category" : "cryptocurrency",
// 	"cmc_id" : 1,
// 	"cmc_rank" : 1,
// 	"id" : 1,
// 	"slug" : "bitcoin",
// 	"source" : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
// 	"type" : "public"
// }
// {
// 	"_id" : ObjectId("5d11b3c5af3ef07d8157d8ec"),
// 	"name" : "Ethereum",
// 	"_category" : "cryptocurrency",
// 	"cmc_id" : 1027,
// 	"cmc_rank" : 2,
// 	"id" : 1027,
// 	"slug" : "ethereum",
// 	"source" : "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
// 	"type" : "public"
// }
//..........
// *****************************************************

module.exports = router;
// *****************************************************
// *****************  PS4 ******************************
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
//         res.setHeader('myCust')
//
//     }).catch((err) => {
//         console.log('API call error:', err.message);
//     });
// })
//
// module.exports = router
