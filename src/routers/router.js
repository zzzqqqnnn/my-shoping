import Vue from 'vue';
import vueRouter from 'vue-router';

// 导入获取cookie的方法
import { getCookie } from '../kits/cookie.js';

Vue.use(vueRouter);

/**
 * 使用按需加载方式导入组件对象
 */
const home = () => import('../components/Home.vue');
const shopcar = () => import('../components/shopcar/car.vue');
const newslist = () => import('../components/news/newslist.vue');
const newsinfo = () => import('../components/news/newsinfo.vue');
const photolist = () => import('../components/photo/photolist.vue');
const photoinfo = () => import('../components/photo/photoinfo.vue');
const goodslist = () => import('../components/goods/goodslist.vue');
const goodsinfo = () => import('../components/goods/goodsinfo.vue');
const goodsdesc = () => import('../components/goods/goodsdesc.vue');
const goodscomment = () => import('../components/goods/goodscomment.vue');
const car = () => import('../components/shopcar/car.vue');
const login = () => import('../components/account/login.vue');
const userinfo = () => import('../components/account/userinfo.vue');
const setting = () => import('../components/setting/setting.vue');
const map = () => import('../components/setting/map.vue');

// 定义路由规则
var router = new vueRouter({
    linkActiveClass: 'mui-active',  //改变路由激活时的class名称
    routes: [
        { path: '/', redirect: '/home' },// 默认进入home页面(将跟页面重定向到首页home)
        { path: '/home', component: home },
        { path: '/shopcar', component: shopcar },
        { path: '/news/newslist', component: newslist },
        { path: '/news/newsinfo/:id', component: newsinfo },
        { path: '/photo/photolist', component: photolist },
        { path: '/photo/photoinfo/:id', component: photoinfo },
        { path: '/goods/goodslist', component: goodslist },
        { path: '/goods/goodsinfo/:id', component: goodsinfo },
        { path: '/goods/goodsdesc/:id', component: goodsdesc },
        { path: '/goods/goodscomment/:id', component: goodscomment },
        { path: '/shopcar/car', component: car },
        { path: '/setting', component: setting },
        { path: '/map', component: map },
        { path: '/login', component: login },
        {
            path: '/userinfo',
            component: userinfo,
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            beforeEnter: (to, from, next) => {
                if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
                    if (getCookie('session')) {  // 通过cookie获取当前的token是否存在
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
    ]
});

export default router;