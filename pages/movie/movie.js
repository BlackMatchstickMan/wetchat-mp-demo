// pages/movie/movie.js
// 通过index主页的跳转时的id来获取所需电影的详情
var API_url = 'https://api.douban.com/v2/movie/subject/';
Page({
  /**
   * 页面的初始数据
   */
  data: {
  movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    console.log(options.id);
    var that = this;
    wx.request({
      url: API_url + options.id,
      data: {},
      method: 'GET',
      header: {
        'Content-Type': 'application/json,application/json'
      },
      success: function(resp) {
        console.log(resp);
        that.setData({
          movie: resp.data
        })
      }
    })
  },
  personDetail: function() {
    console.log(123);
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