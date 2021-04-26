
const express = require('express')
const app = express()
const router = express.Router()
const ArticleController = require('../controllers/newsArticleController')
const categories = require('../utils/appConstants').newsAPIPaths

router.get('/',(req,res,next)=>{
    const articleController = new ArticleController('news')
    articleController.getAllArticles(req,res,next)
})
router.get('/news',(req,res,next)=>{
    const articleController = new ArticleController('news')
    articleController.getAllArticles(req,res,next)
})
router.get('/health',(req,res,next)=>{
    const articleController = new ArticleController('health')
    articleController.getAllArticles(req,res,next)
})
router.get('/tech',(req,res,next)=>{
    const articleController = new ArticleController('tech')
    articleController.getAllArticles(req,res,next)
})
router.get('/science',(req,res,next)=>{
    const articleController = new ArticleController('science')
    articleController.getAllArticles(req,res,next)
})
router.get('/entertainment',(req,res,next)=>{
    const articleController = new ArticleController('entertainment')
    articleController.getAllArticles(req,res,next)
})
router.get('/sports',(req,res,next)=>{
    const articleController = new ArticleController('sports')
    articleController.getAllArticles(req,res,next)
})
router.get('/business',(req,res,next)=>{
    const articleController = new ArticleController('business')
    articleController.getAllArticles(req,res,next)
})


module.exports = router
