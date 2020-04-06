const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); 
const account = require('../model/account');
router.post('/check', function(req, res, next) {
  const param = req.body;

  
  account.CheckAccent(param).then(function(data){
    if (!data.err) {
      const token = jwt.sign({data: data.results}, 'secret',{expiresIn: "1d"});
      res.send(token);   
     /*  setTimeout(() => {
        jwt.verify(token, 'secret', (err, decoded)=>{
          console.log(err);
          if(err){
            console.log('token 失效');
          }else{
            console.log('token data is ' + JSON.stringify(decoded));
          }
        });
      }, 5000);   */   
    } else {
      console.log(data.err);
    } 
  });
});

module.exports = router;
