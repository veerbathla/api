const getCourseList=(req,res)=>{
    try{
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
}
const insertCourse=(req,res)=>{
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
const updateCourse=(req,res)=>{
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
const deleteCourse=(req,res)=>{
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
module.exports={getCourseList,insertCourse,updateCourse,deleteCourse}
