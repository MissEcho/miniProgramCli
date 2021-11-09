// pages/todo/todo.js
import moment from 'moment';
import {
  delTodo
} from '../../utils/util'
import {
  getTodo
} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allTodo: [],
    workTodo: [],
    studyTodo: [],
    dailyTodo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTodo({}, (res) => {
      // 获取所有todo，根据分类
      let result = res.data;
      let workTodo = result.filter(item => {
        return item.type == 'work'
      })
      let studyTodo = result.filter(item => {
        return item.type == 'study'
      })
      let dailyTodo = result.filter(item => {
        return item.type == 'daily'
      })
      this.setData({
        allTodo: result,
        workTodo,
        studyTodo,
        dailyTodo
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