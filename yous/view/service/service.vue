<style scoped>
	 .mui-row.mui-fullscreen > [class*="mui-col-"] { height: 100%; }
    .mui-col-xs-3,
    .mui-control-content { overflow-y: auto;padding-top:.1rem;}
    .mui-segmented-control .mui-control-item { line-height:0.8rem; width: 100%; font-size:0.28rem;}
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {background-color: #fff;color:#fa7611}
    
    .mui-table-view{height:100%;}
    .mui-table-view .mui-table-view-cell{padding-left:10px}
    .mui-table-view .mui-table-view-cell .curprice{color: #EC971F;}
    .mui-table-view .mui-table-view-cell .oldprice{color: #ccc; font-size: .6rem; text-decoration: line-through;}
    
    .userpic li{width:30%;margin-right:1%;text-align:center;font-size:12px;display:inline-block;margin-bottom:10px;}
    .userpic li img{width:60px;height:60px;border-radius:50%;}
     .userpic li a{display:block;}
     .userpic ul{margin-top:10px;margin-bottom:10px;}
     
     .allheader{font-size:14px;color:#4f4370;margin-bottom:10px;margin-top:10px;}
     .allpic img{width:40%;margin-right:1%;text-align:center;}   
     .tuijianpic img{width:50%;margin-right:1%;text-align:center;}    
     #segmentedControls a{font-size:0.14rem;}
     ul{border:0;}
     .mui-table-view{background:transparent!important;}
     
     .servicetitle{text-align:center;font-size:14px;height:30px;line-height:30px;background:#fff;margin-top:10px;color:#333;}
     .servicecontent p span{display:inline-block;text-align:center;width:50%;font-size:12PX;}
     .servicecontent p{margin-top:10px;}
     li,ul,p{border:0!important;}
     .mui-pull-right{color:#aaa;margin-right:10px}
     *{border:o;box-shadow: 0;}
</style>
<template>
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content mui-row mui-fullscreen">
    	 <div class="mui-col-xs-3">
            <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                <a class="mui-control-item mui-active">推荐服务</a>
                <a class="mui-control-item">工商财税</a>
                <a class="mui-control-item">法律服务</a>
                <a class="mui-control-item">投融资</a>
                <a class="mui-control-item">地产服务</a>
                <a class="mui-control-item">商学院</a>
            </div>
        </div>
        <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
            <div id="content1" class="mui-control-content mui-active">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media">
						<a>
							<div class="mui-media-body allheader">
								推荐服务
							</div>
							<div class="mui-media-body allpic">
								<img src="../../../dist/img/decoration1.jpg" style='width:100%;'>
							</div>
							<div class="mui-media-body allheader">
								精选服务
							</div>
							<div class="mui-media-body allpic">
								<img src="../../../dist/img/decoration1.jpg">
								<img src="../../../dist/img/decoration1.jpg">
								<img src="../../../dist/img/decoration1.jpg">
							</div>							
						</a>
					</li>   
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								办公选址
							</div>
						<div class='servicetitle'>
							按区域
						</div>
						<div class='servicecontent'>
							<p><span>面积</span><span>单价span></p>
							<p><span>地图</span><span>热门商圈</span></p>
							<p><span>地铁沿线</span><span>楼盘</span></p>
						</div>
					</li>
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								装修装饰
							</div>
						<div class='servicetitle'>
							空间装修
						</div>
						<div class='servicecontent'>
							<p><span>装修升级</span><span>装修定制</span></p>
							<p><span>安全监测</span></p>
						</div>
						<div class='servicetitle'>
							免费报价
						</div>
						<div class='servicecontent'>
							<p><span>免费设计</span><span>装修效果图</span></p>
						</div>	
					</li>
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								工商财务
							</div>
						<div class='servicetitle'>
							注册、变更、注销
						</div>
						<div class='servicecontent'>
							<p><span>创业套餐</span><span>公司注册</span></p>
							<p><span>注册资本变更</span><span>名称变更</span></p>
							<p><span>法人变更</span><span>经营范围变更</span></p>
							<p><span>地址变更</span><span>股权转让</span></p>
							<p><span>公司注销</span><span></span></p>
						</div>
						<div class='servicetitle'>
							财税服务
						</div>
						<div class='servicecontent'>
							<p><span>代理记账</span><span>财务助手</span></p>
							<p><span>出纳外包</span><span>企业年报</span></p>
							<p><span>税控机生情</span><span>残保金申报</span></p>
							<p><span>一般纳税人申请</span><span>财务审计</span></p>
						</div>	
					</li>
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								法律服务
							</div>
						<div class='servicetitle'>
							法律顾问
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							合同文书
						</div>
						<div class='servicecontent'>
							<p><span>合同撰与审核</span><span>合同模板下载</span></p>
						</div>
						<div class='servicetitle'>
							法律咨询
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							企业法务
							<span class="mui-pull-right">&gt;</span>
						</div>
					</li>
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								地产服务
							</div>
						<div class='servicetitle'>
							委托房源
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							抵押贷款
						</div>
						<div class='servicecontent'>
							<p><span>合同撰与审核</span><span>合同模板下载</span></p>
						</div>
						<div class='servicetitle'>
							商业地产投资
							<span class="mui-pull-right">&gt;</span>
						</div>
					</li>
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								投融资
							</div>
						<div class='servicetitle'>
							融资
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							贷款
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							投资
							<span class="mui-pull-right">&gt;</span>
						</div>
					</li>					
					<li class="mui-table-view-cell mui-media">
						<div class="mui-media-body allheader">
								商学院
							</div>
						<div class='servicetitle'>
						公司战略
						<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							资本营运
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							市场营销
							<span class="mui-pull-right">&gt;</span>
						</div>
						<div class='servicetitle'>
							人力资源
							<span class="mui-pull-right">&gt;</span>
						</div>
					</li>
                </ul>
            </div>
           

        </div>
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
