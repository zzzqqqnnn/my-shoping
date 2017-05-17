<template>
    <div id="tmpl">
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{info.add_time | datefmt('YYYY-MM-DD')}} {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content">
    
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import common from '../../kits/common.js';

export default {
    data() {
        return {
            id: 0,
            info: {}
        }
    },
    created() {
        // 1.0 获取URL传入的参数id赋值给data中的id属性
        this.id = this.$route.params.id;

        // 2.0 请求数据获取对应id的详情对象
        this.getinfo();
    },
    methods: {
        getinfo() {
            // 1.0 定义URL
            const url = common.apidomain + '/api/getnew/' + this.id;

            // 2.0 发送请求获取数据
            this.$http.get(url).then(function (response) {
                var body = response.body;
                if (body.status != 0) {
                    Toast(body.message);
                    return;
                }

                // 3.0 把正确数据赋值给data中的info
                this.info = body.message[0];
            })
        }
    }
}
</script>
<style scoped>
.title h4 {
    color: #0094ff;
}

.title p {
    color: rgba(0, 0, 0, 0.5);
}

.title,
#content {
    padding: 5px;
}
</style>