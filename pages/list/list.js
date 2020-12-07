const fetch = require('../../until/until')
Page({

  data: {
    category: [],
    shop: []
  },
 
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then(value => {
      this.setData({category: value.data})
      wx.setNavigationBarTitle({
        title: value.data.name
      })
      return fetch(`categories/${this.data.category.id}/shops` , 
      {_page: 1, _limit:20})
      .then(value => {
        this.setData({shop: value.data})
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.category.name){
      wx.setNavigationBarTitle({
        title: 'this.data.category.name',
      })
    }
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