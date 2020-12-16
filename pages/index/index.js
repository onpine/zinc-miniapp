//index.js
import {request} from "../../request/request.js";
//获取应用实例
const app = getApp()
Page({
  data: {
    ports:[],
    // 当前点击的站点索引
    isActive:0,
    portData:[],
  },

  // 站点点击事件
  async handleChangeItem(e){
    let isActive = e.currentTarget.dataset.id;
    // 刷新站点数据
    const res = await this.getPortData(this.data.ports[isActive],13);
    if(res.statusCode === 200){
      // 保存数据
      this.setData({
        isActive,
        portData:res.data
      });
      wx.setStorageSync('portdata', res.data)
    }else{
      console.log(res_portData);
    }
  },

  // 站点列表获取
  async getPort(){
    try {
      const res = await request({url:"/port"});
      return res;
    } catch (error) {
      console.log(error)
    }
  },

  // 获取port站点的num条数据
  async getPortData(port, num){
    try {
      const res = await request({url:"/data",data:{portName: port,dataNum: num,}});
      return res;
    } catch (error) {
      console.log(error)
    }
  },

  onShow:async function (){
    // 获取站点列表
    const res_ports = await this.getPort();
    this.setData({
      ports:res_ports.data.ports
    })
    if(res_ports.statusCode === 200){
      // 获取站点列表成功后，获取第一个站点你的数据
      const res_portData = await this.getPortData(this.data.ports[0],13);
      if(res_portData.statusCode === 200){res_portData
        // 第一个站点数据获取成功，保存到data与缓存中
        this.setData({
          portData:res_portData.data
        });
        wx.setStorageSync('portdata', res_portData.data)
      }else{
        console.log(res_portData);
      }
    }else{
      console.log(res_ports);
    }
    
  },
  onLoad: function () {
   
  },
})
