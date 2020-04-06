const express = require('express');
const router = express.Router();
const account = require('../model/account');
const tokenUtil = require('../lib/tokenUnit');

router.post('/login', function (req, res, next) {
  const param = req.body;
  account.CheckAccent(param).then(function (data) {
   const user = data.results[0];

    const userInfo = {
      id: user.id,
      accent: user.accent,
      role: user.role

    }

    const token = tokenUtil.xxx(userInfo);
    res.send({tokenStr: token});
  })
});

/* router.get('/check', function(req, res, next) {
  const param = req.body;
  account.CheckAccent(param).then(function(data){
    console.log(typeof data);
    
});
}); */

module.exports = router;
