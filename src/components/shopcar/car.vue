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
    import {getgoodsObject} from '../../kits/localSg.js';
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
    
	export default{
		data(){
			return {
				value:[],
				datalist:[]
			}
		},
        created(){
            // 调用方法获取购物车列表数据
			this.getdatalist();
		},
        methods:{
            getdatalist(){
                // 1.0 从localstorage中获取到所有的商品id值
				var obj = getgoodsObject();
                // 2.0 将id值按照 api的参数格式提交给api
				var idstring = '';
				for(var key in obj){
					idstring+= key + ',';
				}

				idstring = idstring.substring(0,idstring.length-1);

                // 3.0 ajax请求这个api获取到完整的商品数据信息赋值给this.datalist
				var url  = common.apidomain + '/api/goods/getshopcarlist/'+idstring;
				this.$http.get(url).then(function(res){
					//状态值的判断
					if(res.body.status != 0 ){
						Toast(res.body.message);
						return;
					}

					this.datalist = res.body.message;
				});

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