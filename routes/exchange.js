var express = require('express');
var router = express.Router();
const crypto = require('crypto');

const contents = [
  {name:'contest1', address:'d04b98f48e8f8bcc15c6ae5ac050801cd6dcfd428fb5f9e65c4e16e7807340fa'},
  {name:'contest2', address:'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'}
];

    /* GET home page. */
router.get('/', function(req, res, next) {



  res.render('index',
      {
        title: 'Yggdrash Browser',
        content: contents
      }
      );
});

module.exports = router;
