<style>
	 h4 span{color:#FF7F19;margin-right:1px;}
	 h4{margin:20px;margin-left:0;color:#2C3637;margin-bottom:10px;}
	 .mui-content{padding-top:15px!important;}
</style>
<template>
    <!--面板区域-->
    <header1></header1>'
    <!--面板区域-->
    <div class="mui-content">
    	<!--第一个轮播-->
         <h4><span>幼狮</span>装饰</h4>
          <div class="mui-slider">
            <slide :list="list" ></slide>
        </div>
        <!--第二个轮播-->
         <h4><span>幼狮</span>效果</h4>
          <div class="mui-slider">
            <slide :list="list2" ></slide>
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