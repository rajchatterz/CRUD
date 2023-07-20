const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL
const connectionToDb = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        .then((con)=>{
            console.log(`connceted to the mongodb at ${con.connection.host}`)

        })
        .catch((err)=>{
            console.log(`got an error ${err}`)
        })
    } catch (error) {
        console.error("we have found an error");
    }
}
module.exports=connectionToDb