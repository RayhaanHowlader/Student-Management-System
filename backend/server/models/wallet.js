const mongoose=require("mongoose");
const WalletSchema=new mongoose.Schema({
    email:String,
    money: Number
});
const WalletModel=mongoose.model("wallet",WalletSchema);
module.exports=WalletModel;
