const mongoose=require("mongoose");
const ProfileDetailsSchema=new mongoose.Schema({
    email:String,
    firstname:String,
   
    lastname: String,
     age:Number,
     dob:Date,
     profile:String,
     city:String,
    address:String,
    distinct:String,
    contact:Number,
    alternatecontact:Number,
    mothername:String,
    fathername:String,
    dob:Date,
    gender:String,
    

},{collection: "profileDetails"});
const ProfileModel = mongoose.model("profileDetails",ProfileDetailsSchema);
module.exports=ProfileModel;