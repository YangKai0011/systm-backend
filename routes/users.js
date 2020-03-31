const express = require('express');
const router = express.Router();
const user = require('../model/user');
const $funData = require('./funData.js');
/* GET home page. */
//查找所有
router.get('/search', function(req, res, next) {
  const param = req.query || req.params;
  user.findAll().then($funData(req, res));

});
//通过宿舍号查询成员信息
 router.get("/search/:number",function(req, res, next){
  const number = req.params;
  const param = number.number;
  user.findDormitory(param).then($funData(req, res))
});
//TOOD
//通过专业和年级查询成员信息
router.get('/search/:grade/:profession', function(req, res, next){
  const param = req.params;
  user.findGradeAndProfession(param).then($funData(req, res));
});
//导员导入本年级学生信息
router.get('/search/:department/:grade', function(req, res, next){
  const param = req.params;
  user.findDepartmentGrade(param).then($funData(req, res));
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
