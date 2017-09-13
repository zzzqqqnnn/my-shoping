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

## 使用全局过滤器和moment.js实现日期格式化

1. main.js中注册全局过滤器

        Vue.filter('datefmt',function(input,fmtstring){}

2. 安装moment

        npm install moment --save

3. 使用moment格式化时间

        Vue.filter('datefmt',function(input,fmtstring){
                // 使用momentjs这个日期格式化类库实现日期的格式化功能
                return moment(input).format(fmtstring);
        })

4. newslist.vue中使用日期过滤器

        <span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>

## 实现跳转新闻资讯详情页面及传参

1. 在main.js中添加路由规则

        {path:'/news/newsinfo/:id',component:newsinfo}

2. 修改新闻列表界面中的a标签为router-link

        <router-link to='/news/newsinfo/13'>

3. 配置跳转参数

        <router-link v-bind="{to:'/news/newslist/'+item.id}">

4. 实现页面传参

        created() {
                // 获取URL传入的参数id赋值给data中的id属性
                this.id = this.$route.params.id;
        }

## 实现详情页面界面布局和真实数据

1. 使用css完成基本布局

2. 请求真实数据

3. 使用vue指令赋值真实数据

## 公共功能提取-API根域名提取

1. 将根域名存放到common.js中

        export default{
                apidomain:'http://webhm.top:8899', // 所有数据请求的根域名地址
        }

2. 导入common.js使用

## 评论组件-提交评论功能

1. 父组件向子组件传值

        - 父组件中注册组件

         components: {
                comment,  // II. 注册评论组件
         },

        - 父组件中使用子组件时属性传值

         <comment :id='id'></comment>
        
        - 子组件中props接收传值

         props: ['id'],//用来接收父组件传递过来的值

2. 实现评论提交界面样式

3. 发送post请求提交数据

        - 数据为空时提示用户不能提交
        - 提交成功清空文本框数据

## 评论组件-列表数据展示功能

1. 使用MUI列表组件实现基本样式布局

2. 请求真实数据赋值给list

3. v-for渲染数据到界面


## 评论组件-点击加载更多功能

1. 定义全局变量pageindex,点击加载更多时pageindex++

2. 传入pageindex重新发送数据请求

3. 进行数据拼接:将新数据和旧数据拼接到一个数组中

         this.list = this.list.concat(res.body.message);

## 优化-默认显示home及最新评论在前功能

1. 添加路由规则重定向根目录为home页面

        {path:'/',redirect:'/home'},// 默认进入home页面(将跟页面重定向到首页home)

2. 将最新添加的数据追加到数组最前面

        this.list = [{
                "user_name": "匿名用户",
                "add_time": new Date(),
                "content": this.postcontent
        }].concat(this.list);

## 图片分享列表-跳转及页面样式

1. `router-link`设置跳转路径

        <router-link to="/photo/photolist">

2. main.js中设置路径规则

- 导入photolist组件

        import photolist from './components/photo/photolist.vue'
        
- 设置路由规则

        {path:'/photo/photolist',component:photolist}

3. 布局及书写分类样式

## 图片分享列表-请求分类真实数据

1. `v-for`循环渲染

        <li v-for="item in cates">{{item.title}}</li>

2. 请求真实数据存放到`cates`数组中

3. 根据`cates`长度及每一个li的宽度动态计算ul的宽度

## 图片分享列表-图片列表样式及真实数据

1. 使用`mint-ui`的`lazy-load`控件实现图片懒加载功能

        <img v-lazy="item.img_url">

2. 布局图片及文字样式

3. 请求真实图片数据

4. 给分类选项绑定点击事件

## 图片分享详情-点击图片跳转到详情

1. 使用`router-link`包装图片

        <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">

2. 设置跳转的路由规则

        - 建立`photoinfo.vue`组件
        - 导入`photoinfo.vue`

                import photoinfo from './components/photo/photoinfo.vue';

        - 配置路由规则

                {path:'/photo/photoinfo/:id',component:photoinfo}

3. 获取路由传递的id值

        this.id = this.$route.params.id;

## 图片分享详情-基本页面布局

1. 使用九宫格组件布局缩略图界面

2. 使用封装的评论组件布局评论模块

3. 请求图片详情数据

## 图片分享详情-vue-preview实现缩略图预览

1. 安装`vue-preview`

        npm install vue-preview --save

2. `main.js`中注册`vue-preview`到vue对象中

        import VuePreview from 'vue-preview';
        Vue.use(VuePreview);

3. `webpack.config.js`中添加`babel`转码

        {
            test: /vue-preview.src.*?js$/,  // vue-preivew组件专用
            loader: 'babel'
        }

4. `url-loader`添加`svg`文件格式支持

        {
            test: /\.(png|jpg|gif|ttf|svg)$/,
            loader:'url-loader?limit=20000'
        }

5. 更改图片配置

        <img class="preview-img"  v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

6. 在`list`中添加数据

## 图片分享详情-请求真实数据

1. 将`v-for`放到li标签上适配样式

        <li v-for="(item, index) in list" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img class="preview-img"  :src="item.src" height="100" @click="$preview.open(index, list)">
        </li>

2. 请求真实数据

3. 重新组装数据格式(添加图片的宽高属性)

        // 图片对象必须有宽高属性才能预览大图,所以需要对请求回来的数据添加w h属性
        {
            src: 'https://placekitten.com/1200/900',
            w: 600,
            h: 400
        }

## 商品购买路由跳转及静态结构

1. `Home.vue`中设置跳转路径

        <router-link to="/goods/goodslist">

2. `main.js`中设置路由规则

        {path:'/goods/goodslist',component:goodslist}

3. 利用mui中的图文表格组件实现：
        
        http://www.dcloud.io/hellomui/examples/slider-table-default.html
	

## 商品购买请求动态数据

        this.$http.get(url).then(function(res){
                // res.body即为请求回来的数据
        });

## 商品详情-路由跳转

1. `goodlist.vue`中配置跳转路径

        <router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">

2. `main.js`中配置路由规则

        {path:'/goods/goodsinfo/:id',component:goodsinfo},

## 商品详情-轮播图组件的提取

1. 抽取组件:

        - 将`Home.vue`中的轮播图结构代码和样式代码抽取到单独的`silder.vue`文件中
        - 定义一个用于接收父组件传递过来参数的imgs属性

2. 使用组件

        - 需要使用`siler`组件的父组件中先注册组件

        import silder from '../components/subcom/silder.vue';
        ...
        ...
        components:{
                silder
        }

        - 使用组件并传递参数

        <silder :imgs='list'></silder>

## 商品详情-详情页面静态结构布局

1. 根据页面模块书写`HTML`结构

2. 书写`CSS`样式

## 商品详情-请求动态数据

1. 根据`API`请求真实数据

2. 完善请求中的判断数据状态

## 商品详情-图文详情页面

1. `goodsinfo.vue`中设置路由跳转路径

        <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
        </router-link>

2. `main.js`中配置路由规则

        // 导入组件
        import goodsdesc from './components/goods/goodsdesc.vue';
        // 设置路由规则
        {path:'/goods/goodsdesc/:id',component:goodsdesc},

3. 根据`API`请求数据

## 商品详情-商品评论组件集成

1. `goodsinfo.vue`中设置路由跳转路径

        <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
        </router-link>

2. `main.js`中配置路由规则

        // 导入组件
        import goodscomment from './components/goods/goodscomment.vue';
        // 设置路由规则
        {path:'/goods/goodscomment/:id',component:goodscomment},

3. `goodscomment.vue`中集成`comment.vue`组件

        // 注册子组件
        components:{
                comment
        }

        // 使用子组件
        <comment :id="id"></comment>

## 商品详情-定制inputNumber组件

1. 创建`inputNumber.vue`文件实现组件布局和增减逻辑

2. 子组件向父组件传值

        - 子组件inputNumber中定义方法使用this.$emit传值
        sendmessage(){
                this.$emit('dataobj',this.count);
        }

        - 子组件中数据发生变化时调用sendmessage方法
        this.sendmessage();

        - 父组件使用子组件时绑定子组件传值时属性名相同的方法`dataobj`
        <inputnumber v-on:dataobj="getcount" class="inputnumber"></inputnumber>

        - 父组件定义getcount方法,参数即为子组件传递过来的值
        getcount(count){
                // count 即为子组件传递过来的数据
                this.inputNumberCount = count;
        },

3. 父组件中使用子组件

        - 注册子组件
        components:{silder,inputnumber}

        - 使用子组件
        <inputnumber v-on:dataobj="getcount" class="inputnumber"></inputnumber> 

## 商品详情-加入购物车同步角标数字

> 因为购物车数量`inputNumber`在`goodsinfo.vue`组件中,而角标在`App.vue`组件中,两者不是父子组件关系,无法直接传值。父子组件能够传值正是因为共享了同一个`vue`实例对象,所以需要额外定义一个公共的`vue`实例实现子组件向父组件传值的方式将数据传递到`App.vue`中。

1. 定义`vm.js`文件导出一个空的`vue`实例

        import Vue from 'Vue';

        // 导出一个常量
        export const COUNTSTR = 'inputNumberCount';
        // 导出空的vue实例
        export var vm = new Vue();

2. `goodsinfo.vue`中定义方法使用该公共实例传递数据

        // 导入公共实例
        import {vm,COUNTSTR} from './kits/vm.js';
        ...
        toshopcar(){
                // 触发事件 COUNTSTR代表事件名 是vm.js中定义的常量
                vm.$emit(COUNTSTR,this.inputNumberCount);
        }

3. `App.vue`中使用该公共实例获取数据

        // 导入公共实例
        import {vm,COUNTSTR} from './kits/vm.js';

        // 利用 vm.$on() 来注册 COUNTSTR这个常量代表的事件
        vm.$on(COUNTSTR,function(count){
                // 将count值追加到购物车中
                var badgeobj = document.querySelector('#badge');
                badgeobj.innerText = parseInt(badgeobj.innerText) + count;
        });

4. 点击购物车时触发`toshopcar`方法将数据传递到`App.vue`

        <mt-button type="danger" size="small" @click="toshopcar">加入购物车</mt-button>

## 商品详情-使用localStorage存储购物数量

1. 定义本地存储公共帮助文件

        // 实现添加获取删除
        export function setItem(value){}
        export function getItem(){}
        export function removeItem(){}

2. 点击加入购物车时调用`setItem()`存储数据

## 商品详情-购物车小球动画效果

1. 书写小球样式

2. 设定需要动画的元素

        <transition name="show" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                <div v-if="isshow" class="ball"></div>
        </transition>

3. 使用动画钩子函数实现小球出现动画

        // 动画出现前
        beforeEnter(el){
                // 设定小球的初始位置
                el.style.transform = "translate(0px,0px)";
        },
        // 动画出现
        enter(el,done){
                // 保证小球出现动画
                el.offsetWidth;
                // 设置小球的结束位置
                el.style.transform = "translate(75px,366px)";
                //结束动画
                done();
        },
        // 动画结束
        afterEnter(el){
                //重置小球的初始状态
                this.isshow = !this.isshow;
        }

## 购物车-列表界面静态结构

1. 设置跳转路径和路由规则

        {path:'/shopcar/car',component:car}

2. 利用`v-model`绑定开关状态并存储到数组中

## 购物车-列表界面请求真实数据

1. 将本地存储中`goodsid`相同的多个对象合并成同一个对象

        export function getgoodsObject(){

                var arr  = getItem();
                var resObj ={};
                for(var i = 0 ; i<arr.length; i++){
                        var item = arr[i];
                        if(!resObj[item.goodsid]){
                        // 如果没有当前商品的数据，则添加一个数据
                        resObj[item.goodsid] = item.count;
                        }else{
                        // 已经有当前商品的数据了，则将cont追加
                        var count = resObj[item.goodsid];
                        resObj[item.goodsid] = count + item.count;
                        }
                }
                return resObj;
        }

2. 遍历存储商品id和数量的对象,将id拼接成为字符串

        // 1.0 从localstorage中获取到所有的商品id值
        var obj = getgoodsObject();
        // 2.0 将id值按照 api的参数格式进行拼接
        var idstring = '';
        for(var key in obj){
                idstring+= key + ',';
        }
        // 去除最后一个逗号
        idstring = idstring.substring(0,idstring.length-1);

3. 发送请求获取购物车列表真实数据

## 购物车-carinputNumber组件封装

1. 实现父组件向子组件传值(carinputNumber中显示的数量从父组件中得来)

        - 因为数量是存储在localStorage中,所以数据请求回来之后,需要根据数据的id从localStorage
        中将每个id对应的数量取出来存放到请求回来的数据里面的cou属性中

2. 实现子组件向父组件传值(点击carinputNumber组件中的加减后,需要将加减后的数据传回到父组件中)

        - 因为每次加减都是1,所以只需要传递该数据的id以及点击按钮的类型是加还是减,具体更新父组件中数量的代码
        逻辑在父组件中完成

        sendmessage(type){
                this.resObj.type = type;
                this.resObj.goodsid = this.goodsid;

                this.$emit('cardataobj',this.resObj);
        }

3. 数据通过子组件加减后需要更新本地`localStorage`中的数据以及`datalist`中的数据

        - 封装localStorage更新数据操作
        updateData(resObj);

## 购物车-总计区域静态结构布局

1. 书写静态结构

2. 书写CSS样式

## 购物车-总价格动态计算功能

1. 使用计算属性computed中定义方法动态计算

2. 选择switch开关时,开关状态保存在`value`属性中

3. 遍历`value`数组,选取值为`true`的数据计算总价格

## 购物车-商品数据删除实现

1. 删除`value`数组中对应的值

2. 删除`datalist`中对应的数据

3. 删除`localStorage`中存储的数据

## 统一返回按钮实现

1. 浏览器后退使用vue-router中的`this.$router.go(-1)`

        backto(){
                this.$router.go(-1);
        }

2. 控制返回按钮在非首页显示

        // 监控路由变化
        watch:{
                '$route':function(newroute,oldroute){
                        if(newroute.path.toLowerCase() == '/home'){
                                this.isshow = false;
                        }else{
                                this.isshow = true;
                        }
                }
        }

## extract-text-webpack-plugin抽取css文件

        1. 安装插件

        npm install extract-text-webpack-plugin@1.0.1 --save-dev

        2. webpack.config.js中引入插件
        
        var ExtractTextPlugin = require('extract-text-webpack-plugin');

        3. 修改css-loader配置
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")

        4. plugin配置中使用插件
        new ExtractTextPlugin('app.css')

## 分离第三方包

        1. 引入webpack和路径处理模块
        var webpack = require('webpack');
        var path = require('path');

        2. 修改入口文件
        entry: {
                app: path.resolve(__dirname, 'src/main.js'),
                // 需要分离的第三方包名写在数组中
                vendors: ['vue', 'vue-resource', 'vue-router', 'vuex', 'mint-ui', 'moment', 'vue-preview']
        },

        3. plugin中配置插件
        // 分离第三方包插件
        new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors',
                filename: 'vendors.js'
        })

## 代码压缩

        1. html代码压缩
        // 自动生成HTML插件中进行配置
        new htmlwp({
                filename: 'index.html',
                template: 'template.html',
                // 代码压缩
                minify: {
                        // 删除注释
                        removeComments: true,
                        // 删除空格
                        collapseWhitespace: true,
                        // 删除空格缩进
                        removeAttributeQuotes: true
                }
        }),

        // 2. js代码压缩混淆插件
        new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                        screw_ie8: true,
                        keep_fnames: true
                },
                compress: {
                        warnings: false,
                        screw_ie8: true
                },
                comments: false
        }),

        // 3. 删除警告
        new webpack.DefinePlugin({
                'process.env': {
                        // 注意字符串被引号引起来
                        NODE_ENV: '"production"'
                }
        })

## vuex的简单使用

        1. 安装vuex
        npm install vuex --save

        2. main.js中引入安装
        import Vuex from 'vuex';
        Vue.use(Vuex);

        3. 配置vuex
        // 3.1 Vuex配置
        const store = new Vuex.Store({
                // state类似vue实例中的data 用来存放数据
                state: {
                        // 可以设置一些需要全局使用的数据
                        username:'zxx'
                },
                // mutations类似vue实例中的methods
                mutations: {
                        // 用来处理数据 比喻数据删除更新等操作
                        update(state,name){
                                state.username = name;
                        }
                }
        })

        // 3.2 Vue实例中注入
        new Vue({
                store:store
        })

        4. 组件中通过this.$store使用

                console.log(this.$store.state.username);

        5. 调用mutations方法更新数据

                // 第一个参数是 mutations 中定义的对应的方法名 第二个参数是需要更新的数据
                // 具体更新逻辑在update方法中实现
                this.$store.commit('update','lxy');调用update方法更新用户名

## 路由拦截实现登录

        1. 配置需要拦截的路由

        {
                path: '/userinfo',
                component: userinfo,
                meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                // 进入该路由前会执行
                beforeEnter: (to, from, next) => {
                        if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
                                if (getCookie('session')) {
                                        // 通过cookie获取当前的token是否存在
                                        next();
                                }
                                else {
                                        next({
                                                path: '/login',
                                                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                                        })
                                }
                        }
                        else {
                                next();
                        }
                }
        }

        2. 进入拦截后的界面login,处理完登录请求后,进入userinfo

        // 模拟
        setTimeout(() => {
                //登录状态1天后过期
                let expireDays = 1000 * 60 * 60 * 24 * 1;
                // 实际项目中token是由后台返回的加密组合信息,是从接口返回的数据
                setCookie('session', 'token', expireDays);
                this.isLoging = false;
                //登录成功后
                this.$router.push('/userinfo');
        }, 1000)

## 集成百度地图

        1. 在百度地图开发者网站申请开发者key(选择浏览器端应用)
        http://lbsyun.baidu.com/apiconsole/key?application=key

        2. 在项目中引入百度地图库文件(由于异步加载的问题,在组件中引入方式比较特殊,这里直接在模板文件中引入)
        <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=填写秘钥key"></script>

        3. 在vue文件中实例化地图(地图需要显示在一个容器div中,实例化地图的方法要写在生命周期mounted中)
        mounted() {
                // 创建地图
                var map = new BMap.Map("allmap");
                // 初始化地理位置
                var point = new BMap.Point(116.331398, 39.897445);
                // 缩放中心和比例
                map.centerAndZoom(point, 12);

                // 定位
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        // 定位成功 标记地理位置
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                }
                else {
                        alert('failed' + this.getStatus());
                }
                }, { enableHighAccuracy: true })
        }

## axios集成

        // 1. 安装axios核心库(qs是post请求时对参数进行序列化的库)
        npm install axios qs --save

        // 2. 将axios制作成Vue插件进行集成(新建一个axios.js文件书写以下代码)
        
        import axios from 'axios';
        // 设置请求根域名
        axios.defaults.baseURL = 'http://www.lovegf.cn:8899';
        export default {
                install:function(Vue){
                        // 将$axios 绑定到Vue.prototype上 并且该属性为只读
                        Object.defineProperty(Vue.prototype, '$axios', { value: axios });
                }
        }

        // 3. main.js中使用Vue.use()安装
        import axios from './kits/axios.js'
        Vue.use(axios);

        // 4. 使用axios发送get请求
        this.$axios.get(url).then(function(res){
                // 返回的响应数据在res.data属性中
                console.log(res.data);
                // 回调函数内部的this不是当前数据请求方法的调用者
                // 通常内部this是window 在node平台 内部this是undefined
        })

        // 一般使用箭头函数写法
        this.$axios.get(url).then((res)=>{
                console.log(res.data);
        })

        // 5. 使用axios发送post请求
        // post请求(Content-Type:application/x-www-form-urlencoded 时需要配合qs.stringify使用)
        import qs from 'qs';
        this.$axios.post(url,qs.stringify({数据}).then((res)=>{
                // 返回的响应数据在res.data属性中
                console.log(res.data);
        })

## 集成上拉加载更多

        1. 使用<mt-loadmore></mt-loadmore>组件包裹容器

        // loadTop 下拉刷新方法
        // loadBottom 上拉加载更多方法
        // allLoaded 判断数据是否全部加载完毕属性
        // autoFill 设置false 解决自动执行上拉操作
        <mt-loadmore :autoFill='false' :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

        </mt-loadmore>

        2. 下拉一般加载最新数据,就是获取第一页数据,数据请求回来后需要调用
        this.$refs.loadmore.onTopLoaded();重置下拉loading位置

        3. 上拉加载更多数据,就是分页功能,数据请求回来之后需要调用
        this.$refs.loadmore.onBottomLoaded();重置上拉loading位置

        4. 上拉所有数据都加载完毕,设置this.allLoaded = true,禁止上拉效果

## 集成路由过渡动画

        1. 使用transition标签包裹router-view,并在data中定义样式类名transitionName

        <transition :name="transitionName">
                <router-view></router-view>
        </transition>

        2. 监听路由变化,判断是使用哪种过渡效果

        '$route': function(to, from) {

                // to 表示将要进入的路由(到哪儿去)
                // from 表示将要离开的路由(从哪儿来)
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                console.log(to.path,from.path,toDepth, fromDepth);

                // 根据路由深度判断是进入页面还是返回页面
                // 例如当前页面 路由地址是 /photo/photolist 路由深度就是 3 
                // 进入 /photo/photoinfo/37 路由深度就是4
                // 进入页面就使用 slide-left 返回页面就是要slide-right
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }

        3. 定义slide-right和slide-left样式类

        .slide-left-enter,.slide-right-leave-active {
                transition: all 0.2s ease;
                opacity: 0;
                -webkit-transform: translate(300px, 0);
                transform: translate(300px, 0);
        }

        .slide-left-leave-active,.slide-right-enter {
                transition: all 0.2s ease;
                opacity: 0;
                -webkit-transform: translate(-300px, 0);
	        transform: translate(-300px, 0); 
        }

## 路由懒加载

> 功能: 当没有访问到某个页面路由时,不去加载对应的组件代码,节约数据请求量,加快首页DOM渲染速度

        1. 先将项目升级到webpack2以上,相关包也做升级处理,配置文件需要做一些修改,详见代码
         "webpack": "^3.5.6",
         "webpack-dev-server": "^2.7.1",
         "extract-text-webpack-plugin": "^3.0.0",

        2. 安装路由懒加载语法解析器

        `npm install babel-plugin-syntax-dynamic-import --save-dev`

        在babel配置文件中加入:
        "plugins": ["transform-runtime","syntax-dynamic-import"]

        3. 改变导入组件的方式
        将import home from './components/Home.vue' 这种导入换成
        const home = () => import('../components/Home.vue');