const express = require("express");
const path = require("path");
const db = require("../model/dbManager");
const router = express.Router();

router.get("/register", (req, res) => {
res.sendFile(path.join(__dirname, "../" ,"views", "register.html"));
});

router.post("/register",(req,res)=>{
const formData = {
    username: req.body.login,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword
};
if(formData.password != formData.repassword){
    res.send("password not math");
}
else{
let sql = "SELECT login FROM users";
db.query(sql,(err,result)=>{
    if (err){
        res.send(err);
    }
    else{
        if(result.length == 0){
            console.log("test");
            const sql = "INSERT INTO `users` SET ?";
            const data = {

            };

            db.query(sql,(err,result)=>{
                if (err){
                    res.send(err);
                }
                else{
                    res.send("<h2>Users created!</h2>");
                }
            })
        }
    }
})
}
res.send(formData);
});
module.exports = router;