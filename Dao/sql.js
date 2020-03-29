var sql = {
    userAddSql: `SELECT * FROM student`,

    //按照宿舍号查找所有成员
    userfindByDormitorynumber: 'SELECT Dormitorynumber FROM student where Dormitorynumber = ?',
}

module.exports = sql;