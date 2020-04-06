const express = require('express');
const router = express.Router();
const user = require('../model/comparison');
const $fundata = require('../routes/funData');
const init = require('../Dao/initDatabases');
//学工部评比计算得分
router.get('/comparison', function(req, res, next){
    const param = req.query;
    console.log(param);
    
    user.score(param).then($fundata(req, res));
});
module.exports = router;
