<template>
	<div id="tmpl">
		<div class="row" v-for="(item,index) in datalist">
			<mt-switch class="switch" v-model="value[index]"></mt-switch>
			<img class="img" :src="item.thumb_path" alt="商品图片" >
			<div class="inforight">
				<h4 v-text="item.title"></h4>
				<div class="bottom">
					<ul>
						<li>￥{{item.sell_price}}</li>
						<li>购买数量组件</li>
						<li><a href="#">删除</a></li>
					</ul>

				</div>
			</div>
		</div>

		{{value}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value:[],
				datalist:[
					{
						"cou": 1,
						"id": 87,
						"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
						"sell_price": 2195,
						"thumb_path": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200046594439.jpg"
					},
					{
						"cou": 1,
						"id": 88,
						"title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
						"sell_price": 5780,
						"thumb_path": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200059017695.jpg"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.row{
		border-bottom: 1px solid rgba(0,0,0,0.3);
		height: 102px;
		display: flex;
	}

	.switch{
		flex:0 0 52px;
	}

	.img{
		margin-left: 5px;
		height: 75px;
		width: 75px;
		flex: 0 0 85px;
	}

	.inforight{
		margin-left: 5px;
		flex:1;
	}
	.inforight ul{
		padding-left: 0px;
	}
	.inforight li{
		list-style: none;
		display: inline-block;
	}

	.inforight h4{
		color: #0094ff;
		font-size: 14px;
	}

	.bottom li:first-child{
		color:red;
		margin-right: 10px;
	}

	.bottom li:last-child{
		margin-left: 10px;
	}

</style>