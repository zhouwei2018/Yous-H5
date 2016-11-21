<template>
    <header1></header1>
    <nav1></nav1>

    <div class="mui-content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
            <h1 class="mui-title">登录</h1>
        </header>
        <form  class="mui-input-group" style='margin-top:30px;'>
            <div class="mui-input-row">
                <input type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="pwd">
            </div>
        </form>
        <div class="mui-content-padded" style='text-align:center;'>
            <button  class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;' v-on:click="asyLogin" >登录</button>

            <div class="link-area"><a v-link="{ path: '/register'}">注册账号</a> <span class="spliter">|</span> <a @click.prevent="show=true">忘记密码</a>
                <alert :show.sync="show"
                       :title="title"
                       :content="content"></alert>
            </div>

        </div>
    </div>

</template>
<script>
    import header1 from './componets/header.vue'
    import nav1 from './componets/nav.vue'
    import alert from '../../src/components/alert.vue'

    export default {
        components : {
            header1,
            nav1,
            alert,
        },
        data () {
        return {
            phone:"",
            pwd:"",

            show : false,
            title : '测试标题',
            content : '测试内容',
        }
    },
    route:{
//            $.ajax(....,function(data){
//                 this.data = {"name":"1233"};
//            });
    },
    created: function () {
        //在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。
        //但是还没有开始 DOM 编译，$el 还不存在,但是实例存在,即this.a存在,可打印出来 。
        console.log("建立");
    },
    ready: function () {
        //在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
        console.log("一切准备好了");
    },
    methods:{
        asyLogin:function(){
            this.$http.post(
                    'http://106.14.27.89:8001/api/GetServiceApiResult',
                    {
                        parameters:{
                            "phone":this.phone,
                            "pwd":this.pwd
                        },
                        foreEndType:"2",
                        code:"10000005"
                    }
            ).then(function(response) {
                        var  reslute=JSON.parse(response.data);
                        if(reslute.success){
                            this.$route.router.go({name:"main"})
                        }else{
                            alert(reslute.message);
                        }

                        localStorage.setItem('userinfo', response);
                    }, function(response) {

                    });
        }
    }
    }
</script>
