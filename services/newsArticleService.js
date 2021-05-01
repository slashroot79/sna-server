
const NewsArticle = require('../models/newsArticle')
const newsArticle = new NewsArticle()

class NewsArticleService {
    constructor(query){
        this.query = query
    }

    getAllArticles = async ()=>{
        try {
            const cat = this.query
            const articles = await NewsArticle.find({category:cat})
            return articles
        } catch (error) {
            throw `Error fetching articles for category ${this.query}`
        }
    }
}

module.exports = NewsArticleService