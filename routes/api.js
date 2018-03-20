var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var fs = require('fs');

router.get('/', function(req, res, next){
    res.send({
        "blocks":"a blockchain block",
        "block":"blockchain block :address",
        "transaction":"transaction "
    });
});

/* GET users listing. */
router.get('/blocks/', function(req, res, next) {
    // all block
    res.send('respond with a resource');
});

router.get('/block/:address/:blockhash', function(req, res, next) {
    // BLOCK ADDRESS = branch address
    // blockhash = branch block hash
    res.send('respond with a resource');
});


router.get('/transaction/:hash/', function(req, res, next) {
    // blockchain history
    res.send('respond with a resource');
});

router.get('/branch/:hash',function(req, res, next){
    // GET BRANCH DATA
    var hash = req.param('hash');
    if(fs.existsSync("model/branchs/"+hash+".json")) {
        var branchs = require("../model/branchs/" + hash + ".json");
        res.send({result:branchs});
    }else{
        res.send({result:0});
    }

});


module.exports = router;
