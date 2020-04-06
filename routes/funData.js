//.then(function(data))函数
module.exports = function(req,res){
    return function(data){
      if (!data.err) {
        const results = data.results;        
        res.json(results);
      } else {
        console.log(data.err);
      }
    };
};