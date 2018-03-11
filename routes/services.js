var express = require('express');
var router = express.Router();
const crypto = require('crypto');

var leger = require('../model/stemchain.json');
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
    var fs = require('fs');
    var target = null;
    var target_id = req.param('id');
    if(leger["services"][req.param('id')] != undefined){
        target = leger["services"][req.param('id')];
    }

    if(fs.existsSync('../views/services/'+target_id)) {
        res.render('services/view',
            {
                title: 'Yggdrash Browser',
                branch: target,
                branch_address:target_id,
                yeed: yeed,
                sacred: sacred
            }
        );
    }else {
        res.render('sync-require',
            {
                title: 'Yggdrash Browser',
                branch: target,
                branch_address:target_id,
                yeed: yeed,
                sacred: sacred
            }
        );
    }

});

module.exports = router;
