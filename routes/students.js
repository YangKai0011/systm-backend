const express = require('express');
const router = express.Router();
const user = require('../model/students');
const $funData = require('./funData.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  const param = req.query;
  //console.log(param);
  res.send('text')
});

router.get('/student', function(req, res, next){
  const param = req.query; 
  console.log(param);
  console.log(req.originalUrl);
  
  if(param.type === 'search'){
    
    switch(param.mold)
    {
      case '1':
        //通过年级，专业，或二者组合来查找楼号和宿舍号
        user.findGradeAndProfession(param).then($funData(req, res));
        break;
      case '2':
        //通过宿舍号，楼号或二者组合来查找学生信息
        user.findDormitory(param).then($funData(req, res));
        break;
      case '3':
        if(param.grade || param.profession || param.department){
           //通过宿管号,年级专业系别
          user.findStub(param).then($funData(req, res));
          break;
        }else if(param.dormitorynumber){
          //通过宿管号，宿舍号查询
          user.findStubAndDormitorynumber(param).then($funData(req, res));
          break;
        }else if(param.name || param.studentid){
          //通过学号姓名查询
          user.findStubNameAndId(param).then($funData(req, res));
          break;
        }
       
      default:
        res.send('本次请求未正确发送');
        break;
    }
  }

});

//查找操作
// router.get('/student', function(req, res, next){
//   let param = req.query;
//   /* if(param.type!='search'){
//     res.send({errorCode: 996});
//   }else{
//     switch(param)
//     user.findDormitory(param).then($funData(req, res));
//   }
//    */
//   let arr = [];
//   console.log(req.query);
  
//   for(let i in param){
//     arr.push(param[i]);
//   }
//   res.send('');
//   if(req.query.type==='search?findnull'){
//     //新增未成功导入完整学生的信息
//     user.findNull().then($funData(req, res));
//   }else if(req.query.type==='search?tourguidefind'){
//     //导员按照楼号和宿舍号查询
//     user.tourguideFind(param).then($funData(req, res));
//   }else if(req.query.type==='delete'){
//     //单个删除和批量删除(批量删除的话前台返回一个数组做循环)
//     user.deleteById(param).then($funData(req, res));
//   }else if(req.query.type==='search?housekeeperfind'){
//     switch(arr.length)
//     {
//         case 3:
//           //宿管员按照学号姓名查询
//           user.housekeeperFindById(param).then($funData(req, res));
//           break;
//         case 4:
//            //宿管员按照年级专业系别查询
//           user.housekeeperFind(param).then($funData(req, res));
//           break;
//     }
   
//   }else if(req.query.type==='search'){
//     switch(arr.length)
//     {
//       //查询所有数据
//       case 1:
//         user.findAll().then($funData(req, res));
//         break;
  
//       //通过宿舍号查询所有学生信息
//       case 2:
//         user.findDormitory(param).then($funData(req, res));
//         break;
//       //通过专业和年级查询学生宿舍分布
//       case 3:
//         user.findGradeAndProfession(param).then($funData(req,res));
//         break;
//       default:
//         break;
//     }
//   }
 
// });


//导员导入本年级学生信息
router.post('/add', function(req, res, next){
  const param =  req.body;
  user.insertDepartmentGrade(param).then($funData(req, res));
});

//完善已有学生的信息
router.post('/update', function(req, res,next){
  const param = req.body;
  console.log(param);
  user.insertMessage(param).then($funData(req, res));
});

//导员修改信息
router.post('/updatemessage', function(req, res, next){
  const param = req.body;
  user.updateMessage(param).then($funData(req, res));
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
