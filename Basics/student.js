const getStudents=(req,res)=>{
    try{
    res.send(slist);
    }
    catch(err)
    {
        res.send(err)
    }
}
const insertStudents=(req,res)=>{
    try{
        slist.push(req.body);
        console.log(slist);
        fs.writeFile('Apijson.json',JSON.stringify(slist),'utf8');
res.send(
    {
        "staus":"Data Inserted Successfully",
        "statuscode":200,
        "data":slist
    }
);
console.log("Data Inserted Successfully");
    }
    catch(err)
    {
        console.error("Error writing files:",err);
        res.send(
            {
             "status":"Something went wrong",
             "statuscode":err,
            }
        );
    }
}

const updateStudents=(req,res)=>{
    try{
        slist.push(req.body);
        console.log(slist);
        fs.writeFile('Apijson.json',JSON.stringify(slist),'utf8');
   res.send(
    {
        "staus":"Data updated Successfully",
        "statuscode":200,
        "data":slist
    }
);
console.log("Data updated Successfully");
    }
    catch(err)
    { 
        res.send(err);
    }
}

const deleteStudents=(req,res)=>{
    try{
        slist.push(req.body);
        console.log(slist);
        fs.writeFile('Apijson.json',JSON.stringify(slist),'utf8');
   res.send(
    {
        "staus":"Data deleted Successfully",
        "statuscode":200,
        "data":slist
    }
);
console.log("Data deleted Successfully");
    }
    catch(err)
    { 
        res.send(err);
    }
}

module.exports={getStudents,insertStudents,updateStudents,deleteStudents}  