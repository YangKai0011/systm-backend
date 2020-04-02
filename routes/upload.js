let express = require('express');
let multer = require('multer');
let fs = require("fs");
let path = require("path");
const user = require('../model/user');
const $funData = require('./funData.js');
let router = express.Router();
//上传图片路径到数据库
router.post('/img', multer({
      //设置文件存储路径
     dest: 'upload'   //upload文件如果不存在则会自己创建一个。
 }).single('file'), function (req, res, next) {
    if (req.file.length === 0) {  //判断一下文件是否存在，也可以在前端代码中进行判断。
        res.render("error", {message: "上传文件不能为空！"});
        return
    } else {
       let file = req.file;
       //console.log(req.file);
       
       let fileInfo = {};
       console.log(file);
       //fs.renameSync('../upload/' + file.filename, '../upload/' + file.originalname);//这里修改文件名字，比较随意。
       // 获取文件信息
       fileInfo.mimetype = file.mimetype;
       fileInfo.originalname = file.originalname;
       fileInfo.size = file.size;
       fileInfo.path = file.path;
       
       console.log(fileInfo);
       
       // 设置响应类型及编码
       res.set({
         'content-type': 'application/json; charset=utf-8'
      });
      req.body.file = fileInfo.originalname;
      const param = req.body;
      //console.log(param);
      user.insertPhoto(param).then($funData(req, res));
  
    }
 });

 router.get('/getimg', function(req, res, next){
         var filecpath = path.resolve(__dirname,"../upload","1.jpg");
         console.log(filecpath);
         
         fs.stat(filecpath,function(err, data){
            if(err){
               next;
               return;
            }if(data.isFile()){
               res.sendfile(filecpath);
            }
            else{
               next();
            }
         });
         
 });

 module.exports = router;