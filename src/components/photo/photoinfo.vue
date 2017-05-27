<template>
	<div id="tmpl">
	    info {{id}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id:0  //图片的id
			}
		},
		created(){
			this.id = this.$route.params.id;
		}
	}

</script>

<style scoped>

</style>