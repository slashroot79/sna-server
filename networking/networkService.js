
const axios = require('axios')

class NetworkService {
    constructor(apikey,baseurl){
        this.baseURL = baseurl
        this.service = axios.create({
          baseURL:baseurl,
          headers:{
            Authorization:apikey
          }
        })
    }

    get = async (path,params,cb)=>{
      this.service.defaults.params = params
      let data
      try{
        const res = await this.service.get(path)
        data = res.data
        return data
      }catch(err){
        throw Error(err)
      }
    }

    post = (path,params,cb)=>{
      
    }
}

module.exports = NetworkService

