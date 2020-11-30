require('dotenv').config();
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();

const{homePage} = require("./routes/index");
const{addUser,addUserPage,deleteUser,editUserPage,editUIser} = require("./routes/user");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(fileUpload());
app.set('view engine','ejs');

//routes for app
app.get("/",homePage);
 app.get("/add",addUserPage);
app.get("/edit/:id",editUserPage);
app.get("/delete/:id",deleteUser);
app.post("/add",addUser);
 app.post("/edit/:id",editUIser);

app.listen(3000,function(){
    console.log("Connected to port 3000");
})