const mongoose = require ('mongoose')
MongoURI = 'mongodb+srv://logan:logan123@cluster0.ls4t0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(MongoURI,(()=>{
        console.log("server is UP mongoDb is Connected")
    }))
}
module.exports = connectToMongo