const jwt = require('jsonwebtoken');

const tokenOp = {
    secret: 'check',
    time: '1d',
    xxx: function (data) {
        return jwt.sign(data, this.secret, this.time);
    },

    yyy: function (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                console.log(JSON.stringify(decoded));
                return false;
            }else{
                return true;
            }
        }
        )
    }
}

module.exports = tokenOp;