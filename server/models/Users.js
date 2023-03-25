const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    },
})

const UserModel = model("users", UserSchema)
module.exports = UserModel