
const mongoose = require('mongoose')
let dbState = require('../utils/appConstants').db
const dbServer = process.env.DB_SERVER

console.log(`Attempting to connect to DB server. \n connectionString : ${dbServer}`)

mongoose.connect(dbServer)

mongoose.connection.once('open',()=>{
    dbStatus = dbState.CONNECTED
    console.log(`Established connection to Mongo db server :${dbStatus}`)
})

mongoose.connection.on('error',()=>{
    dbStatus = dbState.ERROR
    console.log(`Error connecting to the DB server : ${dbStatus}`)
})

mongoose.connection.on('disconnect',()=>{
    dbStatus = dbState.DISCONNECTED
    console.log(`Lost connection to database : ${dbStatus}`)
})

