const pool = require('./SqlPool');

let createStudent = `CREATE TABLE student(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	studentid VARCHAR(11) UNICODE COMMENT '学号',
	NAME VARCHAR(6) NOT NULL COMMENT '姓名',
	department VARCHAR(20) NOT NULL COMMENT '系名',
	profession VARCHAR(20) NOT NULL COMMENT '专业',
	grade VARCHAR(10) NOT NULL COMMENT '年级',
	class VARCHAR(20) NOT NULL COMMENT '班级',
	buildnumber INT(11) COMMENT '楼号',
	Dormitorynumber INT(11) COMMENT '宿舍号',
	tellphone VARCHAR(12) COMMENT '电话',
	Tourguidename VARCHAR(5) COMMENT '导员姓名',
	Tourguidephone VARCHAR(11) COMMENT '导员电话',
	dormmanager VARCHAR(5) COMMENT '宿舍长',
	dormmanagerphone VARCHAR(11) COMMENT '宿舍长电话',
	fatherphone VARCHAR(11) COMMENT '父亲电话',
	motherphonr VARCHAR(11) COMMENT '母亲电话',
	photo VARCHAR(100) COMMENT '图片保存路径'
)ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8';`;

module.exports = function() {
    pool.query(createStudent, function(err, results, fields) {
      if (err) {
        console.log(err);
      }
    });
};