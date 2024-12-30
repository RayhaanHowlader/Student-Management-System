const express =  require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const EmployeeModel=require("./models/Employee")
const app=express();
const port =3000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");
app.post('/reg',(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json())
})
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Success");
            }
            else{
                res.json("the password is incorrect");
            }
        }
        else{
            res.json("No record exists")
        }
    })
})
app.get("/dashboard",(req,res)=>{
    res.send("This is dashboard");
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});