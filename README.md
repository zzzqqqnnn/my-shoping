#vue_system

## 项目基本结构搭建和环境配置

1. 安装依赖模块

        npm install

2. 配置webpack.config.js

3. 配置项目入口文件main.js

4. 配置vue项目根组件App.vue

## 实现根组件头部和底部样式

1. mint-ui实现头部

2. router-view占位

3. mui实现底部tabbar

## 首页轮播图

1. main.js中更改路由规则

2. Home.vue中使用mt-swipe组件

3. 使用假数据填充图片

## 使用vue-resource请求轮播图数据

1. npm 安装vue-resource

        npm install vue-resource --save

2. main.js中导入vue-resource

3. 在vue的生命周期created方法中使用$http请求数据

## 使用MUI布局首页九宫格导航

1. 使用MUI九宫格组件布局导航

2. 替换导航中的默认图片

3. 更改a标签为router-link实现路由跳转

## 使用MUI实现新闻列表界面

1. 在main.js中添加路由规则

        {path:'/news/newslist',component:newslist}

2. 利用MUI图文列表组件实现新闻列表布局

3. 使用vue-resource请求新闻列表真实数据

4. 使用v-for循环渲染界面

5. 添加样式美化列表