import axios from 'axios';
// 设置请求根域名
axios.defaults.baseURL = 'http://www.lovegf.cn:8899';
export default {
    install:function(Vue){
        // 将$http 绑定到Vue.prototype上 并且该属性为只读
        Object.defineProperty(Vue.prototype, '$axios', { value: axios });
    }
}