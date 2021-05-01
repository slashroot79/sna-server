
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
const retryWrapper = require('./utils/utils').retryWrapper
const articleRoutes = require('./routes/newsArticleRoutes')

db.start(app)

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send(err)
})

app.use('/articles',articleRoutes)

app.on("error",()=>{
    console.log("***** E R R O R *****")
})

app.on("ready",()=>{
    const articleFetcher = new ArticleFetcher()
    // const job = scheduler.scheduleJob('0 */4 * * *',()=>{
    //     retryWrapper(articleFetcher.fetchArticles,2).then((res)=>{
    //         console.log(`${res} Fetched and saved articles successfully. Next fetch 4 hours from now.`)
    //     }).catch((e)=>{
    //         console.error(`${e} Error fetching and saving articles.Logs are (location). Will try in 4 hours.`)
    //     })
    // })
    retryWrapper(articleFetcher.fetchArticles,2).then((res)=>{
        console.log(`** ${res} *** Fetched and saved articles successfully. Next fetch 4 hours from now.`)
    }).catch((e)=>{
        console.error(`** ${e} **Error fetching and saving articles.Logs are (location). Will try in 4 hours.`)
    })
    app.listen(PORT,()=>{
        console.log(`*** Started Node server listening on Port ${PORT} ***`)
    })
})

