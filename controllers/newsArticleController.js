
const NewsArticleService = require('../services/newsArticleService')

class NewsArticleController {
    constructor(query){
        this.articleService = new NewsArticleService(query)
    }

    getAllArticles = (req,res,next)=>{
        this.articleService.getAllArticles().then((articles)=>{
            res.json({articles:articles})
        }).catch((error)=>{
            console.error(error)
        res.status(500).json({error:error})
        })
    }

}

module.exports = NewsArticleController