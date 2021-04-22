
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleCollection = process.env.DB_COLLECTION_NAME
console.log(`Collection name is ${articleCollection}`)

const NewsArticleSchema = new Schema({
    author:{type:String, requried:true},
    source:{type:String, requried:true},
    title:{type:String, requried:true},
    content:{type:String, requried:true},
    imageURL:{type:String, requried:true},
    url:{type:String, requried:true},
    publishDate:{type:Date, required:true},
    category:{type:String, requried:true, enum:["news","health", "tech","science","entertainment","sports","business"]}
})

const NewsArticle = mongoose.model('newsarticle', NewsArticleSchema) 

