var express = require('express');
var router = express.Router();
const crypto = require('crypto');
var leger = require('../model/stemchain.json');
var yeed = require('../model/yeedchain.json');
var sacred = require('../model/sacredwaterchain.json');

    /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
        title: 'Yggdrash Browser',
        ledger: leger,
        yeed: yeed,
          sacred: sacred
      });
});

module.exports = router;
