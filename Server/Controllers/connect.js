const mongoose = require("mongoose");
//Database Connection
module.exports.connect = () => {
    mongoose.connect('mongodb+srv://ruthranayakij21:pWrd1q1Ui84eClLc@bike-service-cluster.g8o8t.mongodb.net/?retryWrites=true&w=majority&appName=Bike-Service-Cluster', {

    })
        .then(() => {
            console.log("The database is connected")
        })
}