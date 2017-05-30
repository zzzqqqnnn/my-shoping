<template>
	<div id="tmpl">
        	  <!--1.0 商品轮播图-->
		<div class="silder">
		<silder :imgs="imgs"></silder>
		</div>

		<!--2.0 实现商品购买区-->
		<div id="buy">
			<h4>标题标题标题标题标题</h4>
			<p class="line"></p>
			<ul>
				<li class="price">
					市场价: <s>￥2199</s>    销售价：<span>￥2099</span>
				</li>
				<li>
					购买数量：
				</li>
				<li>
					<mt-button type="primary" size="small">立即购买</mt-button>
					<mt-button type="danger" size="small">加入购物车</mt-button>
				</li>
			</ul>
		</div>

		<div id="params">
				<h6>商品参数</h6>
				<p class="line"></p>
			<ul>
				<li>商品货号：</li>
				<li>库存情况：</li>
				<li>上架时间：</li>
			</ul>
		</div>

		<!--3.0 图文详情-->
		<!--4.0 商品评论-->
		<div id="other">
			<mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
			<mt-button type="danger" size="large">商品评论</mt-button>
		</div>
	</div>
</template>

<script>
	import silder from '../subcom/silder.vue';
	import common from '../../kits/common.js';

	export default{
		components:{silder},
		data(){
			return {
				id : 0,  //表示商品id
				imgs:[]
			}
		},
		created(){
            // 获取url传入的商品id值
			this.id = this.$route.params.id;
			this.getimgs();
		},
		methods:{
			getimgs(){
				var url  = common.apidomain + '/api/getthumimages/'+this.id;
				this.$http.get(url).then(function(res){
					//判断状态
				this.imgs =res.body.message;
				});
			}
		}
	}

</script>

<style scoped>
.silder{
    border:1px solid rgba(0,0,0,0.4);
    border-radius: 5px;
    margin: 5px;
}

#buy,#params,#other
{
    margin: 5px;
    padding: 5px;
    border:1px solid rgba(0,0,0,0.4);
    border-radius: 5px;
}
.line{
    height: 1px;
    border: 1px solid rgba(0,0,0,0.2);
}
#buy ul,#params ul{
    padding-left: 0px;
}
 #buy h4{
	 color:#0094ff;
	padding: 5px;
 }
 #buy li,#params li{
	 list-style: none;
	 padding: 8px;
 }

#buy .price span{
    color:red;
}

#other .imgdesc{
    margin-bottom: 20px;
}
</style>