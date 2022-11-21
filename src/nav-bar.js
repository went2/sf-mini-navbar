Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: '导航标题'
    },
    img: {
      type: String,
      value: ''
    }
  },
  observers: {
    "img": function(newValue) {
      if(newValue) {
        this.setData({ imageSource: img })
      }
    }
  },
  data: {
    statusHeight: 0,
    imageSource: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACOUlEQVR4nO3dMW4TURRG4RkoEHSAgRKxAypEj6gpQIIaJKoU7CF1hFgBokFQgAISy4AVADVRQuig41BMLKUhiuda+vWez9eksnPfjHU8HtvjYZAkSZIkSZIaBdwGXgHfgT9Hf3eBu+nZugacBZ4Df/m/t8CF9KxdAl6csOGP+wSM6Xm7Atw/5cZfepKeuRvAAvix4g74kp67G8CbFTf+0tX07M1j9fQcdzM9f9OYl57jrqfX0DTmpwfgJx4JzQfcK2x8gO30GprFlJ69wsbfBxbpdTSL6dVsxcP0GppFPT276TU0i/pRzwFwLb2OZmF6cjA9OZieLExPDqYnB9OThenJwfTkYHqyMD05mJ4cTE8WtXe4wPTMh+nJwfRkYXpyMD05wCVq6dnH9MwH7BQf/Y/Sa2gWcA74Vdj479JraBrTt1jm6io9Z0L/90bhtlvjOO6tbZKw1A6gcFs/01llgsKYnoQPCzvBJ+EqPAzNYnohVv2UsymqoH4q4kN6Dc2jfjLOFFUAl/F0dBamKA9TlIUpysMU5WGKsvBN+jxMUR6mKAtTlIcpysMUZWGK8jBFeZiiLExRHqYoD1OURWeXLEt9Mm62cRwPhmF4WriLxTAMz9Y0zuai9n3iQ7xsZQ2dXLi1uQQtHaVoq3AXF9c1y0YrpOhKevYuzEzR5/TcXQEerLgDHqdn7g6n/wmTj3gEtH5MP+Kzw8k/4vMaOJ+etWvALeAl8BX4DXwD3gN30rNJkiRJkiRps/0DQ8XusdT61/4AAAAASUVORK5CYII="
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

