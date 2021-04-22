
const dotenv = require('dotenv')
const dotenvExpand  = require('dotenv-expand')
dotenvExpand(dotenv.config())

// const db = require('./database/dbConnection')

const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5000
const API_KEY = process.env.NEWS_API_KEY

const assetRoot = path.join(__dirname,process.env.ASSETS_ROOT)
console.log(`Assets root path : ${assetRoot}`)
app.use(express.static(assetRoot))
app.use(cors())

app.get('/',(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log(`*** Started listening on Port ${PORT} ***`)
})



// //test
// const Network = require('./networking/networkService')
// const network = new Network(process.env.NEWS_API_KEY, process.env.BASE_API_URL)
// network.get('/everything',{q:"USA"},(res,err)=>{
//   err ? console.log(`Error : ${err}`) : console.log(`Response : ${res}`)
// })

