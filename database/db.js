
const mongoose = require('mongoose')
let dbState = require('../utils/appConstants').db
const dbServer = process.env.DB_SERVER

console.log(`Attempting to connect to DB server. \n connectionString : ${dbServer}`)

const start = (app)=>{
    mongoose.connect(dbServer,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log(`MONGODB : Initial connection success...`)
        app.emit("ready")
    }).catch((err)=>{
        console.log(`MONGODB : Initial connection error : ${err}`)
    })
    
    mongoose.connection.on('error',()=>{
        console.log(`Error RE-connecting to database server`)
    })

    mongoose.connection.on('disconnected',()=>{
        app.emit("error")
        console.log(`Lost connection to database server`)
    })

    mongoose.connection.on('reconnect',()=>{
        console.log(`Reconnected to database server`)
    })

    mongoose.connection.on('reconnectFailed',()=>{
        console.log(`Unable to reconnect to database server`)
    })

}

const stop = ()=>{
    mongoose.disconnect()
}

module.exports = {start,stop}
