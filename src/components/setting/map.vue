<template>
    <div id='tmpl'>
        <div id="allmap"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    mounted() {
        // 创建地图
        var map = new BMap.Map("allmap");
        // 初始化地理位置
        var point = new BMap.Point(116.331398, 39.897445);
        // 缩放中心和比例
        map.centerAndZoom(point, 12);

        // 定位
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
            }
            else {
                alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true })
    }
}
</script>
<style lang="css" scoped>
#allmap {
    width: 100%;
    height: 300px;
}
</style>