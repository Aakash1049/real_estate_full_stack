const mongoose = require("mongoose")
const  Schema = mongoose.Schema;


const UserSchema = new Schema ({
    email :{type:String,unique:true,required:true},
    password:{type:String, required:true}
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;