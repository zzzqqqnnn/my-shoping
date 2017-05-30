<template>
	<div id="tmpl">
	  <!--1.0 商品轮播图-->
		<silder :imgs="imgs"></silder>

		<!--2.0 实现商品购买区-->

		<!--3.0 图文详情-->

		<!--4.0 商品评论-->
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

</style>