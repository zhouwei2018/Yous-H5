<style scoped>
	 .mui-row.mui-fullscreen > [class*="mui-col-"] { height: 100%; }
    .mui-col-xs-3,
    .mui-control-content { overflow-y: auto; height: 100%; }
    .mui-segmented-control .mui-control-item { line-height: 40px; width: 100%; }
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {background-color: #fff;color:#fa7611}
    
    .mui-table-view{height:100%;background:#fff;}
    .mui-table-view .mui-table-view-cell{padding-left:10px}
    .mui-table-view .mui-table-view-cell .curprice{color: #EC971F;}
    .mui-table-view .mui-table-view-cell .oldprice{color: #ccc; font-size: .6rem; text-decoration: line-through;}
    
    .userpic li{width:30%;margin-right:1%;text-align:center;font-size:12px;display:inline-block;margin-bottom:10px;}
    .userpic li img{width:60px;height:60px;border-radius:50%;}
     .userpic li a{display:block;}
     .userpic ul{margin-top:10px;margin-bottom:10px;}
     
     .allheader{font-size:14px;color:#aaa;margin-bottom:10px;}
     .allpic img{width:32%;margin-right:1%;text-align:center;}
     
     #segmentedControls a{font-size:14px;}
</style>
<template>
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content mui-row mui-fullscreen">
    	 <div class="mui-col-xs-3">
            <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                <a class="mui-control-item mui-active" href="#content1" onclick=''>全部服务</a>
                <a class="mui-control-item" href="#content2">获取服务</a>
                <a class="mui-control-item" href="#content3">投融资</a>
                <a class="mui-control-item" href="#content4">商学院</a>
                <a class="mui-control-item" href="#content5">精选服务</a>
                <a class="mui-control-item" href="#content6">热门项目</a>
                <a class="mui-control-item" href="#content7">投资人</a>
                <a class="mui-control-item" href="#content8">资产评估</a>
                <a class="mui-control-item" href="#content9">小型办公</a>
            </div>
        </div>
        <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
            <div id="content1" class="mui-control-content mui-active">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							
							<div class="mui-media-body allheader">
								精选服务
							</div>
							<div class="mui-media-body allpic">
								<img src="../../../dist/img/decoration1.jpg">
								<img src="../../../dist/img/decoration1.jpg">
								<img src="../../../dist/img/decoration1.jpg">
							</div>
							<div class="mui-media-body userpic">
								<ul>
									<li><a href=""><img src='../../../dist/img/decoration2.jpg'></a>幼狮空间</li>
									<li><a href=""><img src="../../../dist/img/decoration2.jpg"></a>幼狮空间</li>
									<li><a href=""><img src='../../../dist/img/decoration2.jpg'></a>幼狮空间</li>
									<li><a href=""><img src="../../../dist/img/decoration2.jpg"></a>幼狮空间</li>
									<li><a href=""><img src='../../../dist/img/decoration2.jpg'></a>幼狮空间</li>
									<li><a href=""><img src="../../../dist/img/decoration2.jpg"></a>幼狮空间</li>
								</ul>
							</div>
						</a>
					</li>                     
                </ul>
            </div>
            <div id="content2" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第2个选项卡子项-1</li>                   
                </ul>
            </div>
            <div id="content3" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第3个选项卡子项-1</li>
                </ul>
            </div>
            <div id="content4" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第4个选项卡子项-1</li>
                </ul>
            </div>
            <div id="content5" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第5个选项卡子项-1</li>                   
                </ul>
            </div>
            <div id="content6" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第6个选项卡子项-1</li>                    
                </ul>
            </div>
            <div id="content7" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第7个选项卡子项-1</li>                   
                </ul>
            </div>
            <div id="content8" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第8个选项卡子项-1</li>                    
                </ul>
            </div>
            <div id="content9" class="mui-control-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">第9个选项卡子项-1</li>                    
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
