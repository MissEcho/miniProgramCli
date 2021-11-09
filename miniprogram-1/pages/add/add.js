// pages/todo/todo.js
import moment from 'moment';
import {
  addTodo
} from '../../utils/util'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    taskContent: '',
    time: '08:00',
    type: 'work',
    date: moment(new Date()).format('YYYY-MM-DD'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindTextAreaBlur: function (event) {
    this.setData({
      taskContent: event.detail.value
    })
  },
  bindDateChange: function (event) {
    this.setData({
      date: event.detail.value
    })
  },
  bindPickerChange: function (event) {
    this.setData({
      time: event.detail.value
    })
  },
  tapType: function (event) {
    let {
      type
    } = event.currentTarget.dataset;
    this.setData({
      type
    })
  },
  onSubmit: function (e) {
    console.log(e.detail.value);
    let {
      taskContent,
      date,
      time,
      type
    } = this.data;
    let param = {
      content: taskContent,
      date,
      time,
      type
    }
    addTodo(param, (res) => {
      // 回到tab
      wx.showToast({
        title: '新建成功~',
        icon: 'success',
        duration: 2000,
        success: () => {
          wx.switchTab({
            url: '/pages/home/home',
            success: (e) => {
              let page = getCurrentPages().pop();
              if (page) {
                page.onLoad();
              }
            }
          })
        }
      })
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