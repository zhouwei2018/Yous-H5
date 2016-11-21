
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">全部服务	</h1>
    </header>
    <nav class="mui-bar mui-bar-tab" style='line-height:51px;text-align:center;background:#106eac;'>
        <a href='tel:123-23123' style='color:#fff;'>
            在线客服:<span class="mui-icon mui-icon-phone"></span>12316615
        </a>

    </nav>
    <div class="mui-content mui-scroll-wrapper shareRoom" style="position: absolute; bottom: 0; width: 100%; padding: 50px 0 51px 0;">
       <div class="mui-scroll" style="padding-top:30px">
				 
			
				<!--<div style="height: 35px;margin: 0 10px;">
					<span style="line-height: 35px;">分享到：</span>
					<button  type="button" style="height: 30px;margin-top: 5px;" class="mui-btn mui-btn-yellow mui-pull-right" id='exit'>取消</button>
				</div>-->
					<div class="flex-container">
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/wuye1.png'/>
							<h6>入驻办公</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/wuye2.png'/>
							<h6>电话宽带</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/wuye3.png'/>
							<h6>工商注册迁址</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei1.png'/>
							<h6>水路管件</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei2.png'/>
							<h6>灯具电路</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei3.png'/>
							<h6>开锁换锁</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei4.png'/>
							<h6>门窗维修</h6>
						</a>
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei5.png'/>
							<h6>弱电系统</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/shebei6.png'/>
							<h6>空调制冷</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong1.png'/>
							<h6>物业</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong2.png'/>
							<h6>水电燃气</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong3.png'/>
							<h6>取暖</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong4.png'/>
							<h6>制冷</h6>
						</a>
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong5.png'/>
							<h6>房租</h6>
						</a>
						
						<a v-link="{ path: '/more/order'}">
							<img src='../../../../dist/img/feiyong6.png'/>
							<h6>租赁发票</h6>
						</a>
						
						
						<!--<a id="WXSceneFavorite" class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->
						
						
					</div>
					
					
					
				</div>
    </div>
</template>