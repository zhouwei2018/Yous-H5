<style scoped>
    html{font-size:10px;background:#fff;}
    .mui-content{position:absolute;height:100%;width:100%;background:#fff;}
    .userpic{ text-align:center;}
    /*.iconpic{margin-top:0.5rem;}*/
    .iconpic .mui-btn-link{font-size:1.8rem;color:#fff;}
    .compantname{font-size:18px;}

    .circlepic{text-align:center;color:#fff;font-size:1.2rem;}
    .circlepic .getuserpic{height:8rem;width:8rem;background:#fff;clear:both;border-radius:50%;margin:20px auto;}
    .circlepic a{color:#fff;font-size:1.2rem;}
    .circlepic h4{font-size:1rem;margin:10px auto;color:#aaa;margin-top:2.1rem;margin-bottom:2rem;}

    .userlist{text-align:center;padding-bottom: 8px;}
    .userlist li{display:inline-block;width:6rem;border-right:1px solid #919497;list-style-type:none;}
    .userlist li:last-child{border-width:0;}
    .userlist li:first-child{margin-left:-3rem;}
    .userlist li a{color:#9a9592;}
    .userlist li a span{color:#fff;}

    .mui-table-view{margin-top:1px;}
    .mui-table-view li a{color:#3c3b40!important;}
    .mui-table-view span{float:right;margin-right:2rem;font-size:1rem;color:#aaa;}

    .pingjia{background:#fff;margin-top:0;}
    .pingjia ul{width:100%;overflow:hidden;padding:0;}
    .pingjia li{list-style-type:none;width:20%;float:left;text-align:center;}
    .pingjia li a{color:#aaa;}

    .mui-table-view{margin-bottom:.6rem;}
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
        width: 50%;
    }
</style>
<template>
    <div class="mui-content">
        <!--头部区域开始-->
        <div class="userpic" v-bind:style="styleObject">
            <div class="iconpic">
                <button class="mui-btn mui-btn-link mui-pull-left">
                    <span class="mui-icon mui-icon-gear" v-link="{ path: '/user/setting'}"></span>
                </button>
                <button class="mui-btn mui-btn-link" >
                    <span class='compantname'>公司名称</span>
                </button>
                <button class="mui-btn mui-btn-link mui-pull-right" v-link="{ path: '/user/message'}" >
                    <span class="mui-icon mui-icon-chatbubble"></span>
                </button>
            </div>
            <div class='circlepic'>
                <div class='getuserpic'></div>
                <a href="#">登录</a>/<a href="#">注册</a>
                <h4>在这里,找到属于你的不一样<span class="mui-icon mui-icon-arrowright" v-link="{ path:'/user/label'}"></span></h4>
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
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    我的管家<span  v-link="{path:'/user/order'}">查看全部订单</span>
                </a>
            </li>
        </ul>
        <!--我的管家结束-->
        <!--评价列表开始-->
        <!--<div style="height: 35px;margin: 0 10px;">
            <span style="line-height: 35px;">分享到：</span>
            <button  type="button" style="height: 30px;margin-top: 5px;" class="mui-btn mui-btn-yellow mui-pull-right" id='exit'>取消</button>
        </div>-->
        <div class="flex-container" style='margin-top:10px;overflow:hidden'>

            <a>
                <img src='../../../dist/img/btn_kongjian@3x.png'/>
                <h6>待接单</h6>
            </a>

            <a>
                <img src='../../../dist/img/btn_pengyouquan@3x.png'/>
                <h6>待服务</h6>
            </a>
            <a>
                <img src='../../../dist/img/btn_pengyouquan@3x.png'/>
                <h6>待确认</h6>
            </a>
            <a>
                <img src='../../../dist/img/btn_qq@3x.png'/>
                <h6>待评价</h6>
            </a>
            <a>
                <img src='../../../dist/img/btn_tengxunweibo@3x_67.png'/>
                <h6>投诉</h6>
            </a>
            <!--<a id="WXSceneFavorite" class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->
        </div>
        <!--评价列表结束-->
        <!--钱包类别开始-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right" id='openservice'>
                    我的服务
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right" id='openwallete'>
                    钱包
                </a>
            </li>
        </ul>
        <!--结尾钱包类-->
    </div>
</template>
<script>
    export default {
        data ()
        {
            return {
                styleObject: {
                    background: 'url(./dist/img/mainbg.jpg)'
                }
            }
        }
    }
</script>