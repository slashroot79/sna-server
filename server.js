const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

const assetRoot = path.join(__dirname,'../sna-client/public')
app.use(express.static(assetRoot))
app.use(cors())

const API_KEY = '52f5668a6004411ba2ef5a74c9b1863d'

app.get('/hi',(req,res)=>{
    console.log(`Root html path => ${assetRoot}/index.html`)
    res.send("Server response...")
})

app.listen(5000,()=>{
    console.log("*** Started listening on Port 5000 ***")
})

