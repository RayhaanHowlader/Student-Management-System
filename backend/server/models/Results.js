const mongoose=require("mongoose");
const ResultsSchema=new mongoose.Schema({
    rollno:Number,
    sub1: Number,
    sub2: Number
});
const ResultsModel=mongoose.model("result",ResultsSchema);
module.exports=ResultsModel;
