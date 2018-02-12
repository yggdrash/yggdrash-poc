var express = require('express');
var router = express.Router();
const crypto = require('crypto');

const contents = [
    {
        name: 'btc',
        address: 'da8562e7abc01a6f0d49a25d144ce6a9d7752a079c5d950ad5a93fd6d623f7fd',
        description: 'bitcoin',
        yeed: 1000000,
        truthpoint: 1000
    },
    {
        name: 'btg',
        address: 'f7abc869526cf7f2d70622bdc0eedc496cec64d3bf9d53f5a0eb5a253f7b7db5',
        description: 'bitcoin Gold',
        yeed: 1000000,
        truthpoint: 1000


    },
    {
        name: 'eth',
        address: 'f4a3760644d064b3f7d82bb8e43ccb090a2dac8b55cc2894bf618c551b0bc2a8',
        description: 'Ethereum Homstead',
        yeed: 1000000,
        truthpoint: 1000


    },
    {
        name: 'etc',
        address: '1cb0c4c80152b0c0b7a5ef8762c5338ef28ce26c8a9cad1d70847a39fface131',
        description: 'Ethereum Classic',
        yeed: 1000000,
        truthpoint: 1000


    }
];

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('currency/view',
      {
        title: 'Yggdrash Browser',
          branch_name: contents[0].name,
          branch_address: contents[0].address
      }
  );
});
*/
router.get('/:id', function (req, res, next) {
    console.log('ok');
    var target = null;
    for (var i in contents) {
        if (contents[i].address == req.param('id')) {
            target = contents[i];
            break;
        }
    }
    console.log(target);
    res.render('currency/view',
        {
            title: 'Yggdrash Browser',
            currency: target
        }
    );
});

module.exports = router;
