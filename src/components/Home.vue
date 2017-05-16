<template>
    <div id='tmpl'>
        <!--1.0 轮播图-->
        <mt-swipe :auto='2000'>
            <!--<mt-swipe-item>1</mt-swipe-item>
                        <mt-swipe-item>2</mt-swipe-item>
                        <mt-swipe-item>3</mt-swipe-item>-->
            <mt-swipe-item v-for="item in list">
                <img :src='item.img'>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
// 使用 mint-ui 中的 Toast组件实现弹窗效果
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            list: []
        }
    },
    // 页面中的data和methods对象创建完毕后会自动调用created方法
    created(){
        this.getImgs()
    },
    methods:{
        getImgs(){
            // 实现轮播组件中的数据请求
            // 1.0 确定URL
            const url = 'http://webhm.top:8899/api/getlunbo';
            // 2.0 发送get请求 $http.get()
            this.$http.get(url).then(function(response){
                const data = response.body;
                // 错误处理
                if(data.status != 0){
                    Toast(data.message);
                    return;
                }

                // 正常逻辑: 将数据赋值给list
                this.list = data.message;
            })
        }
    }
}
</script>

<style scoped>
.mint-swipe {
    height: 300px;
}

.mint-swipe-item {
    background-color: red;
    width: 100%;
    height: 300px;
}

.mint-swipe-item img {
    width: 100%;
    height: 300px;
    display: block; 
}
</style>