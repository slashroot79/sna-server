
const NewsArticle = require('../models/newsArticle')


const articlePublisher = async (category,data)=>{
    const articles = data.articles
    articles.map(article=>{
        const newsArticle = new NewsArticle()
        newsArticle.author = article.author || 'Not found',
        newsArticle.source = article.source.name || 'Not found',
        newsArticle.title = article.title || 'Not found',
        newsArticle.content = article.content || 'Not found',
        newsArticle.imageURL = article.urlToImage || 'Not found',
        newsArticle.url = article.url || 'Not found',
        newsArticle.pubdlishDate = new Date(article.publishedAt),
        newsArticle.category = category
        newsArticle.save()
    })
    console.log("published articles....")
}

module.exports = articlePublisher