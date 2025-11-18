const database = require('../database/db');
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
                 console.log("Login Successful");
                 res.send({
                    "status":"Login Successful",
                    "statuscode":200,
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