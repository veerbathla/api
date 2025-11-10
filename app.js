const express=require('express');
const app=express();
const port=3000;
const cors=require('cors');
app.use(cors());
const indexRouter=require('./routes/index');
app.use(express.json());
app.use('/',indexRouter);
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})