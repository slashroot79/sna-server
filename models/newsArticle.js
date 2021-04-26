
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleCollectionName = process.env.DB_ARTICLE_COLLECTION_NAME

const mongooseSchemaConfig = {
    useUnifiedTopology:true,
    serverSelectionTimeoutMS:5000
}

const newsArticleSchema = new Schema(
    {
        author:{type:String, requried:true},
        source:{type:String, requried:true},
        title:{type:String, requried:true},
        content:{type:String, requried:true},
        imageURL:{type:String, requried:true},
        url:{type:String, requried:true},
        publishDate:{type:Date},
        category:{type:String, requried:true, enum:["news","health", "tech","science","entertainment","sports","business"]}
    }, 
        mongooseSchemaConfig
)

const NewsArticle = mongoose.model(articleCollectionName, newsArticleSchema) 


module.exports = NewsArticle
