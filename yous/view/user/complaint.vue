<style scoped>
	.mui-input-group{padding-top:20px;}
</style>
<template>
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
		    <h1 class="mui-title">投诉意见</h1>
		</header>
		<div class="mui-content">
		    <form class="mui-input-group">
			    <div class="mui-input-row">
			        <label style='color:#666'>联系方式</label>
			    <input type="text" class="mui-input-clear" placeholder="请输入您的邮箱或者电话">
			    </div>
			    <textarea rows="6" placeholder="请填写您的反馈意见,我们将不断为您改进"></textarea>
			</form>
			<button type="button" class="mui-btn mui-btn-blue mui-btn-block">确认提交</button>
		</div>
</template>