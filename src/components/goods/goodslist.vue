<template>
	<div id='tmpl'>
		<mt-loadmore :autoFill='false' :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

			<div id="mui-content" class="mui-content" style="background-color:#fff">
				<ul class="mui-table-view mui-grid-view">

					<li v-for="item in list" class="mui-table-view-cell mui-media mui-col-xs-6">
						<router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
							<img class="mui-media-object" :src="item.img_url">
							<div class="mui-media-body" v-text="item.title"></div>
							<div class="desc">
								<p>
									<span>￥{{item.sell_price}}</span>
									<s>￥{{item.market_price}}</s>
								</p>
								<p>
									<h6 class="left">热卖中</h6>
									<h6 class="right">剩余{{item.stock_quantity}}件</h6>
								</p>
							</div>

						</router-link>

					</li>

				</ul>
			</div>
		</mt-loadmore>

	</div>
</template>
<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

export default {
	data() {
		return {
			list: [],
			allLoaded: false,
			pageindex: 1
		}
	},
	created() {
		this.getlist();
	},
	methods: {
		// 下拉时触发 请求最新数据
		loadTop() {
			console.log('下拉');
			this.pageindex = 1;
			this.getlist();
		},
		//上拉
		loadBottom() {
			console.log('上拉')
			this.pageindex++;
			this.getlist();
		},
		getlist() {
			// 获取到商品列表数据
			var url = common.apidomain + '/api/getgoods?pageindex=' + this.pageindex;

			this.$http.get(url).then(function(res) {
				if (res.body.status != 0) {
					Toast(res.body.message);
					return;
				}

				if (this.pageindex == 1) {
					// 重置下拉状态
					this.$refs.loadmore.onTopLoaded();
					// 直接赋值第一页的数据
					this.list = res.body.message;
				} else {
					// 重置上拉状态
					if (res.body.message.length == 0) {
						this.allLoaded = true;
					}
					this.$refs.loadmore.onBottomLoaded();
					this.list = this.list.concat(res.body.message);
				}
			});
		}
	}
}

</script>

<style scoped>
#mui-content li {
	border: 1px solid rgba(0, 0, 0, 0.4);
	-webkit-box-shadow: 0 0 4px #000;
	-moz-box-shadow: 0 0 4px #000;
	box-shadow: 0 0 4px #000;
	margin-left: 4px;
	padding-left: 0px;
}

#mui-content .mui-media-body {
	color: #0094ff;
}

#mui-content .desc {
	height: 60px;
	background-color: rgba(0, 0, 0, 0.1);
	margin-top: 10px;
	padding: 5px;
	text-align: left;
}

#mui-content .desc span {
	color: red;
	margin-right: 15px;
}

#mui-content a {
	padding-left: 0px;
	margin-left: 0px;
}

#mui-content .desc .right {
	position: absolute;
	right: 10px;
	bottom: 0px;
}

#mui-content .desc .left {
	position: absolute;
	left: 10px;
	bottom: 0px;
}
</style>