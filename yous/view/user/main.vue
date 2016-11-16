
<style>
    html{font-size:10px;background:#fff;}
    .mui-content{position:absolute;height:100%;width:100%;background:#fff;}
    .iconpic{margin-top:0.5rem;}
    .iconpic .mui-btn-link{font-size:2.8rem;color:#fff;}

    .circlepic{text-align:center;color:#fff;font-size:2rem;}
    .circlepic .getuserpic{height:8rem;width:8rem;background:#fff;clear:both;border-radius:50%;margin:20px auto;}
    .circlepic a{color:#fff;font-size:2rem;}
    .circlepic h4{font-size:1.5rem;margin:10px auto;color:#aaa;margin-top:2.1rem;margin-bottom:2rem;}

    .userlist{text-align:center;}
    .userlist li{display:inline-block;width:6rem;border-right:1px solid #919497;list-style-type:none;}
    .userlist li:last-child{border-width:0;}
    .userlist li:first-child{margin-left:-3rem;}
    .userlist li a{color:#9a9592;}
    .userlist li a span{color:#fff;}

    .mui-table-view{margin-top:1px;}
    .mui-table-view li a{color:#3c3b40!important;}
    .mui-table-view span{float:right;margin-right:2rem;font-size:1.3rem;color:#aaa;}

    .pingjia{background:#fff;margin-top:0;}
    .pingjia ul{width:100%;overflow:hidden;padding:0;}
    .pingjia li{list-style-type:none;width:20%;float:left;text-align:center;}
    .pingjia li a{color:#aaa;}

    .mui-table-view{margin-bottom:.6rem;}
</style>
<template>
    <div class="mui-content">
        <!--头部区域开始-->
        <div v-bind:style="styleObject">
            <div class="iconpic">
                <button class="mui-btn mui-btn-link mui-pull-left" id='shezhi'>
                    <span class="mui-icon mui-icon-gear"  v-link="{ path: '/user/setting'}"></span>
                </button>
                <button class="mui-btn mui-btn-link mui-pull-right" >
                    <span class="mui-icon mui-icon-chatbubble"></span>
                </button>
            </div>
            <div class='circlepic'>
                <div class='getuserpic' v-link="{ path:'/user/info'}"></div>
                <a href="#">登录</a>/<a href="#">注册</a>
                <h4>在这里,找到属于你的不一样<span class="mui-icon mui-icon-arrowright"></span></h4>
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
                <a class="mui-navigate-right" id='guanli'>
                    我的管家<span>查看全部订单</span>
                </a>
            </li>
        </ul>
        <!--我的管家结束-->
        <!--评价列表开始-->
        <div class='pingjia'>
            <ul>
                <li><a><span class="mui-icon mui-icon-refreshempty"></span>
                    <br>待接单
                </a></li>
                <li><a><span class="mui-icon mui-icon-refreshempty"></span>
                    <br>带服务
                </a></li>
                <li><a><span class="mui-icon mui-icon-refreshempty"></span>
                    <br>待确认
                </a></li>
                <li><a><span class="mui-icon mui-icon-refreshempty"></span>
                    <br>带评价
                </a></li>
                <li><a><span class="mui-icon mui-icon-refreshempty"></span>
                    <br>售后
                </a></li>
            </ul>
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