<style scoped>

		.mui-bar-tab{height:1rem;}
		.mui-icon img{height:0.4rem;width:0.4rem;}
        /*@font-face {font-family: "iconfont";
              src:url('../../../../dist/fonts/iconfont.ttf?t=1480324524141') format('truetype');
            } 这里是添加的文字路径*/
	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	}
	.icon-shouye:before { content: "\e730"; }
	
	.icon-hert:before { content: "\e616"; }
	
	.icon-wode:before { content: "\e65f"; }
	
	.icon-dongtai:before { content: "\e6ad"; }
	
	.icon-tupian:before { content: "\e707"; }
</style>
<template>
    <nav class="mui-bar mui-bar-tab">
    <a  class="mui-tab-item" v-link="{ path: '/index', activeClass:'mui-active'}">
        <span class="mui-icon"><img src='../../../dist/img/footer1.png'></span>
<!--        <span class="mui-icon iconfont icon-wode"></span> 自定义图标-->
        <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" v-link="{ path: '/service', activeClass:'mui-active'}">
        <span class="mui-icon"><img src='../../../dist/img/footer3.png'></span>
        <span class="mui-tab-label">服务</span>
    </a>
    <a class="mui-tab-item" v-link="{ path: '/space', activeClass:'mui-active'}">
      <span class="mui-icon"><img src='../../../dist/img/footer4.png'></span>
        <span class="mui-tab-label">动态</span>
    </a>
 	<a class="mui-tab-item"  v-link="{ path: '/decorate', activeClass:'mui-active'}">
        <span class="mui-icon"><img src='../../../dist/img/footer2.png'><!--<span class="mui-badge">9</span>--></span>
        <span class="mui-tab-label">装修</span>
    </a>
    <a v-if="{{localStorage.getItem('userinfo')==undefined}}" class="mui-tab-item"  v-link="{ path: '/login', activeClass:'mui-active'}">
        <span class="mui-icon"><img src='../../../dist/img/footer5.png'><!--<span class="mui-badge">13</span>--></span>
        <span class="mui-tab-label">个人中心</span>
    </a>
    <a v-else="{{localStorage.getItem('userinfo')==undefined}}" class="mui-tab-item"  v-link="{ path: '/user/main', activeClass:'mui-active'}">
        <span class="mui-icon"><img src='../../../dist/img/footer5.png'><!--<span class="mui-badge">13</span>--></span>
        <span class="mui-tab-label">个人中心</span>
    </a>
</nav>
</template>
<!--<script>-->
    <!--export default{-->
        <!--data(){-->
        <!--return {-->
            <!--fontsrc: require('../dist/fonts/iconfont.ttf')-->
        <!--}-->

       <!--}-->

    <!--}-->

<!--</script>-->
