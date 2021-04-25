
const queries = require('./appConstants')
const articlePublisher = require('./articlePublisher')
const Network = require('../networking/networkService')
const network = new Network(process.env.NEWS_API_KEY, process.env.BASE_API_URL)

class ArticleFetcher {
    constructor(retries){
        this.retries = retries === 0 ? 1 : retries
        console.log("fetching articles...")
    }

    fetchArticles = async ()=>{
        const articleQueries = [
            queries.newsAPIPaths.NEWS,
            queries.newsAPIPaths.HEALTH,
            queries.newsAPIPaths.TECH,
            queries.newsAPIPaths.SCIENCE,
            queries.newsAPIPaths.ENTERTAINMENT,
            queries.newsAPIPaths.SPORTS,
            queries.newsAPIPaths.BUSINESS,
        ]
        articleQueries.map(query=>{
            this.fetchArticlesWithQuery(query)
        })
    }

    fetchArticlesWithQuery = async (query)=>{
        let queryTerm = query.queryTerm
        const category = query.cat
        const defaultQuery = query.defaultQuery
        let data, attempts
        const r = !isNaN(Number(this.retries)) ? Number(this.retries) : 3
        for (attempts = r;attempts>=0;attempts--){
            try {
                if (attempts === 1){
                    queryTerm = defaultQuery
                }
                data = await network.get('/everything',{q:queryTerm,pageSize:1})
                console.log(`finished fetching articles on attempt ${attempts}...`)
                // this.publishArticles(category,data)
                break
            } catch (err) {}
            console.log(`Error on all retry attempts : ${attempts} for query ${query.queryTerm}`)
        }

    }

    publishArticles = (category,data)=>{
        articlePublisher(category,data)
    }
}

module.exports = ArticleFetcher