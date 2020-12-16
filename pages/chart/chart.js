// pages/chart/chart.js

// 绘图
function onInitChart(F2, config) {
  const chart = new F2.Chart(config);
  const portData = wx.getStorageSync('portdata');
  if(!portData){
    console.log("portData空");
    return;
  };
  let data = portData.ths.map(v=>({time:v.time.split(" ")[1],temperature:parseFloat(v.temperature)}));
  chart.source(data, {
    temperature: {
      tickCount: 5,
      min: 0,
      // max:100
    },
    time: {
      range: [ 0, 1 ],
      tickCount: 4
    }
  });
  chart.tooltip({
    showCrosshairs: true,
    showItemMarker: false,
    onShow: function onShow(ev) {
      const items = ev.items;
      items[0].name = null;
      items[0].value = '温度 ' + items[0].value;
    }
  });
  chart.axis('time', {
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.line().position('time*temperature');
  chart.point().position('time*temperature').style({
    stroke: '#fff',
    lineWidth: 1
  });
  chart.render();
  return chart
}
function onInitChart2(F2, config) {
  const chart = new F2.Chart(config);
  const portData = wx.getStorageSync('portdata');
  if(!portData){
    console.log("portData空");
    return;
  };
  let data = portData.ths.map(v=>({time:v.time.split(" ")[1],humidity:parseFloat(v.humidity)}));
  chart.source(data, {
    humidity: {
      tickCount: 5,
      min: 0,
      // max:100
    },
    time: {
      range: [ 0, 1 ],
      tickCount: 4
    }
  });
  chart.tooltip({
    showCrosshairs: true,
    showItemMarker: false,
    onShow: function onShow(ev) {
      const items = ev.items;
      items[0].name = null;
      items[0].value = '湿度 ' + items[0].value;
    }
  });
  chart.axis('time', {
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.line().position('time*humidity');
  chart.point().position('time*humidity').style({
    stroke: '#fff',
    lineWidth: 1
  });
  chart.render();
  return chart
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    onInitChart:onInitChart,
    onInitChart2:onInitChart2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})