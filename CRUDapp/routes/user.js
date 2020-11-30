let mysqlConf = require("../db").mysql_pool;
module.exports = {
    addUserPage: function(req,res) {
        res.render('add-user.ejs');
    },
    editUserPage: function(req,res) {
        res.render('edit-user.ejs');
    },
    deleteUser: function(req,res) {
        const userId=req.params.id;
        let query = "DELETE FROM people WHERE id = '"+userId+"'; ";
        mysqlConf.getConnection(function(err,connection){
            connection.query(query,function(err,result){
                if(err){
                    res.json({status:500,message:"faliure",error:err});
                }else if(res.statusCode === 200){
                    console.log("message: data deletion success");
                    res.redirect("/");
                }
                
                connection.release();
            })

        });
    },
    addUser: function(req,res) {
        const Name = req.body.name;
        const Email = req.body.email;
        const Interest = req.body.interest;
        const Image = req.body.image;
       
        //res.json({name: name,email:email,interest:interest,file:file});
        let query = "INSERT INTO people(name ,email ,interest ,image) VALUES('"+Name+"','"+Email+"','"+Interest+"','"+Image+"')"; 
        mysqlConf.getConnection(function(err,connection){
            connection.query(query,function(err,result){
                if(err){
                    res.json({status:500,message:"faliure",error:err});
                }else if(res.statusCode === 200){
                    console.log("message: data insertion success");
                    res.redirect("/");
                }
                
                connection.release();
            })

        });
    },
    editUIser: function(req,res) {
        const Name = req.body.name;
        const Email = req.body.email;
        const Interest = req.body.interest;
        const Image = req.body.image;
        const userId=req.params.id;

        //res.json({name: name,email:email,interest:interest,file:file});
      
        let updateQuery ="UPDATE people SET name='"+Name+"',email='"+Email+"',interest='"+Interest+"',image='"+Image+"' WHERE id = '"+userId+"'; ";
        mysqlConf.getConnection(function(err,connection){
            connection.query(updateQuery,function(err,result){
                if(err){
                    res.json({status:500,message:"faliure",error:err});
                }else if(res.statusCode === 200){
                    console.log("message: data insertion success");
                    res.redirect("/");
                }
                
                connection.release();
            })

        });

    }
};

//req.body.fname;