var sql = {
    //查询所有
    userFindAll: 'SELECT * FROM student',

    //按照宿舍号查找所有成员
    userfindByDormitorynumber: 'select * from student where Dormitorynumber=?',

    //按照年级专业查询本专业宿舍分布
    userFindByGradeAndProfession: 'select buildnumber, Dormitorynumber from student where grade=? and profession=?',

    //text
    userById: 'select * from student where id=?'
}

module.exports = sql;