<style scoped>
	.pingjiatoppic{padding:20px;border-bottom:1px solid #ccc;background:#fff;}
	.pingjiatoppic img{float:left;width:60px;height:60px;border-radius:50%;margin-right:20px;}
	.pingjiatoppic .pingjiacontent .getname{margin-left:20px;}
	.pingjiatoppic .pingjiacontent .content{margin-top:10px;}
	.pingjiatoppic .pingjiacontent .content span{margin-right:10px;color:#f00;}
	a{color:#333333}
	.percent{clear:both;overflow: hidden;background:#fff;padding-bottom:20px;font-size:16px;}
	.percent li{list-style-type:none;float:left;height:80px;line-height:40px;text-align:center;width:45%;color:#666;}
	.percent li:first-child{border-right:1px solid #ccc}
	.percent span{font-size:23px;font-weight:bold;color:#333333;margin-right:10px;}
	.pingjiabottom{text-align:center;}
</style>
<template>
		<header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
            <h1 class="mui-title">投诉</h1>
      </header>
	<div class="mui-content">
		 
		<div class='pingjiatoppic'>
			<img src='../../../dist/btn_qq@3x.png'>
			<div class='pingjiacontent'>
				<h4>工程师:<span class='getname'>蔡国庆</span></h4>
				<h4 class='content'><span class="mui-icon mui-icon-phone"></span><a href='tel:211256456'>16411556</a></h4>
			</div>
		</div>	
	<div class='percent'>
		<ul>
			<li>
				维修单量:<br>
				<span>123</span>单
			</li>
			<li>
				好评率:<br>
				<span>91</span>%
			</li>
		</ul>
	</div>
	<div id='image-list' class="row image-list"></div>
	<div class='pingjiabottom' style='margin-top:8px;clear:both;background:#fff;line-height:30px;'>
		<div class="icons mui-inline" style="margin-left: 6px;margin-top:10px;height:40px;">
			<i data-index="1" class="mui-icon mui-icon-star"></i>
			<i data-index="2" class="mui-icon mui-icon-star"></i>
			<i data-index="3" class="mui-icon mui-icon-star"></i>
			<i data-index="4" class="mui-icon mui-icon-star"></i>
			<i data-index="5" class="mui-icon mui-icon-star"></i>
		</div>
		<div>
			<textarea placeholder="输入你的反馈意见" rows="6" style='border-width:0;border-top-width:1px'></textarea>			
		</div>
</div>
  <button type="button" class="mui-btn mui-btn-blue mui-btn-block">确认提交</button>
</div>
</template>