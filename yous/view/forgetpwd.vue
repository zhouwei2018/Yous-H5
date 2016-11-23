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
					<input id='telphone' type="number" class="mui-input-clear mui-input" placeholder="输入手机号">
				</div>
				<div class="mui-input-row" style='position:relative;'>
					<input id='verificationCode' type="number" class="mui-input-clear mui-input" placeholder="输入验证码">	
					<input type="button" value="获取验证码" style='background-color: #CCCCCC; position:absolute;right:10px;top:2px; width: auto' class="mui-btn getnumber">
				</div>
				<div class="mui-input-row">		
					<input type="password" class="mui-input-clear mui-input" placeholder="新密码">					
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;'>确认修改</button>
			</div>
		</div>
</template>