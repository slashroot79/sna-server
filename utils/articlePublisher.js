
const NewsArticle = require('../models/newsArticle')
const newsArticle = new NewsArticle()

const articlePublisher = async (category,data)=>{
    const articles = data.articles
    articles.map(article=>{
        newsArticle.author = article.author,
        newsArticle.source = article.source.name,
        newsArticle.title = article.title,
        newsArticle.content = article.content,
        newsArticle.imageURL = article.urlToImage,
        newsArticle.url = article.url,
        newsArticle.pubdlishDate = article.publishedAt,
        newsArticle.category = category
        newsArticle.save()
    })
    console.log("published articles....")
}

module.exports = articlePublisher