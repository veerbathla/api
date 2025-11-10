
const database=require('../database/db')
const getTeacherList=async (req,res)=>{
    try{
        const db=await database.db();
        const collection=db.collection('Student')
        const result=await collection.find().toArray();
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
}
const insertTeacher=(req,res)=>{
    data.push(req.body);
    console.log(data);
    res.send(
        {
            "status":"data inserted successfully",
            "statuscode":200,
            "data":data
        }
    );
    console.log("data inserted successfully")
}
const updateTeacher=(req,res)=>{
    console.log(req.body);
    res.send(
        {
            "status":"data updated successfully",
            "statuscode":200,
            "data":req.query.name
        }
    );
    console.log("data updated successfully")
}
const deleteTeacher=(req,res)=>{
    console.log(req.body);
    res.send(
        {
            "status":"data deleted successfully",
            "statuscode":200,
            "data":req.query.name
        }
    );
    console.log("data deleted successfully")
}
module.exports={getTeacherList,insertTeacher,updateTeacher,deleteTeacher}
