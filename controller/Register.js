const database = require('../database/db');
const register=async(req,res)=>{
    try{
        console.log(req.body);
        const db=await database();
        const collection=db.collection("Login");
        const user=await collection.insertOne(req.body);
        if(user.acknowledged==true)
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
module.exports={register}