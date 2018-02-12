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
