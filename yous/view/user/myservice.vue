<style scoped>
	.emindcontainer{position:relative}
	.remind{position:absolute;top:10px;left:50px;width:6px;height:6px;border-radius:50%;background: orangered;}
	.timeright{color:#aaa;font-size:12px;}
	.mui-media-body{font-size:15px;color:#333}
</style>
<template>
	<header class="mui-bar mui-bar-nav">
	    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
	    <h1 class="mui-title">我的服务</h1>
	</header>
    <div class="mui-content">
    	<!--第一个轮播开始-->
        <ul class="mui-table-view" style='margin-top:5px;'>
			<li class="mui-table-view-cell mui-hidden">cared
				<div id="M_Toggle" class="mui-switch mui-active">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a>
					<div class='remindcontainer'>
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/informationchat.jpg'>
						<span class='remind'></span>
					</div>
					<div class="mui-media-body">
						幼狮咨询<span class='mui-pull-right timeright'>2分钟</span>
						<p class='mui-ellipsis'>本年度幼狮空间完成300家中小型企业咨询高大上看过啥的vashbd</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a>
					<div class='remindcontainer'>
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/informationchat.jpg'>
						<span class='remind'></span>
					</div>
					<div class="mui-media-body">
						幼狮咨询<span class='mui-pull-right timeright'>2分钟</span>
						<p class='mui-ellipsis'>本年度幼狮空间完成300家中小型企业咨询高大上看过啥的vashbd</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="#">
					<img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
					<div class="mui-media-body">
						幼狮快讯<span class='mui-pull-right timeright'>2分钟</span>
						<p class='mui-ellipsis'>本年度幼狮空间完成300家中小型企业咨询高大上看过啥的vashbd</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="#">
					<img class="mui-media-object mui-pull-left" src="../../../dist/img/informationchat.jpg">
					<div class="mui-media-body">
						幼狮咨询<span class='mui-pull-right timeright'>1小时</span>
						<p class='mui-ellipsis'>本年度幼狮空间完成300家中小型企业咨询高大上看过啥的vashbd.</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="#">
					<img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
					<div class="mui-media-body">
						幼狮快讯<span class='mui-pull-right timeright'>2小时</span>
						<p class='mui-ellipsis'>本年度幼狮空间完成300家中小型企业咨询高大上看过啥的vashbd</p>
					</div>
				</a>
			</li>
		</ul>
    </div>
    <!--导航区域-->
    <nav1></nav1>

</template>

