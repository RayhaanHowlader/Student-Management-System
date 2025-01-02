const mongoose=require("mongoose");
const FormDetailsSchema=new mongoose.Schema({
    name:String,
    address:String,
     age:Number,
     adhaarNumber: Number,
    date:Date,
     verified: Boolean,
    adhaar:String,
    eleventh:String,
    twelve:String

},{collection: "formDetails"});
const FormModel = mongoose.model("formDetails",FormDetailsSchema);
module.exports=FormModel;