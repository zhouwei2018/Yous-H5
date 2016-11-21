<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">注册</h1>
    </header>
    <div class="mui-content">
        <form  class="mui-input-group">
            <div class="mui-input-row">
                <input  type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="mobile" >
            </div>
            <div class="mui-input-row">
                <input  v-model="pwd" type="password" class="mui-input-clear mui-input" placeholder="输入密码">
            </div>
            <div class="mui-input-row">
                <input  type="password" class="mui-input-clear mui-input" placeholder="确认密码" >
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input type="number" class="mui-input-clear mui-input" placeholder="请输入验证码" v-model="inputCode">
                <input v-model="strtimer" type="button" style='background-color: #CCCCCC; position:absolute;right:10px;top:2px; width: auto' class="mui-btn getnumber"   v-on:click="startTimer" >
                <input v-model="timer" type="hidden">
            </div>
        </form>
        <div class="mui-content-padded">
            <button class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;' v-on:click="asyRegister">注册</button>
            <span class="error" v-text="$parent.$vuerify.$errors[field]">1111</span>
        </div>

    </div>
    <div class="mui-content-padded oauth-area">
    </div>
    </div>
</template>
<script>
    export default {
    data () {
            return {
                strtimer:"获取短信码",
                timer: 30,       //默认倒数30秒
                stop : false,   //默认是停止的，但界面加载之后会变成false
                Interval:null,  //setInterval的对象
                mobile:"",
                pwd:"",
                inputCode:""
            }
    },
    vuerify: {
        mobile: {
            test: /\w{4,}/,  // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
                    message: '至少 4 位字符'
        },
        pwd: 'required' // 使用全局注册的规则
    },
    computed:{
        errors (){
            return this.$vuerify.$errors
        }
    },
    methods : {
        update(){
            if(this.timer> 0) {
                this.timer--;
                this.strtimer=this.timer+"秒"
            }else{
                this.strtimer="获取短信码";
                this.stop=true;
            }
        },
        startTimer(){
            //如果是false就开始倒计时，如果是true就停止倒计时
            this.timer=30;
            if(this.stop == false) {
                this.$http.post(
                        'http://106.14.27.89:8001/api/GetServiceApiResult',
                    {
                        parameters:{
                             "CultureName":"",
                             "Mobile":this.mobile,
                             "VerifiationCCodeType":"1",
                             "ImageNo":"",
                             "InputCode":""
                        },
                        foreEndType:"2",
                        code:"10000002"
                    }
                    ).then(function(response) {
                            this.Interval = setInterval(this.update,1000);
                     }, function(response) {

                     });
            }
            else {
                clearInterval(this.Interval);
            }
            this.stop = !this.stop;
        },
        asyRegister(){
            if (this.$vuerify.check()) {
                this.$http.post(
                        'http://106.14.27.89:8001/api/GetServiceApiResult',
                        {
                            parameters: {
                                "CultureName": "",
                                "Mobile": this.mobile,
                                "VerifiationCCodeType": "1",
                                "ImageNo": "",
                                "InputCode": this.inputCode,
                                "name": "kaka",
                                "phone": this.mobile,
                                "pwd": this.pwd,
                            },
                            foreEndType: "2",
                            code: "10000004"
                        }
                ).then(function (response) {
                            var reslute = JSON.parse(response.data);
                            if (reslute.success) {
                                this.$route.router.go({name: "main"})
                            } else {
                                alert(reslute.message);
                            }

                        }, function (response) {
                            alert("ajax请求错误！");
                        });
            }
        }
    }
    }
</script>
