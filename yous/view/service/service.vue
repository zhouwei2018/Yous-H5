<style>
	.mui-content{margin-top:20px;}
	.emindcontainer{position:relative}
	.remind{position:absolute;top:-5px;left:35px;width:10px;height:10px;border-radius:50%;background: orangered;}
</style>
<template>
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
    	<!--第一个轮播开始-->
        <ul class="mui-table-view" style='padding-top:20px;'>
			<li class="mui-table-view-cell mui-hidden">cared
				<div id="M_Toggle" class="mui-switch mui-active">
					<div class="mui-switch-handle"></div>
				</div>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="#">
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
					<div class='remindcontainer'>
						<img class="mui-media-object mui-pull-left" src='../../../dist/img/informationchat.jpg'>
						<span class='remind' style='position:absolute;top:-5px;left:35px;width:10px;height:10px;border-radius:50%;background: orangered;'></span>
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
