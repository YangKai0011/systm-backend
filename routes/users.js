const express = require('express');
const router = express.Router();
const account = require('../model/account');
const tokenUtil = require('../lib/tokenUnit');
const jwt = require('jsonwebtoken');

router.post('/login', function (req, res, next) {
  const param = req.body;
  account.CheckAccent(param).then(function (data) {
    if (data.results.length === 0) {
      res.send({ error: 'error' });
    } else {
      const user = data.results[0];
      let userInfo = {
        id: user.id,
        accent: user.accent,
        role: user.role
      };
      const token = tokenUtil.xxx(userInfo);
      res.send({ key: token });
    }
  })
});

router.get('/check', function(req, res, next){
  let token = req.headers['authorization'];
  if(token){
    const status = tokenUtil.yyy(token);
    res.send({status: status});
  }else{
    res.send({status: status});
  }
});


module.exports = router;
