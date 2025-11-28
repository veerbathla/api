const express=require('express');
const app=express();
app.set('view engine','ejs');
// const routes=require('./routes/index');
const port=3000;
const cors=require('cors');
app.use(cors());
app.use(express.json());
// app.use('/',routes);
const { swaggerUi, specs } = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})