const express = require('express');
const router = express.Router();
const user = require('../model/user');
const nodeexcel = require('excel-export');

//按宿舍号查询打印
router.get('/:number', function(req, res, next){
    const number = req.params;
    const param = number.number;
    
    user.findDormitory(param).then(function(data){
        //设置头响应，在Content-type中加入编码格式为utf-8即可实现内容支持中文
       res.setHeader('Content-Type','application/vnd.openxmlformats;charset=utf-8');
       //设置下载文件名,中文文件名可以通过编码转换写入headr中
       res.setHeader("Content-Disposition","attachment; filename="+ encodeURI('宿舍信息表') + ".xlsx");
        //res.send('success');
        let results = JSON.stringify(data.results);
        //console.log(results);
        
        let new_results = JSON.parse(results);
        //console.log(new_results);
        /* for(let i = 0; i < new_results.length; i++){
            for(let j in new_results[i]){
                console.log(j + ":" + new_results[i][j]);
            }
        } */
        
    
        //创建一个写入格式map,其中cols(表头),rows(每一行数据)
        let conf = {};
        //手动创建表头内容
        let cols = ['学号', '姓名', '系别', '专业', '年级', '楼号', '宿舍号', '电话', '导员', '导员电话', '宿舍长', '宿舍长电话', '父亲电话', '母亲电话','照片'];
        //在conf中添加cols
        conf.cols = [];
        for(let i = 0; i < cols.length; i++){
            //创建表头数据所对应的类型，其中包括caption内容type类型
            let tits = {};
            tits.caption = cols[i];
            //添加对应类型，一般string
            tits.type = 'string';
            //将每一个表头加入cols
            conf.cols.push(tits); 
       }
       //创建一个和表头对应且名称与数据库字段对应数据，便于循环输出
       let rows = ['studentid', 'name', 'department', 'profession', 'grade', 'buildnumber', 'Dormitorynumber', 'tellphone', 'Tourguidename', 'Tourguidephone', 'dormmanager', 'dormmanagerphone', 'fatherphone', 'motherphonr', 'photo'];
       //用于承载数据库中的数据
       let datas = []
       //循环数据库得到的数据
       for(let i = 0; i < new_results.length; i++){
           //用于转载每次得到的数据
           let row = [];
           //内循环取出每个字段的数据
           for(let j = 0; j < rows.length; j++){
               row.push(new_results[i][rows[j]]);
               
           }
           //将每一个{}中的数据添加到承载中
           datas.push(row);
       }
       conf.rows = datas;
       //将所有数据写入nodeExcel
       let result = nodeexcel.execute(conf);
       res.end(result,'binary');
    });
    
});

//按专业和年级打印信息
router.get('/:grade/:profession', function(req, res, next){
     const param = req.params;
    //创建一个写入格式map,其中cols(表头),rows(每一行数据)
    let conf = {};
     //手动创建表头内容
    let cols = ['楼号','宿舍号'];
    //在conf中添加cols
    conf.cols = [];
    for(let i = 0; i < cols.length; i++){
    //创建表头数据所对应的类型，其中包括caption内容type类型
    let tits = {};
    tits.caption = cols[i];
    //添加对应类型，一般string
    tits.type = 'string';
    //将每一个表头加入cols
    conf.cols.push(tits); 
    }
    user.findGradeAndProfession(param).then(function(data){
        let results = JSON.stringify(data.results);
        let new_results = JSON.parse(results);
        console.log(new_results);
        //创建一个和表头对应且名称与数据库字段对应数据，便于循环输出
        let rows = ['buildnumber','Dormitorynumber'];
       //用于承载数据库中的数据
        let datas = []
       //循环数据库得到的数据
        for(let i = 0; i < new_results.length; i++){
        //用于转载每次得到的数据
            let row = [];
            //内循环取出每个字段的数据
            for(let j = 0; j < rows.length; j++){
                row.push(new_results[i][rows[j]].toString());
                //console.log(row);
                //console.log(row[j]);
            }
            //将每一个{}中的数据添加到承载中
            datas.push(row);
            //console.log(datas);    
        }
           conf.rows = datas;
           //将所有数据写入nodeExcel
           let result = nodeexcel.execute(conf);
           res.setHeader('Content-Type','application/vnd.openxmlformats;charset=utf-8');
           //设置下载文件名,中文文件名可以通过编码转换写入headr中
           res.setHeader("Content-Disposition","attachment; filename="+ encodeURI('宿舍分布信息表') + ".xlsx");
           res.end(result,'binary');
        });
});

module.exports = router;