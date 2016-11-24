<style scoped>
    .tel{float:right;}
    textarea{border:0;}
    .questionpic{margin-bottom:10px;}
    #submit{width:96%;margin:10px auto;}
    .image-item {
        width: 65px;
        height: 65px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOCSURBVHic7d0xSxxRFIbh15DOwl47u0MglVtEEQSL5B/YxtrKX2Jlra3/QAtBCGqxVoFwunRub2G9KeYuMbOzRhJnZtfve5pBZlcvnHfvjgujS+PxGNP1ru8FWL8cgDgHIO79Sx6UmZ+AXWAAbACrbS7K/tkIuAOGwGVE3P7tCUvPXQRm5gpwBOy/1gqtUyfAYUQ8zHrAzAAycws4A9aAR+AYuAGGETF6/bXa/8rMVapdehM4AJaBe2AvIq6bntMYQHnl/6Aa/jfga0T8bGnd1oLMXAdOgW2qCD407QSzLgKP+D38HQ9/8ZSZ7VDNcI1qplOmdoBywXdDte1/9PAXW9kJvlO9HWzWLwybdoDdcjz28BdfmeFx+XK3fr4pgEE53rS1KOvcZJaD+ommADbKcdjacqxrk1lu1E80BbAK4F/13o4ns5z6AM8fBYtzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIkw0gM88z87zvdfTtRX8f4I363PcC5oHsDmAVByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYibi3sDy02avdyrl5mz/3duOy4i4kvHP3Mm7wDi5mIH6OMVMXnlR8RS1z97nngHEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcXNxb2BPLvpewDyQDWCebtHuk98CxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkBcUwAjgMxc7Xgt1pInsxzVzzUFcFeOg9ZWZF2bzPKufqIpgGE5bra2HOvaZJbD+ommAC7L8SAz11tbknWizPCgfHlZPz8VQETcAifAMnCamb5QXFBldqdUszwps/3DrOEeAvfANnDlnWDxlJldUc3wnmqmU5bG4+b/m5iZW8AZsAY8AsfADTCMiKmrSetfudofUL3nH1C98u+BvYi4bnrOzADKN1wBjoD9V1+tdeEEOIyIh1kPeDaAicz8BOxS1bUB+DOC+TSi+lVvCFw2vefXvSgAe7t8hS/OAYhzAOJ+ATeBuJOueKnYAAAAAElFTkSuQmCC);
        background-size: 100% 100%;
        display: inline-block;
        position: relative;
        border-radius: 5px;
        margin-right: 10px;
        margin-bottom: 10px;
        border: solid 1px #e8e8e8;
    }
</style>
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">{{poptitle}}</h1>
    </header>
    <div class="mui-content">
        <!-- 普通面板 -->
        <panel :show="false" title="个人信息" class='inform'>
            <div>
                <p class='name'>{{username}}<span class='tel'>{{tel}}</span></p>
                <p class='address'>{{address}}</p>
            </div>
        </panel>
        <panel :show="false" title="问题和意见 快捷输入" class='question'>
            <div>
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..." v-model="content"></textarea>
            </div>
        </panel>
        <panel :show="false" title="请详细描述你的问题和意见" class='questionpic'>
            <div class="demo image-item">
                <upload
                        :server="upload.server"
                        :api="upload.api"
                        :params="upload.params"
                        :success="upload.success"
                        :file.sync="upload.file"
                        :crop="upload.crop"
                        :width="upload.width"
                        :height="upload.height"
                        :ok="upload.ok"
                        :cancel="upload.cancel">
                    <imgdd>
                </upload>
            </div>
        </panel>
        <div id='image-list' class="row image-list"></div>
        <button id="submit" class="mui-btn mui-btn-blue mui-btn-block" v-on:click="asy_send_order">发送</button>
    </div>
</template>
<script>
    import aoth from '../../componets/aoth.vue'
    import panel from '../../../../src/components/panel.vue'
    import upload from '../../../../src/components/upload.vue'
    export default {
        data() {
        return {
            username: JSON.parse(localStorage.getItem("userinfo")).fdname,
            tel:JSON.parse(localStorage.getItem("userinfo")).fdphone,
            address:JSON.parse(localStorage.getItem("userinfo")).address,
            content:'',
            poptitle:"",//title标题
            upload:{
                server:"",
                api:"",
                params:{
                    token:"test"
                },
                file:"",
                preview:true,
                crop:true,
                width:400,
                height:400,
                cancel:"取消",
                ok:"裁剪",
                success:(data)=>{
                alert(data.length)
            }
        }
    }},
    components : {
        panel,
                aoth,
                upload,

    },
    methods:{
        asy_send_order:function(){
            var byte=document.getElementsByClassName('upload')[0].innerHTML;
            var images=new Array();
            images.push(byte);
            this.$http.post(
                    'http://106.14.27.89:8001/api/GetServiceApiResult',
                    {
                        parameters:{
                            "phone":this.tel,
                            "serveiceid":this.$route.params.serviceId,
                            "address":this.address,
                            "content":this.content,
                            "images":images
                        },
                        foreEndType:"2",
                        code:"10000005"
                    }
            ).then(function(response) {
                        var  reslute=JSON.parse(response.data);
                        alert("上传成功");
                    });
        }

    },
    ready: function(){
        this.poptitle=this.$route.params.serviceName
    }
    }
</script>

