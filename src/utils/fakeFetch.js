function getRandomDelay(){
    return Math.random() * 1500 // random delay between 0-1.5sec
}
const fakeFetch=(data)=>{
    return new Promise((resolve,reject)=>{
        const shouldFail = Math.random() > 2 // failing can be achieved
        setTimeout(() => {
            if(shouldFail){
                // reject("failed to fetch data") if we will reject api response will be fulfilled
                throw new Error("failed to fetch data, internal server error") // simulate reject error
            }else{
                resolve(data) // simulate response
            }
        }, getRandomDelay());
    })
}
export default fakeFetch;