# 说明

一个通用的微信顶部的搜索导航条组件，内容与右边的胶囊按钮对齐。

## 内部

会计算设备状态栏高度和按钮位置，保存到设备 localStorage。在实际应用中，这些值作为app.js中的globalData更合理，这里为了抽离出该组件而动用 localStorage。自用尚可。

## 使用

```
<nav-search-bar
  logoImg="../../assets/images/logo/my-music-logo-144.png"
  title="YT Music"
  bind:tap-search="onSeachTap"
>
```

`logoImg`: 导航栏最左边的logo图标，不传则不显示；

`title`: logo 旁边的文字描述，不传则不显示；

`bind:tap-search`: 点击搜索图标后会触发 `tap-search` 事件，可在它的事件响应中导航到新页面。

npm包地址：`npmjs.com/package/sf-miniprogram-navbar`

git地址：`git@github.com:went2/sf-miniprogram-navbar.git`

完。