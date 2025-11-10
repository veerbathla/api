
const database = require('../database/db');
const getStudentList = async (req, res) => {
    try {
        const db = await database();
        const collection = db.collection("apiii");
        const result = await collection.find().toArray();
        res.send(result);
    }
    catch (err) {
        res.send(err);432
    }
};

const insertStudent = async (req, res) => {
    try {
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
    catch (err) {
        res.send(err);
    }
}
const deleteStudent=async(req,res)=>{
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
const { ObjectId } = require("mongodb");
const updateStudent=async(req,res)=>{
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
module.exports={getStudentList,insertStudent,updateStudent,deleteStudent}
