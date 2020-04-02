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
//通过专业和年级查询成员信息
router.get('/search/:grade/:profession', function(req, res, next){
  const param = req.params;
  user.findGradeAndProfession(param).then($funData(req, res));
});
//导员导入本年级学生信息
router.post('/insert', function(req, res, next){
  const param =  req.body;
  console.log(param);
  user.findDepartmentGrade(param).then($funData(req, res));
});

//完善已有学生的信息
router.post('/update', function(req, res,next){
  const param = req.body;
  console.log(param);
  user.insertMessage(param).then($funData(req, res));
});

//新增未成功导入完整学生的信息
router.get('/findnull', function(req, res, next){
  user.findNull().then($funData(req, res));
});

//导员修改信息
router.post('/updatemessage', function(req, res, next){
  const param = req.body;
  user.updateMessage(param).then($funData(req, res));
});

//导员按照楼号和宿舍号查询
router.get('/tourguidefind', function(req, res, next){
  const param = req.query || req.params;
  console.log(req.query);
  
  user.tourguideFind(param).then($funData(req, res));
});

//单个删除和批量删除(批量删除的话前台返回一个数组做循环)
router.get('/delete',function(req, res, next){
  const param = req.query;
  user.deleteById(param).then($funData(req, res));
});
//宿管员按照年级专业系别查询
router.get('/housekeeperfind', function(req, res, next){
  const param = req.query;
  user.housekeeperFind(param).then($funData(req, res));
});

//宿管员按照学号姓名查询
router.get('/housekeeperfind/:studentid/:name', function(req, res, next){
  const param = req.params;
  user.housekeeperFindById(param).then($funData(req, res));
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
