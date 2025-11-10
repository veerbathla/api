const express=require('express');
const app=express();
const port=3000;
const slist=require('./Apijson.json');
const fs=require('fs').promises;
app.use(express.json());
app.get('/getdata',(req,res)=>{
    res.send(slist);
});
app.post('/insertdata',async(req,res)=>{
    try{
        slist.push(req.body);
        console.log(slist);
        await fs.writeFile('Apijson.json',JSON.stringify(slist),'utf8');
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
});
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})
