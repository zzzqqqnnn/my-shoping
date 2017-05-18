<template>
    <div id="tmpl">
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
    </div>
</template>
<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

export default {
    props: ['id'],//用来接收父组件传递过来的值
    data() {
        return {
            postcontent : '',  //用来自动获取用户填写的评论内容
        };
    },
    methods: {
        //1.0 评论数据的提交
        postcomment() {
            //0.0 判断用户是否填写评论内容
            if (this.postcontent.trim().length <= 0) {
                Toast('您要评论的内容不能为空');
                return;
            }
            //1.0 确定提交的地址 /api/postcomment/:artid
            var url = common.apidomain + '/api/postcomment/' + this.id;
            //2.0 利用ajax的post请求将数据提交到指定的地址
            //2.0.1 获取到用户在文本框中填写的评论内容，通过 content: 内容 格式提交到请求报文体中
            this.$http.post(url, { content: this.postcontent }, { emulateJSON: true }).then(function (res) {
                Toast(res.body.message);

                //3.0 将文本框中的评论内容清空
                this.postcontent = '';
            });
        }
    }
}
</script>
<style scoped>
/* 1.0 实现提交评论样式 */

#postcomment {
    padding: 5px;
}

.p {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
</style>