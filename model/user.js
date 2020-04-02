const mysql = require('mysql')
const pool = require('../Dao/SqlPool.js');
const UserOp = {
  //查询所有
  findAll() {
    const sql = 'SELECT * FROM student';
    let promise = new Promise(function(resolve, reject) {
      pool.query(sql, function(err, results, fields) {
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },
  //按照宿舍号查找所有成员
  findDormitory(param) {
    const sql = 'select * from student where Dormitorynumber=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, param, function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
  
    return promise;
  },
  //通过专业和年级查找宿舍成员
  findGradeAndProfession(param){
    const sql = 'select buildnumber, Dormitorynumber from student where grade=? and profession=?';
    let promise = new Promise(function(resolve,reject){
      pool.query(sql, [param.grade, param.profession],function(err, results,fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //导员导入信息
  findDepartmentGrade(param){
    const sql = 'insert into student(studentid,name,department,profession,grade) values(?,?,?,?,?)';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.studentid, param.name, param.department,param.profession, param.grade], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //完善已有学生信息
  insertMessage(param){
    const sql = 'UPDATE student SET buildnumber=?,Dormitorynumber=?,tellphone=?,Tourguidename=?,Tourguidephone=?, dormmanager=?, dormmanagerphone=?, fatherphone=?, motherphonr=? WHERE studentid=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.buildnumber, param.Dormitorynumber, param.tellphone,param.Tourguidename, param.Tourguidephone, param.dormmanager, param.dormmanagerphone,  param.fatherphone, param.motherphonr, param.studentid], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //上传照片到数据库
  insertPhoto(param){
    const sql = 'update student set photo=? where studentid=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql,[param.file, param.studentid], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //新增未成功导入的学生的完整信息
  findNull(){
    const sql = 'select * from student where buildnumber is null or Dormitorynumber is null or tellphone is null or Tourguidename is null or Tourguidephone is null or dormmanager is null or dormmanagerphone is null or fatherphone is null or motherphonr is null or photo is null';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql,function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //导员修改信息
  updateMessage(param){
    const sql = 'update student set department=?, profession=?,grade=?,class=?,tellphone=?,fatherphone=?,motherphonr=?,buildnumber=?,Dormitorynumber=?,Tourguidename=?,Tourguidephone=?,dormmanager=?,dormmanagerphone=? where studentid=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.department, param.profession, param.grade, param.class, param.tellphone, param.fatherphone, param.motherphonr, param.buildnumber, param.Dormitorynumber, param.Tourguidename, param.Tourguidephone, param.dormmanager, param.dormmanagerphone, param.studentid],function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //导员按楼号宿舍号查找成员
  tourguideFind(param){
    const sql = 'select studentid, name, department, profession, grade, class, tellphone, fatherphone, motherphonr from student where buildnumber=? and Dormitorynumber=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.buildnumber, param.Dormitorynumber], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
  
    return promise;
  },

  //单个删除
  deleteById(param){
    const sql = 'delete from student where studentid=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, param.studentid, function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //宿管员按年级，系别，专业查询学生信息
  housekeeperFind(param){
    const sql = 'select * from student where department=? and profession = ? and grade=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.department, param.profession, param.grade], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },

  //宿管员按学号，姓名查询学生
  housekeeperFindById(param){
    const sql = 'select * from student where studentid=? and name=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.studentid, param.name], function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });
      });
    });
    return promise;
  },



/*   userById(param){
  
    const sql = 'select * from student where id=?';
    
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, param, function(err, results, fields){
        resolve({
          err: err,
          results: results,
          fields: fields
        });
        reject({
          err: err
        });    
      });
    });
    return promise;
  }  */
};

module.exports = UserOp;
