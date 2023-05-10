const request = (url:string,data?:Record<string,any|ArrayBuffer>,method?:"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" )=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      method,
      header:{
        "Content-Type":'application/x-www-form-urlencoded'
      },
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      },
      complete(){
        
      }
    })
  })
}

export default request