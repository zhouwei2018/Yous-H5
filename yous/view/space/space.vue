<style>
	body,.mui-content{background:#fff}
	#urscommunity{width:96%;margin:10px auto;}
	.homecontainer{width:96%;margin:30px auto;}
	.homecontainer h4 span{color:#FF7F19;margin-right:1px;}
	.homecontainer h4{margin:20px;margin-left:0;color:#2C3637;margin-bottom:10px;}
	.homecontainer button{margin-right:30px;}
	.homecontainer .mui-row{width:99%;margin:15px auto;text-align:left;padding-left:20px;}		
	.homecontainer .mui-row a.mui-btn{border-radius:20px;background: #F4F4F4;color:#929699;border-width:0;}	
	.flex-container {text-align: center;}	
	.flex-container>a{position: relative;width: 25%;float: left;padding:10px 0;}
	.flex-container span{border-radius: 100%;padding: 5px;}
	.flex-container h6{margin-top: 8px;}	
	.flex-container img{width: 50%;}
</style>
<template>
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
    	<!--第一个轮播开始-->
        <div class="mui-slider">
            <slide :list="list" ></slide>
        </div>
        
        <div class="mui-scroll">
				<!--<div style="height: 35px;margin: 0 10px;">
					<span style="line-height: 35px;">分享到：</span>
					<button  type="button" style="height: 30px;margin-top: 5px;" class="mui-btn mui-btn-yellow mui-pull-right" id='exit'>取消</button>
				</div>-->
					<div class="flex-container" style='margin-top:10px;overflow:hidden'>
						
						<a>
							<img src='../../../dist/img/btn_kongjian@3x.png'/>
							<h6>获取服务</h6>
						</a>
						
						<a>
							<img src='../../../dist/img/btn_pengyouquan@3x.png'/>
							<h6>成为供应商</h6>
						</a>
						
						<a>
							<img src='../../../dist/img/btn_qq@3x.png'/>
							<h6>投融资</h6>
						</a>						
						<a>
							<img src='../../../dist/img/btn_tengxunweibo@3x_67.png'/>
							<h6>商学院</h6>
						</a>
						<!--<a id="WXSceneFavorite" class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->												
					</div>
				</div> <!--主链接结束-->
		     
			<div class="homecontainer" style='margin-top:120px;clear:both;'> <!--主轮链接的清除影响-->				
			</div> <!--清除影响结束-->
						
			
			<div class="homecontainer"> <!--精选服务商开始-->
				<h4><span>热门</span>项目</h4>
				<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_yixin@3x_62.png'>
						<div class="mui-media-body">
							北京幼狮空间
							<p class='mui-ellipsis'>为梦想,造支点</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_kongjian@3x.png'>
						<div class="mui-media-body">
							北京幼狮空间
							<p class='mui-ellipsis'>专注中小型企业的发展</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_weibo@3x_37.png'>
						<div class="mui-media-body">
							北京幼狮空间
							<p class='mui-ellipsis'>平台建设</p>
						</div>
					</a>
				</li>
			</ul>
			</div> <!--精选服务商结束-->
		<div class="homecontainer"> <!--精选服务商开始-->
			<h4><span>热门</span>投资人</h4>
			<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_yixin@3x_62.png'>
					<div class="mui-media-body">
						北京幼狮空间
						<p class='mui-ellipsis'>为梦想,造支点</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_pengyouquan@3x.png'>
					<div class="mui-media-body">
						北京幼狮空间
						<p class='mui-ellipsis'>专注中小型企业的发展</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src='../../../dist/img/btn_qq@3x.png'>
					<div class="mui-media-body">
						北京幼狮空间
						<p class='mui-ellipsis'>平台建设</p>
					</div>
				</a>
			</li>
		</ul>
		</div> <!--精选服务商结束-->
    </div>
    <!--导航区域-->
    <nav1></nav1>

</template>
<script>
    import header1 from '.././componets/header.vue'
    import nav1 from '.././componets/nav.vue'
    import slide from '../../../src/components/slide.vue';
    export default {
        data() {
        return {
                list : [{
                    img : '../../../dist/img/homemarqueepic.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                }]//banner（list,list2）图数据源
            }
      },
       components : {
            header1,
            nav1,
            slide
        }
    }
</script>
