<template>
    <header1></header1>
    <nav1></nav1>

    <div class="mui-content" style='margin-top:10px;'>
        <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-link="" ></a>
        <h1 class="mui-title">登录</h1>
        </header>
        <form id='login-form' class="mui-input-group">
            <div class="mui-input-row">
                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号">
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
            </div>
        </form>
        <div class="mui-content-padded" style='text-align:center;'>
            <button id='login' class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;' v-on:click="asyLogin" >登录</button>
            <div class="link-area"><a v-link="{ path: '/register'}">注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
            </div>
        </div>
    </div>
</template>
<script>
    import header1 from './componets/header.vue'
    import nav1 from './componets/nav.vue'
    export default {
        components : {
            header1,
            nav1,
        },
        methods:{
            asyLogin:function(){
                this.$http.post(
                'http://106.14.27.89:8001/api/GetServiceApiResult',
                {
                    Parameters:{},
                    ForeEndType:"2",
                    Code:"10000001"
                }
                ).then(function(response) {

                    localStorage.setItem('userinfo', response);
                }, function(response) {

                });
            }
        }
    }
</script>