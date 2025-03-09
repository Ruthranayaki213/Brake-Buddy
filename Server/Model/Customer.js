const mongoose = require("mongoose");

const CustDetailsSchema = new mongoose.Schema({
    email: String,
    phone: String,
    pass: String,
    role: String,
});

const User = mongoose.model("user", CustDetailsSchema);
module.exports = {User};

//Samlpe Data
/*
const CustInfo = [{
    email : "ruthranayaki@gmail.com",
    phone : "9344136348"
    pass : "Ruthra.001"
    role : "User"
}]
*/ 