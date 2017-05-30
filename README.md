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