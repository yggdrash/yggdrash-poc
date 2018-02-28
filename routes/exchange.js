var express = require('express');
var router = express.Router();
const crypto = require('crypto');

var leger = require('../model/stemchain.json');
var yeed = require('../model/yeedchain.json');
var sacred = require('../model/sacredwaterchain.json');

    /* GET home page. */
router.get('/', function(req, res, next) {



  res.render('index',
      {
        title: 'Yggdrash Browser',
        content: contents
      }
      );
});

router.get('/:id', function (req, res, next) {
    console.log('ok');
    var target = null;
    var target_id = req.param('id');
    if(leger["exchange"][req.param('id')] != undefined)
        target = leger["exchange"][req.param('id')];
    console.log(target);
    res.render('exchange/view',
        {
            title: 'Yggdrash Browser',
            branch: target,
            branch_address:target_id,
            yeed: yeed,
            sacred: sacred
        }
    );
});

module.exports = router;
