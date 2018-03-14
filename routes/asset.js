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
    if(leger["asset"][target_id] != undefined){
        target = leger["asset"][req.param('id')];
    }
    if(fs.existsSync("views/branchs/"+target_id)){
        res.render("branchs/"+target_id+"/view",
            {
                title: 'Yggdrash Browser',
                branch: target,
                branch_address:target_id,
                yeed: yeed,
                sacred: sacred
            }
        );

    }else{
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
