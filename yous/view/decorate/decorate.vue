<style  scoped>
	 .lunbo{background:#fff;padding:10px;margin-top:10px;}	
		h4{text-align:center;font-size:14px;color:#444;margin-top:10px;margin-bottom:10px;}
	 .mui-content{padding-top:20px;padding-bottom:50px;}
	 
	 .top{padding-top:20px;background:#fff;overflow:hidden;}
	 .top .left{width:45%;border-right:1px solid #eee;float:left;}
	 p{color:#333;font-size:14px;text-indent:10px;}
	 .describe{display:block;color:#aaa;font-size:12px;}
	 .leftcontent{text-align:center;}
	 .leftcontent img{width:70%;height:60px;border-radius:10px;}
	 .title img{width:45%;height:60px;}
	 .right{float:right;width:54%;}
	 .right p{text-indent:10px;}
	 .righttop,.rightbottom{border-bottom:1px solid #eee;padding-bottom:5px;padding-top:5px;}
</style>
<template>
    <!--面板区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
    	<div class="top">
    		<div class='left'>
    			<p class='title'>免费报价<span class='describe'>1分钟了花费多少钱</span></p>
    			<p class='leftcontent'><img src="../../../dist/img/decoration3.jpg"></p>
    		</div>
    		
    		<div class='right'>
    			<div class="righttop">
    				<p class='title'>免费设计<span class='describe'>三天出效果图</span></p>  				
    			</div>
    			<div class="rightbottom">
    				<p class='title'>装修风格测试<span class='describe'>测出最适合风格</span></p>
    			</div>
    		</div>
    	</div>
    	<div class='lunbo'>
    	<!--第一个轮播-->
         <h4>-幼狮装饰-</h4>
          <div class="mui-slider">
            <slide :list="list" ></slide>
        </div>
        <!--第二个轮播-->
         <h4>-幼狮效果-</h4>
          <div class="mui-slider">
            <slide :list="list2" ></slide>
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
                }],
                list2 : [{
                    img : '../../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                }] //banner（list,list2）图数据源
            }
      },
       components : {
            header1,
            nav1,
            slide
        }
    }
</script>