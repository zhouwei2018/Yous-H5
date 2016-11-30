<style scoped>
	/*.spliter{color:#aaa;font-size:0.24rem;}
	.link-area a{color:#333;font-size:0.28rem;}
	.mui-content{padding-top:0.1rem;}*/	
	.mui-content{width: 100%;height:100%;overflow: hidden;color: #ffffff; background-size: cover;padding-bottom:3rem;}
	.mui-bar-nav {top: 0; -webkit-box-shadow: 0 0px 0px #ccc; box-shadow: 0 0px 0px #ccc; }
			input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {color: #aaa;font-size: .22rem;}
			.backnone{background-color:transparent;}
			.mui-input-row label{padding: 0px;margin-top: .32rem;}
			.mui-input{width: 90%;margin:0 auto;background: none;margin-top: 2rem;}
			.mui-input{border: none;}
			.mui-input label{width: 100%;text-align: center;font-size: .4rem;}
			.mui-input .mui-input-row{width: 100%;height:1.6rem;text-align: center;}
			.mui-btn{width: 100%;height:1rem;border-radius:.3rem;margin-top: 0.6rem;font-size: .33rem;}
			.mui-content-padded{text-align: center;font-size: .22rem;}
			.mui-input-row input{width: 100%;text-align: center;color: #ffffff;}
			.mui-input-row label ~ input, .mui-input-row label ~ select, .mui-input-row label ~ textarea{width: 100%;padding-right: 0;}
			.xian{float:none;height:1px;background: #fff;opacity: 0.5;clear: both;}
</style>
<template>
	<header class="mui-bar mui-bar-nav" style='background:transparent;color:#fff;'>
	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)" style='color:#fff;'></a>
	    <h1 class="mui-title" style='color:#fff;'>登&nbsp;录</h1>
	</header>
	<div class="mui-content backnone" style='background:url(../../dist/img/loginbg.jpg) no-repeat;background-size: cover;'>
		<form class="mui-input">
		    <div class="mui-input-row">
		        <label>手机号</label>
		    	<input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="phone">
		    	<div class="mui-pager xian"></div>
		    </div>
		    <div class="mui-input-row">
		        <label>密码</label>
		        <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="pwd">
		        <div class="mui-pager xian"></div>
		    </div>
		        <button type="button" class="mui-btn mui-btn-primary" v-on:click="asyLogin" style='background:#0f6fac'>登录</button>
		     <div class="mui-content-padded">
		       <span style='margin-right:0.5rem;' v-link="{ path: '/register'}">注册账号</span><span v-link="{ path: '/forgetpwd'}">忘记密码 ？</span>
		    </div>
		</form>
	</div>
    <!--<div class="mui-content">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
            <h1 class="mui-title">登录</h1>
        </header>
        <form  class="mui-input-group">
            <div class="mui-input-row">
                <input type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="pwd">
            </div>
        </form>
        <div class="mui-content-padded" style='text-align:center;'>
            <button  class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;' v-on:click="asyLogin" >登录</button>
            <div class="link-area"><a v-link="{ path: '/register'}">注册账号</a> <span class="spliter">|</span> <a v-link="{ path: '/forgetpwd'}">忘记密码</a>
            </div>
        </div>
    </div>-->

</template>
<script>
    import alert from '../../src/components/alert.vue'
    export default {
        components : {
            alert,
        },
        data () {
        return {
            phone:"",
            pwd:"",

            show : false,
            title : '错误提示',
            content : '',
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
                            this.content=reslute.message;
                            this.show=true;
                        }
                        debugger;
                        localStorage.setItem('userinfo', JSON.stringify(reslute.data));
                        console.info(JSON.parse(localStorage.getItem("userinfo")).fdname)
                    }, function(response) {

                    });
        }
    }
    }
    
   

</script>
