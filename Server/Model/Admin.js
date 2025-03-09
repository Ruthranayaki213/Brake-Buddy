const mongoose = require("mongoose");

const AdminDetailsScehma = new mongoose.Schema({
        email: String,
        phone: Number,
        pass: String,
        role: String,
});

const Admin=mongoose.model("AdminInfo", AdminDetailsScehma);
module.exports = {Admin}

//Samlpe Data 
/*
const AdminInfo = [{
    email : "ruthranayaki@gmail.com",
    phone : "9344136348"
    pass : "Ruthra.001"
    role : "Admin"
}]
*/ 