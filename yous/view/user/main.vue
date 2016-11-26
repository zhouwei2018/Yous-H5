<style scoped>
    html{font-size:10px;background:#fff;}
    .mui-content{padding-bottom:60px;}
    .userpic{ text-align:center;}
    .iconpic .mui-btn-link{font-size:20px;color:#eee;}
    .compantname{font-size:11px;}

	.getuserpic{width:99%;margin:0px auto;margin-top:30px;margin-bottom:10px;position:relative;}
    .getuserpic .headpeople{height:80px;width:80px;border-radius:50%;border:2px solid #b4b3af;}
    .circlepic a{color:#ddd;font-size:14px;}
     .circlepic h4{color:#ddd;font-size:14px;margin-bottom:10px;margin-top:20px;font-weight: normal;}
     .yanzhengpic{height:12px;border-radius:3px;position:absolute;top:0;margin-left:-2px;}

    .userlist{text-align:center;padding:10px;padding-bottom:10px;font-size:14px;}
    .userlist li{display:inline-block;border-right:1px solid #969090;padding:15px;padding-bottom:0px;padding-top:0px;}
    .userlist li:last-child{border:0;}
    .userlist li a{color:#aaa;}
    .userlist li span{color:#fff;}

    .mui-table-view li a{color:#3c3b40!important;}
    .mui-table-view span{float:right;margin-right:1rem;font-size:12px;color:#aaa;}

    .pingjia{background:#fff;margin-top:0;}
    .pingjia ul{width:100%;overflow:hidden;padding:0;}
    .pingjia li{list-style-type:none;width:20%;float:left;text-align:center;}
    .pingjia li a{color:#aaa;}

    .mui-table-view{margin-bottom:.6rem;font-size:14px;}
    .flex-container>a{
        /*display: none;*/
        position: relative;
        width: 20%;
        float: left;
        /*flex: 1;*/
        /*border: 1px red solid;*/
        padding:10px 0;
        text-align:center;
    }
    .flex-container span{

        /*border: 1px #ccc solid;*/
        border-radius: 100%;
        padding: 5px;
    }
    .flex-container h6{
        margin-top: 8px;

    }

    .flex-container img{
        width: 35%;
    }
    
    .munber{position:absolute;top:8px;height:14px;width:14px;
    		text-align:left!important;border-radius:50%;background:transparent;left:60%;
    		border:1px solid #f00;color:#f00;line-height:3px!important;font-size:12px!important;padding-left:3px!important;display:block;}
</style>
<template>
    <aoth></aoth>
	<!--导航区域-->
    <nav1></nav1>
	
    <div class="mui-content">
        <!--头部区域开始-->
        <div class="userpic" v-bind:style="styleObject">
            <div class="iconpic">
                <button class="mui-btn mui-btn-link mui-pull-right">
                    <span class="mui-icon mui-icon-gear" v-link="{ path: '/user/setting'}"></span>
                </button>
                <button class="mui-btn mui-btn-link" >
                    <span class='compantname'>公司名称</span>
                </button>
                <button class="mui-btn mui-btn-link mui-pull-left">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                </button>
            </div>
            <div class='circlepic'>
                <div class='getuserpic'><img src='../../../dist/img/decoration3.jpg' class='headpeople'>              
                					<!--认证之后显示图片--><img src="../../../dist/img/yanzhengpic.png" class='yanzhengpic'></div>
                <!--<a href="#">登录</a><a href="#">/注册</a>-->
                <!--登录进来需要显示用户名   --><a>用户名:A156456</a>
                 <a>{{ JSON.parse(localStorage.getItem("userinfo")).fdphone }}</a>
                <h4 v-link="{ path:'/user/label'}">在这里,找到属于你的不一样 &gt;</h4>
            </div>
            <div class='userlist'>
                <ul>
                    <li><a href="#"><span>0</span><br>动态</a></li>
                    <li><a href="#"><span>0</span><br>关注</a></li>
                    <li><a href="#"><span>0</span><br>粉丝</a></li>
                </ul>
            </div>
        </div>
        <!--头部区域结束-->
        <!--我的管家开始-->
        <ul class="mui-table-view" style='margin:0;'>
            <li class="mui-table-view-cell" v-link="{path:'/user/order/all'}">
                <a class="mui-navigate-right">
                    我的管家<span>查看全部订单</span>
                </a>
            </li>
        </ul>
        <!--我的管家结束-->
        <!--评价列表开始-->
        <!--<div style="height: 35px;margin: 0 10px;">
            <span style="line-height: 35px;">分享到：</span>
            <button  type="button" style="height: 30px;margin-top: 5px;" class="mui-btn mui-btn-yellow mui-pull-right" id='exit'>取消</button>
        </div>-->
        <div class="flex-container" style='overflow:hidden;background: #fff;'>

            <a v-link="{path: '/user/order/untaking'}">
                <img src='../../../dist/img/mypic1.png'/>
                <h6>待接单</h6>
            </a>

            <a v-link="{path: '/user/order/unservice'}">
                <img src='../../../dist/img/mypic2.png'/>
                <h6>待服务</h6>
            </a>
            <a v-link="{path: '/user/order/unconfirm'}">
                <img src='../../../dist/img/mypic3.png'/>
                  <span class="munber">3</span>
                <h6>待确认</h6>
            </a>         
            <a v-link="{path: '/user/order/unevaluate'}">
                <img src='../../../dist/img/mypic4.png'/>
                  <span class="munber">3</span>
                <h6>待评价</h6>
            </a>
            <a v-link="{path:'/user/complaint'}">
                <img src='../../../dist/img/mypic5.png'/>
                 <span class="munber">3</span>
                <h6>投诉</h6>
            </a>
            <!--<a id="WXSceneFavorite" class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->
        </div>
        <!--评价列表结束-->
        <!--钱包类别开始-->
        <ul class="mui-table-view" style='margin-top:10px;clear:both;'>
            <li class="mui-table-view-cell" v-link="{path:'/user/myservice'}">
                <a class="mui-navigate-right">
                    我的服务
                </a>
            </li>
        </ul>
        
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-link="{path:'/user/wallte'}">
                <a class="mui-navigate-right">
                    钱包
                </a>
            </li>
        </ul>
        <!--结尾钱包类-->
    </div>
</template>
<script>
import aoth from '../componets/aoth.vue'
import nav1 from '.././componets/nav.vue'
    export default {
        data ()
        {
            return {
                styleObject: {
                    background: 'url(./dist/img/mainbg.jpg)'
                }
            }
        },
        components : {
            nav1,
            aoth
        }
    }
</script>