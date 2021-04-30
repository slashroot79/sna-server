
const queries = require('./appConstants')
const articlePublisher = require('./articlePublisher')
const Network = require('../networking/networkService')
const network = new Network(process.env.NEWS_API_KEY, process.env.BASE_API_URL)

class ArticleFetcher {
    constructor(retries){
        this.retries = retries
        console.log("Article fetcher...fetching articles...")
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
            this.fetchArticlesWithQuery(query).then(r=>{
                return "successfully fetched and saved"
            }).catch(e=>{
                return "error fetching and/or saving"
            })
        })
    }

    fetchArticlesWithQuery = async (query)=>{
        let queryTerm = query.queryTerm
        const category = query.cat
        const defaultQuery = query.defaultQuery
        let data, attempts,success
        const r = !isNaN(Number(this.retries)) ? Number(this.retries) : 2
        for (attempts = r;attempts>=0;attempts--){
            if(success){
                break
            }
            try {
                if (attempts === 0){
                    queryTerm = defaultQuery
                }
                data = await network.get('/everything',{q:queryTerm,pageSize:10})
                console.log(`finished fetching articles on attempt ${attempts}...`)
                success = true
                this.publishArticles(category,data)
            } catch (err) {
                console.log(`Error on all retry attempts : ${r} for query ${query.queryTerm}`)
            }
        }

    }

    publishArticles = (category,data)=>{
        articlePublisher(category,data)
    }
}

module.exports = ArticleFetcher