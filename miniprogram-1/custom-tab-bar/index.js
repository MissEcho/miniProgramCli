Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        "pagePath": "pages/home/home",
        "text": "today",
        "iconPath": "/img/tab/icon_baoxue.png",
        "selectedIconPath": "/img/tab/icon_duoyun.png"
      },
      {
        "pagePath": "/pages/todo/todo",
        "text": "add",
        "iconPath": "/img/tab/icon_qingtian.png",
        "selectedIconPath": "/img/tab/icon_qingtian_on.png"
      },
      {
        "pagePath": "/pages/index/index",
        "text": "todo",
        "iconPath": "/img/tab/icon_yejianqingtian.png",
        "selectedIconPath": "/img/tab/icon_yejianqingtian_on.png"
      }
    ]
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})