# 说明

一个通用的微信小程序顶部的导航栏组件，预留了右侧胶囊的空间。

## 使用

属性：
- `title`: string，文字内容，导航栏中间显示的标题文字。传 `slot = 'middle'` 可自定义中间标题位置的内容；
- `img`：string，图片url，导航栏左侧返回按钮的图片地址，可传可不传，不传会显示默认的返回图片。传 `slot = 'left'` 可自定义左侧返回按钮的位置的内容；

事件:
- `tap-left`：点击导航栏左侧的返回按钮触发 `tap-left` 事件

示例：

```
// 最简单的使用方式
<nav-bar
  title="专辑详情"
  bind:tap-left="onTapLeft">
</nav-bar>

// 通过 slot 传入自定义内容
<nav-bar bind:tap-left="onTapNavBack">
  <view slot="middle">
    <block wx:for="{{navItems}}" wx:key="item">
      <view bind:tap="onTapNav">{{item}}</view>
      <view wx:if="{{ index !== item.length-1 }}">|</view>
    </block>
  </view>
</nav-bar>
```

## 发布地址

npm包地址：`https://www.npmjs.com/package/sf-mini-navbar`

git地址：`https://github.com/went2/sf-mini-navbar`
