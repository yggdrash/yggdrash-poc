var express = require('express');
var router = express.Router();
const crypto = require('crypto');

var ledger = require('../model/stemchain.json');
var yeed = require('../model/yeedchain.json');
var sacred = require('../model/sacredwaterchain.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('currency/list',
      {
        title: 'Yggdrash Browser',
          branch_name: contents[0].name,
          branch_address: contents[0].address
      }
  );
});

router.get('/:id', function (req, res, next) {
    var target = null;
    var target_id = req.param('id');
    if(ledger["currency"][target_id] != undefined){
        target = ledger["currency"][target_id];
        target["yeed"] = ledger["yeed"][target_id];
    }
    console.log(target);

    res.render('currency/view',
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
