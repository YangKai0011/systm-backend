const mysql = require('mysql')
const pool = require('../Dao/operate.js');
const $sql = require('../Dao/sql.js')
const UserOp = {
/*   addUser(param) {
    var sql = $sql.userAddSql;
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
  } */
  //按照宿舍号查找所有成员
  userfindByDormitorynumber(param) {
    var sql = $sql.userfindByDormitorynumber;
    let promise = new Promise(function(resolve, reject){
      pool.query(sql, param, function(err, results, fields){
        resolve({
          err:err,
          results:results,
          fields:fields
        });
        reject({
          err:err
        });
      });
    });
    return promise;
  } 
};

module.exports = UserOp;
