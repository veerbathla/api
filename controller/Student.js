
const database = require('../database/db');
const jw=require('./Auth');
const jwt = require('jsonwebtoken');

const getStudentList = async (req, res) => {
    try {
        const token = req.body.token;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, 'veerbathla@1234'); // replace with your JWT secret
        } catch (err) {
            return res.status(401).json({ message: "Invalid token", error: err.message });
        }

        const db = await database();
        const collection = db.collection("apiii");
        const result = await collection.find().toArray();

        console.log(result); // <--- This will now show data on the server console
        res.status(200).json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};



const insertStudent = async (req, res) => {
    try {
        const resultnew=jw.verifyToken(req.body.token);
        if(!resultnew.valid)
            {
                return res.status(401).send({"message":"Invalid Token",error:result.message});
            }
            else
            {
        console.log(req.body);
        const newdata = req.body;
        const db = await database();
        const collection = db.collection("apiii");
        const result = await collection.insertOne(req.body);
        // sList.push(newdata)
        if (result.acknowledged == true) {
            res.send({
                "status": "Data inserted successfully....",
                "statuscode": 200,
                "data": result // used to get sent in the body of the request (mainly used for PUT, POST)
            });
        }
        else {
            res.send({
                "status": "oops some issue occur, please try again....",
                "statuscode": 400,
            });
        }
    }
}
    catch (err) {
        res.send(err);
    }
}
const deleteStudent=async(req,res)=>{
    const resultnew=jw.verifyToken(req.body.token);
        if(!resultnew.valid)
            {
                return res.status(401).send({"message":"Invalid Token",error:result.message});
            }
            else
            {
     const name = req.params.name;
        const db = await database();
        const collection = db.collection("apiii");
        const result = await collection.deleteOne({name : name});
    res.send(
        {
            "status":"data deleted successfully",
            "statuscode":200,
            "data":name
        }
    );
    console.log("data deleted successfully")
}
}
const { ObjectId } = require("mongodb");
const updateStudent=async(req,res)=>{
    const resultnew=jw.verifyToken(req.body.token);
        if(!resultnew.valid)
            {
                return res.status(401).send({"message":"Invalid Token",error:result.message});
            }
            else
            {
     const id = req.params.id;
        const db = await database();
        const updateData = req.body;
        const collection = db.collection("apiii");
        const result = await collection.updateOne(  { _id: new ObjectId(id) }, { $set: updateData });

    res.send(
        {
            "status":"data updated successfully",
            "statuscode":200,
            "data":id
        }
    );
    console.log("data updated successfully")
}
}
module.exports={getStudentList,insertStudent,updateStudent,deleteStudent}
