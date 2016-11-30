<template>
	<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  onclick="window.history.go(-1)"></a>
		    <h1 class="mui-title">修改密码</h1>
		</header>
		<div class="mui-content">
		    <form class="mui-input-group">
				<div class="mui-input-row">		
					<input id='oldpwd' type="password" class="mui-input-clear mui-input" placeholder="原密码" v-model="oldpwd">					
				</div>
				<div class="mui-input-row">		
					<input id='surepwd' type="password" class="mui-input-clear mui-input" placeholder="新密码" v-model="pwd">					
				</div>
				<div class="mui-input-row">		
					<input id='surepwdagain' type="password" class="mui-input-clear mui-input" placeholder="确认新密码">					
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary" v-on:click="asySubmit">确认修改</button>
			</div>
		</div>
</template>
<script>
export default {
        components : {
            alert,
        },
        data () {
        var userinfo=JSON.parse(localStorage.getItem("userinfo"));
        return {
            phone:userinfo.fdphone,
            pwd:"",
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
        asySubmit:function(){
            this.$http.post(
                    'http://106.14.27.89:8001/api/GetServiceApiResult',
                    {
                        parameters:{
                        	"CultureName":'',
                        	"Mobile":this.phone,
                            "pwd":this.pwd
                        },
                        foreEndType:"2",
                        code:"10000015"
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