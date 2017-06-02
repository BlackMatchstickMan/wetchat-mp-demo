// pages/hot/hot.js
var API_url = 'https://api.douban.com/v2/movie/in_theaters';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showToast({
      title: '一大波好片儿正在袭来...',
      icon: 'loading',
      duration: 5000
    });
    wx.request({
      url: API_url,
      data: {},
      header: {
        //豆瓣的请求格式比较奇葩
        'Content-Type': 'application/json,application/json'
      },
      success: function(resp) {
        wx.hideLoading();
        console.log(resp);
      }
    })
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