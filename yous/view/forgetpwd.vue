<style scoped>
	.mui-input-row .mui-btn{width:auto;text-align:center;}
	.mui-content{margin-top:10px;}
</style>
<template>
	<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
		    <h1 class="mui-title">忘记密码</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<input id='telphone' type="number" class="mui-input-clear mui-input" placeholder="输入手机号" v-model="phone">
				</div>
				<div class="mui-input-row" style='position:relative;'>
					<input id='verificationCode' type="number" class="mui-input-clear mui-input" placeholder="输入验证码" v-model="InputCode">	
					<input type="button" value="获取验证码" v-on:click="asygetSmsCode" style='background-color: #CCCCCC; position:absolute;right:10px;top:2px; width: auto' class="mui-btn getnumber">
				</div>
				<div class="mui-input-row">		
					<input type="password" class="mui-input-clear mui-input" placeholder="新密码" v-model="pwd">					
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;' v-on:click='asyModify'>确认修改</button>
			</div>
		</div>
</template>
<script>
export default {
        components : {
            alert,
        },
        data () {
	        return {
	            phone:"",
	            pwd:"",
	            InputCode:"",
	            show : false,
	            title : '错误提示',
	            content : '',
	        }
	    },

	    ready: function () {
	        //在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。
	        console.log("一切准备好了");
	    },
	    methods:{
	        asygetSmsCode:function(){
	            this.$http.post(
                        this.$api,
	                    { 
	                        parameters:{
	                        	"CultureName":'',
                        	"Mobile":this.phone,
                            "VerifiationCCodeType":2,
                            "ImageNo":"",
                            "InputCode":''
                        },
                        foreEndType:"2",
                        code:"10000002"
             }).then(function(response) {
                        var  reslute=JSON.parse(response.data);
                        if(reslute.success){
                        	
                            //this.$route.router.go({name:"login"})
                        }else{
                            this.content=reslute.message;
                            this.show=true;
                        }

                    }, function(response) {

                    });
         },
        
         asyModify:function(){
            this.$http.post(
                    this.$api,
                    { 
                        parameters:{
                        	"CultureName":'',
                        	"Mobile":this.phone,
                            "VerifiationCCodeType":2,
                            "ImageNo":"",
                            "InputCode":this.InputCode,
                            "pwd":this.pwd
                        },
                        foreEndType:"2",
                        code:"10000010"
                    }
            ).then(function(response) {
                        var  reslute=JSON.parse(response.data);
                        if(reslute.success){
                        	
                            this.$route.router.go({name:"login"})
                        }else{
                            this.content=reslute.message;
                            this.show=true;
                        }
			
                    }, function(response) {

                    });
        }
        
    }
    }

</script>