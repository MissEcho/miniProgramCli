// pages/home/home.js
import moment from 'moment';
import {
  getTodo,updateTodo
} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   * type: work,study,daliy
   * status:create,complete,undone,overdue
   * time:存入年月日时分秒
   */
  data: {
    animationData: {},
    animation: '',
    todoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getTodo({
      date: moment(new Date()).format('YYYY-MM-DD')
    }, (res) => {
      this.setData({
        todoList: res.data
      })
    })
  },
  onChecked: function (event) {
    let {
      index
    } = event.currentTarget.dataset;
    let todoItem = this.data.todoList[index];
    let newStatus = '';
    if (todoItem.status == 'complete') {
      newStatus = 'undone';
    } else {
      newStatus = 'complete';
      this.setData({
        animationData: this.animation.export()
      })
    };
    todoItem.status = newStatus;
    let newTodo = "todoList[" + index + "]"
    this.setData({
      [newTodo]: todoItem
    });
    updateTodo(todoItem._id, {
      status: newStatus
    }, () => {

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
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })
    this.animation = animation;
    animation.opacity(.3).translateY(400).step()
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