const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "Enter the name"]
    },
    email : {
        type : String,
        required : [true, "Enter the email"]
    },
    password : {
        type : String,
        required : [true, "Enter the password"]
    }
},
{
    timestamps: true
})


module.exports = mongoose.model("User", userSchema);