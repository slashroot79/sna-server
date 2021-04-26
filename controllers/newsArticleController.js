
const NewsArticleService = require('../services/newsArticleService')

class NewsArticleController {
    constructor(query){
        this.articleService = new NewsArticleService(query)
        console.log(`=============> loaded article controler.... `)
    }

    getAllArticles = (req,res,next)=>{
        console.log(`=============> in the article service getall articles now `)
        this.articleService.getAllArticles().then((articles)=>{
            res.json({articles:articles})
        }).catch((error)=>{
            console.error(error)
        res.status(500).json({error:error})
        })
    }

}

module.exports = NewsArticleController