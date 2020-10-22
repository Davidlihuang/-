// Pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      region:["北京市", "北京市", "朝阳区"],
      now:'',
      locationId: '',
  },

  //picker绑定函数，改变地区
  changeRegion:function(event) {
    this.setData({
      region:event.detail.value,
    })
   // this.getLocationId();
    this.getWeather();
  },
  //getlocationId
  getLocationId:function(){
     var that = this;
    //获取地级市的ID
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data:{
        location:that.data.region[2],
        adm:that.data.region[0],
        key:'4ef09dcbad214bfdba1fe6cc62cf4907'
      },
      success:function(e) {
        that.setData({
          locationId: e.data.location[0].id
        })
      },
    })
  },
  //访问API,获取天气信息
  getWeather:function(){
    var that= this;
    this.getLocationId();
    //获取当前地级市的天气
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data:{
        location:that.data.locationId,
        key:'4ef09dcbad214bfdba1fe6cc62cf4907'
      },
      success:function(info) {
        that.setData({
          now:info.data.now
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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