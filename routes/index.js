const express = require('express');
const router = express.Router();
const user = require('../model/user');

/* GET home page. */
//查找所有
router.get('/userAll', function(req, res, next) {
  const param = req.query || req.params;
  user.userFindAll().then(function(data) {
    if (!data.err) {
      const results = data.results;
      res.json(results);
    } else {
      console.log(data.err);
    }
    console.log('12');
  });
});
//通过宿舍号查询
 router.get('/userfindByDormitorynumber',function(req, res, next){
  let {Dormitorynumber} = req.query;
  const param = [Dormitorynumber];

  user.userfindByDormitorynumber(param).then(function(data){
    if(!data.err){
      const results = data.results;
      res.json(results);
    
    }else{
      console.log(data.err);
    }
    console.log('123');
    
  }); 
});
router.get('/userFindByGradeAndProfession', function(req, res, next){
  const param = req.query || req.params;
  user.userFindByGradeAndProfession(param).then(function(data){
    if(!data.err){
      const results = data.results;
      res.json(results);
    }else{
      console.log(data.err);
    }
  })
});
//text
/* router.get('/userById', function(req, res, next) {
  //const param = req.query || req.params;
  let {id} = req.query;
  const param = [id];
  user.userById(param).then(function(data) {
    if (!data.err) {
      const results = data.results;
      res.json(results);
    } else {
      console.log(data.err);
    }
  });
  //console.log('1234'); 
  
}); */

module.exports = router;
