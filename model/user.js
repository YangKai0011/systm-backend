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

  //通过系别和年级来查找
  findDepartmentGrade(param){
    const sql = 'select * from student where department=? and grade=?';
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, [param.department, param.grade], function(err, results, fields){
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
