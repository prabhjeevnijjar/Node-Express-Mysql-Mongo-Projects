let mysqlConf = require("../db").mysql_pool;
module.exports = {
    homePage: function (req,res){
        
        let query = "SELECT * FROM people ORDER BY id ASC";
       
        mysqlConf.getConnection(function (err, connection) {
            connection.query(query,function(err,result){
                if(err){
                    res.json({status:500,message:"faliure"});
                    
                } else {
                console.log("message: data fetch success");
                res.render("index.ejs",{ users: result });
            }
                connection.release();
        });
    })
    }
};