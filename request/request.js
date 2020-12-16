exports.request = function(params){
    const publicUrl = "http://ewc.zinchon.net";
    return new Promise((resolve,reject)=>{
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        ...params,
        url:publicUrl + params.url,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:(res)=>{
          resolve(res);
        },
        fail:(err)=>{
          reject(err)
        },
        complete:()=>{
          wx.hideLoading();
        }
      })
    })
  }