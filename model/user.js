const mysql = require('mysql')
const pool = require('../Dao/operate.js');
const $sql = require('../Dao/sql.js');
const UserOp = {
  //查询所有
  userFindAll(param) {
    const sql = $sql.userFindAll;
    let promise = new Promise(function(resolve, reject) {
      pool.query(sql, param, function(err, results, fields) {
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
  userfindByDormitorynumber(param) {
    const sql = $sql.userfindByDormitorynumber;
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

  userFindByGradeAndProfession(param){
    const sql = $sql.userFindByGradeAndProfession;
    let promise = new Promise(function(resolve,reject){
      pool.query(sql, [param.grade,param.profession],function(err, results,fields){
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
  
    const sql = $sql.userById;
    
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
