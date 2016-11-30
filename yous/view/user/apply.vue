<style scoped>
	label,input{color:#444;font-size:0.28rem;}
	.mui-button-row{margin-top:0.2px;}
	.mui-input-group{padding-top:0.1rem;}
</style>


<template>
	<header class="mui-bar mui-bar-nav">
	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
	    <h1 class="mui-title">申请认证</h1>
	</header>
	<div class="mui-content">
     <form class="mui-input-group">
			<div class="mui-input-row">
				<label>公司名称</label>
				<input type="text" class="mui-input-clear" placeholder="请输入公司名称">
			</div>
			<div class="mui-input-row logo">
				<label>公司LOGO</label>
				<input type="text" class="mui-input-clear" placeholder="请上传公司LOGO">
			</div>
			<div class="mui-button-row">
				<button type="button" class="mui-btn mui-btn-primary" onclick="return false;">确认</button>&nbsp;&nbsp;
				<button type="button" class="mui-btn mui-btn-danger" onclick="return false;">取消</button>
			</div>
		</form>
	</div>
	
	
	
	
</template>