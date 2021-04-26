
const getRand = (min, max)=>{ 
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const retryWrapper = async (myFunc,retries)=>{
    let attempts = !isNaN(Number(retries)) ? Number(retries) : 3
    const originalAttempts = attempts
    while(attempts>=0){
        attempts--
        try{
            console.log(`attempt ${attempts+1}`)
            let res = await myFunc()
            return res || 'success'
        }catch(error){
            if(attempts<0){
                throw `ERROR: could not execute the function. Giving up after ${originalAttempts} attempts...`
            }
        }
    }
}

module.exports = {getRand, retryWrapper}