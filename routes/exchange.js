var express = require('express');
var router = express.Router();
const crypto = require('crypto');

var ledger = require('../model/stemchain.json');
var yeed_ledger = require('../model/yeedchain.json');
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
    var target_id = req.params['id'];
    if(ledger["exchange"][target_id] != undefined){
        target = ledger["exchange"][target_id];
        target["yeed"] = ledger["yeed"][target_id];
    }

    var branch_data = require("../model/branchs/"+target_id+".json");

    console.log(branch_data);
    res.render('exchange/view',
        {
            title: 'Yggdrash Browser',
            branch: target,
            branch_address:target_id,
            ledger:ledger,
            yeed: yeed_ledger,
            sacred: sacred,
            branch_data: branch_data
        }
    );
});

module.exports = router;
