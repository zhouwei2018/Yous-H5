<style>

    .flex-container {
        /*display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: center;*/
        text-align: center;
    }
    .flex-container > a {
        /*display: none;*/
        position: relative;
        width: 33.3%;
        float: left;
        /*flex: 1;*/
        /*border: 1px red solid;*/
        padding: 10px 0;
    }

    .flex-container span {

        /*border: 1px #ccc solid;*/
        border-radius: 100%;
        padding: 5px;
    }

    .flex-container h6 {
        margin-top: 8px;

    }

    .flex-container img {
        width: 50%;
    }

</style>
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">物业对接</h1>
    </header>
    <nav class="mui-bar mui-bar-tab" style='line-height:51px;text-align:center;background:#106eac;'>
        <a href='tel:123-23123' style='color:#fff;'>
            在线客服:<span class="mui-icon mui-icon-phone"></span>12316615
        </a>
    </nav>
    <div transter-lists class="mui-content mui-scroll-wrapper shareRoom" style="position: absolute; bottom: 0; width: 100%; padding: 50px 0 50px 0;">
        <div class="mui-scroll">
            <div class="flex-container" v-for="(index,entry) in gridData">
                <a v-link="{name:'transfer_order',params:{ serviceId:entry.fdid,serviceName: entry.fdname }}">
                    <img src='{{ entry.fdsmallimagepath}}'>
                    <h6>{{ entry.fdname}}</h6>
                </a>
                <!--<a class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            gridData: []
        }
    },
    ready: function() {
        this.getCustomers()
    },
    methods: {
        getCustomers: function (){
                var vm = this
                vm.$http.post(
                        'http://106.14.27.89:8001/api/GetServiceApiResult',
                        {
                            Parameters:{
                                "code":2
                            },
                            ForeEndType:"2",
                            Code:"20000001"
                        }
                ).then((response)=>{
                    var response=JSON.parse(response.data);
                debugger;
                vm.$set('gridData', response.data);
                console.log(response.data);
            })
        }
    }
    }
</script>