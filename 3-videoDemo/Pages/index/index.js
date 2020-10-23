// Pages/index/index.js
function getRandomcolor(){
  let rgb=[];
  for(let i =0; i < 3; i++) {
    let color = Math.floor(Math.random()*256).toString(16);
    color = (color.length == 1)? ('0'+color): color;
    rgb.push(color);
  }
  return '#'+rgb.join('');
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:'1',
        title:"firstVideo",
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      },
      {
        id:"2",
        title:"secondVideo",
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      },
      {
        id:'3',
        title:'thirdVideo',
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      },
      {
        id:'4',
        title:'forthVideo',
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
        
      },
    ],
    src:'',
    DanmuTxt: '',

  },
  getDanMuFunc:function(e){
    this.setData({
      DanmuTxt:e.detail.value
    })
  },
  sendDanmuFunc:function(e){
    let text = this.data.DanmuTxt
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomcolor()
    })
  },
  //绑定视频播放函数
  playVideoFunc:function(e){
    this.videoCtx.stop(); //停止正在播放的视频
    this.setData({
      src: e.currentTarget.dataset.url
    }) //更新视频地址
    this.videoCtx.play(); //播放新视频

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx = wx.createVideoContext('myVideo'); //生成并绑定视频
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