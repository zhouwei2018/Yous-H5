<style scoped>

/*这里是详情页面*/



	.zhuangtai{float:right;color:orangered;;margin-right:10%;}
	p:last-child{margin-top:10px;font-size:13px;}
	.mui-icon{font-size:16px;}
	.address p{font-size:14px;}
	.address p .mui-icon{margin-right:10px;}
	.address p .tel{margin-left:10px;}
	.mui-table-view{margin-top:5px;}
	p{clear:both;}
	.weixiu{margin-top:10px;background:#fff;padding:10px;overflow: hidden;}
	.weixiu h4{font-size:15px;font-weight: normal;color:#666;}
	.weixiutitle{font-size:14px;font-weight: normal;color:#aaa;height:20px;line-height:20px;margin-top:10px;}
	.weixiubtn{height:20px;line-height:8px;font-size:10px;margin-left:10px;}
	.weixiupic img{width:80px;height:80px;}
	.peijian{border-bottom:1px solid #eee;padding-bottom:10px;}
	.moneyspan{float:right;color:#f00;font-size:13px;}
	.shiji{font-size:15px;float:right;color:#2C3637;}
	.xiadan{float:right;margin-top:1px;}
	
	.shijispan{font-size:19px;color:#f00;}
	.footer button{width:23%;font-size:13px;}
	.footer{text-align:center;padding-bottom:10px;}
	.footer,button{background:#fff}
	.kefutel{background:#fff;border-color:#ddd}	
</style>
<template>
	<header class="mui-bar mui-bar-nav">
	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
	    <h1 class="mui-title">订单详情</h1>
	</header>
		<div class="mui-content">
			<!--头部的-->
		    <ul class="mui-table-view">
				<li class="mui-table-view-cell">					
					<a class="mui-navigate-right" id='process'>
						<p>订单编号:1213245<span class='zhuangtai'>已完结</span></p>
						<p><span class="mui-icon mui-icon-home"></span>感谢使用幼狮服务</p>
					</a>
				</li>
			</ul>
			<!--地址的-->
			<ul class="mui-table-view">
				 <li class="mui-table-view-cell address">
				 	<p><span class="mui-icon mui-icon-location-filled"></span>张三<span class='tel'>1232356465</span></p>
				 	<p>北京市朝阳区共三环建外SOHOA座1503</p>
				 </li>
			</ul>
			<div class='weixiu'>
				<h4>设备维修</h4>
				<p class='weixiutitle'>空调制冷维修<button type="button" class="mui-btn mui-btn-blue mui-btn-outlined weixiubtn">管件维修</button></p>
				<p class='weixiupic'><img src="../../../../dist/img/iconfont-tianjia.png"><img src='../../../../dist/img/iconfont-tianjia.png'></p>
				<p class='money'>服务金额<span class='moneyspan'>￥100.00</span></p>
				<p class='peijian'>+配件费<span class='moneyspan'>￥0.00</span></p>
				<p class='shiji'>实际付款:<span class='shijispan'>123.00</span></p>
				<p class='xiadan'>下单时间:<span>1206-12-15 12:12:23</span></p>
			</div>
			<div class='footer'>
				<a class="mui-btn mui-btn-block mui-btn-outlined kefutel" href='tel:312312'><span class="mui-icon mui-icon-phone" style='color:orangered'></span>13216546</a>		
				<button type="button" class="mui-btn mui-btn-outlined">取消订单</button>
				<button type="button" class="mui-btn mui-btn-outlined">删除订单</button>
				<button type="button" class="mui-btn mui-btn-outlined">评价订单</button>
				<button type="button" class="mui-btn mui-btn-outlined">投诉建议</button>
			</div>
		</div>	
</template>