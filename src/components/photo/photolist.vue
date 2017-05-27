<template>
  <div id='tmpl'>
    <!--1.0 图片分类-->
    <div id='cate'>
        <ul v-bind="{style:'width:'+ulWidth+'px'}">
            <li>全部</li>
            <li v-for="item in cates">{{item.title}}</li>
        </ul>
    </div>
    <!--2.0 图片列表-->
    <div id='imglist'></div>
  </div>
</template>
<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

export default {
  data () {
    return {
        ulWidth:320,
        cates : [],   //用来存储图片分类数据的数组
    };
  },
  created(){
        // 1.0 获取图片分类数据
        this.getcates();
    },
  methods:{
        getcates(){
            // 1.0 确定url
            var url = common.apidomain + '/api/getimgcategory';
            // 2.0 调用$http的get方法获取数据
            this.$http.get(url).then(function(res){
                if(res.body.status != 0){
                    Toast(res.body.message);
                    return;
                }

                // 3.0 实现数据的赋值操作
                this.cates = res.body.message;

                // 4.0 实现当前分类数据所在的ul的总宽度 = 分类个数 * 每个分类数据的宽度
                var w = 62;
                var count = res.body.message.length + 1;
                this.ulWidth = w * count ;

            });
        }
    }
}
</script>
<style scoped>
/*1.0 图片分类*/
	#cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	#cate ul{
		margin: 0px;
		padding-left: 10px;
	}
	#cate li{
		cursor: pointer;
		list-style: none;
		display: inline-block;
		color:#0094ff;
		font-size: 14px;
		padding-left: 6px;
	}
</style>