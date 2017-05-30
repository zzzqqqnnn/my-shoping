<template>
	<div id="tmpl">
	  goodsinfo  {{id}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id : 0  //表示商品id
			}
		},
		created(){
            // 获取url传入的商品id值
			this.id = this.$route.params.id;
		}
	}

</script>

<style scoped>

</style>