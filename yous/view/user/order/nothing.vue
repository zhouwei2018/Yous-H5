<style scoped>
	/*这里是没有任何订单的显示页面*/

	 *{background:#fff;}
	 .mui-content{position:absolute;height:100%;width:100%;}
	 .nothingpic img{height:80px;}
	 .nothingpic{text-align:center;}
	 .nothingcontainer{position:absolute;top:50%;left:50%;transform: translate(-50%,-100%);}
</style>
<template>
		<div class="mui-content">
			<div class='nothingcontainer'>
		    <div class='nothingpic'><img src="../../../../dist/img/nothing.png"></div>
		    <div class='nothingtext'>
		    	<p style='font-size:14px;margin-top:20px;'>您还没有相关的订单</p>
		    </div>
		</div>
</div>
</template>