
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

    get = (path,params,cb)=>{
      this.service.defaults.params = params
      this.service.get(path).then(res=>{
        console.log(res.status, res.data)
        cb(res.data,null)
      }).catch(err=>{
        cb(null,err)
      })
    }

    post = (path,params,cb)=>{
      this.service.defaults.data = params
      this.service.post(path).then(res=>{
        console.log(res.status, res.data)
        cb(res.data,null)
      }).catch(err=>{
        cb(null,err)
      })
    }
}

module.exports = NetworkService

