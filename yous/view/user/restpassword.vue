<template>
	<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"  onclick="window.history.go(-1)"></a>
		    <h1 class="mui-title">修改密码</h1>
		</header>
		<div class="mui-content">
		    <form class="mui-input-group">
				<div class="mui-input-row">		
					<input id='oldpwd' type="password" class="mui-input-clear mui-input" placeholder="原密码">					
				</div>
				<div class="mui-input-row">		
					<input id='surepwd' type="password" class="mui-input-clear mui-input" placeholder="新密码">					
				</div>
				<div class="mui-input-row">		
					<input id='surepwdagain' type="password" class="mui-input-clear mui-input" placeholder="确认新密码">					
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary">确认修改</button>
			</div>
		</div>
</template>