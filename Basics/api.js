const express=require('express');
const app=express();
const port=3000;
const slist=require('./data.json');
app.get('/getdata',(req,res)=>{
    res.send(slist);
})
app.post('/insertdata',(req,res)=>{
    console.log(req.body);
    res.send({
"status":"Data Inserted Successfully",
"statuscode":200,
"data":req.body
    });
})

app.put('/updatedata',(req,res)=>{
    console.log(req.body);
    res.send({
"status":"Data updated Successfully",
"statuscode":200,
"data":req.query.name
    });
})

app.delete('/deletedata/:name',(req,res)=>{
    console.log(req.body);
    res.send({
"status":"Data deleted Successfully",
"statuscode":200,
"data":req.params.name

    });
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});