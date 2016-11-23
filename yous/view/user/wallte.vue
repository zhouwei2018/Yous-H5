<style scoped>
	html{font-size:10px;}
	.mui-bar-nav{background:#c8791d;color:#fff;}
	.mui-title{font-size:18px;color:#fff;letter-spacing:0.3rem;}
	.mui-pull-left{color:#fff;}
	.mui-pull-right{font-size:14px;color:#fff;line-height:45px;}
	/*header{height:30rem!important;}
	.mui-content{margin-top:26rem;}*/
	.mui-bar-nav{box-shadow:0 1px 6px #c8791d;}
	.number{background:#c8791d;text-align:center;
			color:#fff;font-size:60px;height:300px;line-height:300px;}
	.mui-table-view{margin-top:10px;;}
	.mui-table-view li a{color:#3c3b40!important;font-size:14px;}
	.mui-table-view span{float:right;margin-right:20px;font-size:12px;color:#aaa;}
</style>
<template>
	<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
		    <h1 class="mui-title">钱包</h1>
		    <a class="mui-pull-right">支付密码</a>
		</header>
		<div class="mui-content">
			<div class='number'>			
				<div>¥&nbsp;<span>0.00</span></div>
			</div>
		    <ul class="mui-table-view">
		    	<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						充值
					</a>
				</li>
			</ul>
			 <ul class="mui-table-view">
		    	<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						绑定会员卡
					</a>
				</li>
			</ul>
			 <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						消费明细
					</a>
				</li>
			</ul>
		</div>
</template>