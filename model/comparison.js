const mysql = require('mysql');
const pool = require('../Dao/SqlPool');

const ComparisonOp = {
    //学工部对宿舍进行评比(多个参数前端循环传值来update,现在测试两组数据)
    score(param){   
        const sql = 'UPDATE score SET score=100+(SELECT SUM(?+?) FROM optiones) WHERE louhao=? and sushehao=?';
        console.log('1111111111');
        
        let promise = new Promise(function(reslove, reject){
            pool.query(sql,[param.option1,param.option2,param.louhao, param.sushehao],function(err, results, fileds){
                
                reslove({
                    err: err,
                    results: results,
                    fileds: fileds
                });
                reject({
                    err: err
                });
            });
        });
        return promise;
    }
}

module.exports = ComparisonOp;