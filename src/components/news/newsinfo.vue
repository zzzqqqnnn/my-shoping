<template>
    <div id="tmpl">
        详情页面{{this.id}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    created() {
        // 获取URL传入的参数id赋值给data中的id属性
        this.id = this.$route.params.id;
    }
}
</script>
<style scoped>

</style>