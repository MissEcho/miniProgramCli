// pages/todo/todo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    taskContent: '',
    time: '12:01',
    type: 'work',
    dateStr: {},
    dateIdx: 0,
    dateArray: [{
        name: 'today',
        num: 0
      },
      {
        name: 'tomorrow',
        num: 1
      },
      {
        name: 'afterTomorrow',
        num: 2
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tapType: function (event) {
    let {
      type
    } = event.currentTarget.dataset;
    this.setData({
      type
    })
  },
  onSubmit: function () {
    let {
      taskContent,
      dateIdx,
      time,
      type
    } = this.data;
    let param = {
      taskContent,
      dateIdx,
      time,
      type
    }
    console.log(param)
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