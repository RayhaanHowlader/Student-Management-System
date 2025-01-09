const mongoose=require("mongoose");
const KTSchema=new mongoose.Schema({
    rollNumber: String,
  subjects: [String],
  totalCost: Number,
});
const KTModel=mongoose.model("kt",KTSchema);
module.exports=KTModel;