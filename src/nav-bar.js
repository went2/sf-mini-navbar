Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: '导航标题'
    }
  },
  data: {
    statusHeight: 0,
  },
  methods: {
    tapLeft() {
      this.triggerEvent('tap-left');
    }
  },
  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync();
      const statusBarHeight = systemInfo.statusBarHeight;
      this.setData({
        statusHeight: statusBarHeight,
      })
      
    }
  }
});

