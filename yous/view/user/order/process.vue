<style scoped>
/*这里是订单进程页面*/
/*进程页面 有个背景图片无法添加*/
	ul li{list-style: none;font-size:13px;}
	.track-rcol{border: 1px solid #eee;background:#fff;padding-bottom:30px;}
	.track-list{position: relative;}
	.track-list li{position: relative; padding: 9px 0 0 15px; line-height: 18px; border-left: 1px solid #d9d9d9; color: #999;margin-top:20px;}
	.track-list li.first{color: red; padding-top: 0; border-left-color: #fff;}
	/*背景图片添加不上*/
	.track-list li .node-icon{position: absolute; left: -6px; top: 50%; width: 11px; height: 11px; background: url(../../../../dist/img/order-icons.png)  -21px -72px no-repeat;}
	.track-list li.first .node-icon{background-position:0 -72px;}
	.track-list li .time{margin-right: 20px; position: relative; top: 4px; display: inline-block; vertical-align: middle;}
	.track-list li .txt{ position: relative; top: 4px; display: inline-block; vertical-align: middle;}
	.track-list li.first .time{margin-right: 20px; }
	 ul{background:#fff;padding-top:10px;padding-bottom:10px;}
	.list li{list-style-type:none;padding-left:10px;color:#555;font-size:14px;padding-right:20px;margin-top:10px;}
	.list .zhuangtai{float:right;color:#f00;}
	.list li .processcontent{margin-left:10px;}
	li{margin-left:20px!important;}
</style>

<template >
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">进程订单</h1>
		</header>
		<div class="mui-content">
		    <ul class='list'>
		    	<li>订单编号:<span class="processcontent">2016156655</span><span class='zhuangtai'>已完成</span></li>
		    	<li>服务状态:<span class="processcontent">服务中</span></li>
		    	<li>维修人员:<span class="processcontent">蔡国庆</span></li>
		    	<li>联系电话:<a href='tel:132312'><span class="processcontent">123554469652</span></a></li>	
		    </ul>		    
		    <div class="track-rcol">
			<div class="track-list">
				<ul>
					<li class="first">
						<i class="node-icon"></i>
						<span class="txt">感谢使用幼狮空间维修服务</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2016-03-10 18:07:15</span><br>
						<span class="txt">等待业主确认</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2016-03-10 18:07:15</span><br>
						<span class="txt">服务业经完成</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2016-03-10 18:07:15</span><br>
						<span class="txt">维修人员正在上门维修</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2016-03-10 18:07:15</span><br>
						<span class="txt">维修人员【蔡国庆】在在赶往维修地</span>
					</li>
					<li>
						<i class="node-icon"></i>
						<span class="time">2016-03-10 18:07:15</span><br>
						<span class="txt">维修单已生成</span>
					</li>
				</ul>
			</div>
		</div>
		    
		</div>
	
	
	
</template>