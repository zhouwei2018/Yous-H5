<style scoped>
	.mui-media-body{font-size:15px;color:#333}
	.mui-ellipsis{font-size:12px;}
    .homecontainer {
        width: 96%;
        margin: 0px auto;
    }
    .homecontainer h4 span {
        color: #FF7F19;
        margin-right: 1px;
    }
    .homecontainer h4 {
        margin: 20px;
        margin-left: 0;
        color: #2C3637;
        margin-bottom: 10px;
    }
    .homecontainer button {
        margin-right: 30px;
    }

    .homecontainer .mui-row {
        width: 99%;
        margin: 15px auto;
        text-align: left;
        padding-left: 20px;
    }
    .homecontainer .mui-row a.mui-btn {
        border-radius: 20px;
        background: #F4F4F4;
        color: #929699;
        border-width: 0;
        margin-bottom:15px;
    }
    .flex-container {
        text-align: center;
        overflow: hidden;
    }
    .flex-container > a {
        position: relative;
        width: 25%;
        float: left;
        padding: 10px 0;
    }
    .flex-container span {
        border-radius: 100%;
        padding: 5px;
    }
    .flex-container h6 {
        margin-top: 8px;
    }
    .flex-container img {
        width: 50%;
    }
</style>

<template >
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
        <!--第一个轮播-->
        <div class="mui-slider">
            <slide :list="list" ></slide>
        </div>

        <!--空间服务-->
        <div class="homecontainer" style='margin-top: 10px;clear:both;'>
            <div class="flex-container">
                <a  v-link="{ path: '/transfer/lists'}">
                    <img src='../../dist/img/homemainlink1.png'/>
                    <h6>物业对接</h6>
                </a>

                <a v-link="{ path: '/maintenance/lists'}">
                    <img src='../../dist/img/homemainlink2.png'  />
                    <h6>设备维修</h6>
                </a>

                <a v-link="{ path: '/pay/lists'}">
                    <img src='../../dist/img/homemainlink3.png'/>
                    <h6>缴费事项</h6>
                </a>
                <a v-link="{ path: '/more/lists'}">
                    <img src='../../dist/img/homemainlink4.png'/>
                    <h6>更多</h6>
                </a>
                <!--<a id="WXSceneFavorite" class="weixin bad-jianxian"><span class="mui-icon mui-icon-star" style="color: #E2D45F;"></span><h6>微信收藏</h6></a>-->
            </div>
        </div>

        <!--幼狮社区-->
        <div class="homecontainer" style='clear:both;'> <!--幼狮社区开始-->
            <h4><span>幼狮</span>社区</h4>
            <div class="mui-slider">
                <slide :list="list2" ></slide>
            </div>
        </div>

        <!--资源对接-->
        <div class="homecontainer">
            <h4><span>资源</span>对接</h4>
            <div class="mui-slider">
                <slide :list="list2" ></slide>
            </div>
        </div>

        <!--幼狮支持-->
        <div class="homecontainer">
            <h4><span>幼狮</span>支持</h4>
            <div class="mui-row">
                <a class="mui-btn mui-btn-outlined" href='#'>
                    融资
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    财税
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    营销推广
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    法律
                </a>            
                <a class="mui-btn mui-btn-outlined" href='#'>
                    人才资源
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    IT服务
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    投融资
                </a>
                <a class="mui-btn mui-btn-outlined" href='#'>
                    服务商
                </a>
            </div>
        </div>

        <!--精选服务商-->
        <div class="homecontainer" style='padding-bottom:50px;'> <!--精选服务商开始-->
            <h4><span>精选</span>服务商</h4>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../../dist/img/urslistleft.png">
                        <div class="mui-media-body">
                            北京幼狮空间
                            <p class='mui-ellipsis'>为梦想,造支点</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../../dist/img/urslistleft.png">
                        <div class="mui-media-body">
                            北京幼狮空间
                            <p class='mui-ellipsis'>专注中小型企业的发展</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../../dist/img/urslistleft.png">
                        <div class="mui-media-body">
                            北京幼狮空间
                            <p class='mui-ellipsis'>平台建设</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!--导航区域-->
    <nav1></nav1>

</template>

<script>
    import header1 from './componets/header.vue';
    import nav1 from './componets/nav.vue';
    import slide from '../../src/components/slide.vue';
    export default {
        data() {
        return {
                list : [{
                    img : '../../dist/img/homemarqueepic.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                }],
                list2 : [{
                    img : '../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../dist/img/hotshoopingpic1.jpg',
                    link : 'http://www.baidu.com'
                },{
                    img : '../../dist/img/hotshoopingpic1.jpg',
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
