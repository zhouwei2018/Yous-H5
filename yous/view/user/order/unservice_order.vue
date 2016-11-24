<style scoped>
	  #sliderSegmentedControl>a
	{text-decoration:none;  line-height:40px;  color:#2C3637; border-right:1px solid #ccc;}
	#sliderSegmentedControl>a.mui-active
	{color:#ff7b18;  }
	 #sliderProgressBar
	{background:#ff7b18;  width:20%;  transition:0.3s;}
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
	    border-top: 1px solid #c8c7cc;
	    border-bottom: 0px solid #c8c7cc;
	}
	.mui-table-view .mui-media-object {
	    line-height: 70px;
	    max-width: 70px;
	    height:70px;
	}
	.ending{border:0;color:orangered}
	.mui-btn-outlined{padding:5px;font-size:12px;}	
	.mui-media-body p{font-size:12px;}
</style>
<template>
    <div id="body" class='mui-content'>
            <div id="slider" class="mui-slider">
                <div class="mui-slider-group">
                    <div class="mui-slider-item mui-control-content">
					<ul class="mui-table-view">
						
						<li class="mui-table-view-cell mui-media">
							<a href="javascript:;" id='jumpxiangqing'>
								<div>
									<button type="button" class="mui-btn mui-btn-outlined ending">待服务</button>		
									<button type="button" class="mui-btn mui-btn-outlined" style='float:right;'>查看进程</button>
								</div>
								<div style='padding:20px 0px;'>
									<img class="mui-media-object mui-pull-left" src='../../../../dist/btn_qq@3x.png'>
									<div class="mui-media-body">
										<p>订单号:<span>564854165486</span></p>
										<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
										<p>订单时间:<span>3016-12-12 12:20:52</span></p>
									</div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a href="javascript:;" id='jumpxiangqing'>
								<div>
									<button type="button" class="mui-btn mui-btn-outlined ending">待服务</button>								
									<button type="button" class="mui-btn mui-btn-outlined" style='float:right;'>查看进程</button>
								</div>
								<div style='padding:20px 0px;'>
									<img class="mui-media-object mui-pull-left" src='../../../../dist/btn_qq@3x.png'>
									<div class="mui-media-body">
										<p>订单号:<span>564854165486</span></p>
										<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
										<p>订单时间:<span>3016-12-12 12:20:52</span></p>
									</div>
								</div>
							</a>
						</li>
					</ul>
                   </div>                    
                </div>
            </div>










        </div>

</template>