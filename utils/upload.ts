import Api from "../services/Api"

const upload = ()=>{
  return new Promise((resolve,reject)=>{
    
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success (res:any) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: Api.upload, 
          filePath: tempFilePaths[0],
          name: 'file',
          header:{
            "Content-Type":'multipart/form-data'
          },
          formData: {
            'token': 'token'
          },
          success (res){
          
            resolve(res)
          },
          fail(err){
            reject(err)
          }
        })
      }
    })
  })
}

export default upload