import moment from 'moment';
const db = wx.cloud.database();
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const getTodo = (condition, cb) => {
  db.collection('todos').where(condition).get({
    success: (res) => {
      console.log(res)
      cb(res)
    }
  })
}
const addTodo = (param, cb) => {
  db.collection('todos').add({
    data: {
      createtime: new Date(""),
      tags: [
        "cloud",
        "database"
      ],
      ...param
    },
    success: function (res) {
      cb(res);
    }
  })
}
const updateTodo = (id, data, cb) => {
  db.collection('todos').doc(id).update({
    data: data,
    success: (res) => {
      console.log(res)
      cb(res)
    }
  })
}
const delTodo = (id, cb) => {
  db.collection('todos').doc(id).remove({
    success: function (res) {
      cb(res);
    }
  })
}

module.exports = {
  formatTime,
  addTodo,
  getTodo,
  updateTodo,
  delTodo
}