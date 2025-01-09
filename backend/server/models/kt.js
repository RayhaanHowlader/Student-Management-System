const mongoose=require("mongoose");
const KTSchema=new mongoose.Schema({
    Subject:String
});
const KTModel=mongoose.model("employees",KTSchema);
module.exports=KTModel;