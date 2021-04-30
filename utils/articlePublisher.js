
const NewsArticle = require('../models/newsArticle')


const articlePublisher = async (category,data)=>{
    const articles = data.articles
    try {
        articles.map(article=>{
            const newsArticle = new NewsArticle()
            newsArticle.author = article.author || 'Not found',
            newsArticle.source = article.source.name || 'Not found',
            newsArticle.title = article.title || 'Not found',
            newsArticle.content = article.content || 'Not found',
            newsArticle.imageURL = article.urlToImage || 'Not found',
            newsArticle.url = article.url || 'Not found',
            newsArticle.publishDate = new Date(article.publishedAt),
            newsArticle.category = category
            newsArticle.save()
        })
        console.log(`Articlepublisher - Saved articles for : ${category}`)
    } catch (error) {
        console.log(`Article publisher - error saving articles for : ${category}`)
    }
}

module.exports = articlePublisher