<style  scoped>
	.mui-content{padding-top:0.8rem}
	.top{background:#fff;overflow: auto;padding-top:0.2rem;}
	 .left{width:49%;float:left;border-right:1px solid #ddd;}
	 .right{float:left;}
	 .title{font-size:0.28rem;color:#101010;margin-bottom:0;}
	 .content{font-size:0.24rem;color:#b2b3b5;}
	 .title,.content{text-indent:0.2rem;}
	 .pic{text-align:center;}
	 .pic img{width:90%;}	 
	 /*右侧设置*/
	.rightleft{float:left;}
	.rightpic{float:left;}
	.rightpic img{width:10%}
</style>
<template>
    <!--面板区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
    	<div class='top'>
    		<div class='left'>  bnnn
    			<p class='title'>免费报价</p>
    			<p class='content'>1分钟了解装修花多少钱</p>
    			<p class='pic'><img src="../../../dist/img/mathjisuan.jpg"></p>    			
    		</div>
    		<div class='right'>
    			<div class='righttop'>
    				<div class='rightleft'>
    					<p class='title'>免费设计</p>
    					<p class='content'>3天出设计图</p>	
    				</div>
    				<div class="rightpic">
    					
    				</div>
    			</div>
    			<div class='rightbottom'>
    				
    				
    				
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