const mongoose = require('mongoose')
const constant = require('./constant')
mongoose.set('strictQuery', false)
function database() {
    mongoose.connect(constant.DataBase_URI, {

    })
    .then(() => {
        console.log("MongoDb is connected to your database.")
    })
    .catch(() => {
        console.log("Connection failed, pls try again.")
    })

}

//export 

module.exports = database;