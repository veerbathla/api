const database = require('../database/db');
const jw=require('./Auth');
const login=async(req,res)=>{
    try{
        console.log(req.body);
        const db=await database();
        const collection=db.collection("Login");
        const user=await collection.findOne({username:req.body.username});
        if(user!=null)
        {
            
           if(user.password==req.body.password)
             { 
                const token=jw.generateToken({data:req.body.username});
                 console.log("Login Successful");
                 res.send({
                    "status":"Login Successful",
                    "statuscode":200,
                    "token":token,
                    "data":user
                 })
             }
            else
            {
                res.send({
                    "status":"Invalid Credentials",
                    "statuscode":401
                 })
                
            }
        }
        else
        {
            res.send({
                "status":"User not found",
                "statuscode":404
             })
            }
    }
    catch(err)
    {
        res.send(err);
    }
}
module.exports={login}