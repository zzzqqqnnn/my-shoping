<template>
  <div id='tmpl'>
    <div id="mui-content" class="mui-content" style="background-color:#fff">
			<ul class="mui-table-view mui-grid-view">

				<li class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<img class="mui-media-object" src="http://www.webhm.top:8080/upload/201504/20/thumb_201504200046589514.jpg">
						<div class="mui-media-body">Color of SIP CBD</div>
						<div class="desc">
							<p>
								<span>￥2099</span>
								<s>￥2199</s>
							</p>
							<p>
									<h6 class="left">热卖中</h6>
									<h6 class="right">剩余60件</h6>
							</p>
						</div>

					</a>

				</li>

				<li class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<img class="mui-media-object" src="http://www.webhm.top:8080/upload/201504/20/thumb_201504200154277661.jpg">
						<div class="mui-media-body">静静看这世界</div>
						<div class="desc">
							<p>
								<span>￥2099</span>
								<s>￥2199</s>
							</p>
							<p>
							<h6 class="left">热卖中</h6>
							<h6 class="right">剩余60件</h6>
							</p>
						</div>
					</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<img class="mui-media-object" src="http://www.webhm.top:8080/upload/201504/20/thumb_201504200154277661.jpg">
						<div class="mui-media-body">静静看这世界</div>
						<div class="desc">
							<p>
								<span>￥2099</span>
								<s>￥2199</s>
							</p>
							<p>
							<h6 class="left">热卖中</h6>
							<h6 class="right">剩余60件</h6>
							</p>
						</div>
					</a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<img class="mui-media-object" src="http://www.webhm.top:8080/upload/201504/20/thumb_201504200154277661.jpg">
						<div class="mui-media-body">静静看这世界</div>
						<div class="desc">
							<p>
								<span>￥2099</span>
								<s>￥2199</s>
							</p>
							<p>
							<h6 class="left">热卖中</h6>
							<h6 class="right">剩余60件</h6>
							</p>
						</div>
					</a></li>
			</ul>
		</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style scoped>
    #mui-content li{
        border: 1px solid rgba(0,0,0,0.4);
        -webkit-box-shadow: 0 0 4px #000;
        -moz-box-shadow: 0 0 4px #000 ;
        box-shadow: 0 0 4px #000 ;
        margin-left: 4px;
        padding-left: 0px;
    }

	#mui-content .mui-media-body{
		color: #0094ff;
	}

    #mui-content .desc{
        height: 60px;
        background-color: rgba(0,0,0,0.1);
        margin-top: 10px;
        padding: 5px;
        text-align: left;
    }
    #mui-content .desc span{
        color: red;
        margin-right: 15px;
    }
	#mui-content a{
		padding-left: 0px;
		margin-left: 0px;
	}

	#mui-content .desc .right{
		position: absolute;
		right: 10px;
		bottom: 0px;
	}

    #mui-content .desc .left{
        position: absolute;
        left: 10px;
        bottom: 0px;
    }

</style>