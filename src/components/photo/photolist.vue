<template>
  <div id='tmpl'>
    <!--1.0 图片分类-->
    <div id='cate'>
        <ul>
            <li>全部</li>
            <li>分类1</li>
            <li>分类2</li>
            <li>分类3</li>
        </ul>
    </div>
    <!--2.0 图片列表-->
    <div id='imglist'></div>
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
/*1.0 图片分类*/
	#cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	#cate ul{
		margin: 0px;
        width:1000px;
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