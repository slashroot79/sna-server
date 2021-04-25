
const dotenv = require('dotenv')
const dotenvExpand  = require('dotenv-expand')
dotenvExpand(dotenv.config())
const db = require('./database/db')
const express = require('express')
const path = require('path')
const cors = require('cors')
const scheduler = require('node-schedule')
const app = express()
const ArticleFetcher = require('./utils/articleFetcher')

db.start(app)

const PORT = process.env.PORT || 5000

const assetRoot = path.join(__dirname,process.env.ASSETS_ROOT)
console.log(`Assets root path : ${assetRoot}`)
app.use(express.static(assetRoot))
app.use(cors())

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send(err)
})

app.get('/',(req,res)=>{
    
})

app.on("error",()=>{
    throw new Error("500 Internal Server Error. Please try again later.")
})

app.on("ready",()=>{
    const articleFetcher = new ArticleFetcher()
    const job = scheduler.scheduleJob('0 */6 * * *',()=>{
        articleFetcher.fetchArticles()
    })
    
    app.listen(PORT,()=>{
        console.log(`*** Started Node server listening on Port ${PORT} ***`)
    })
})

