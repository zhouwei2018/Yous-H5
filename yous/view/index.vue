<style>
    body,.mui-content{background:#fff}
    #urscommunity{width:96%;margin:10px auto;}
    .homecontainer{width:96%;margin:30px auto;}
    .homecontainer h4 span{color:#FF7F19;margin-right:1px;}
    .homecontainer h4{margin:20px;margin-left:0;color:#2C3637;margin-bottom:10px;}
    .homecontainer button{margin-right:30px;}
    .homecontainer .mui-row{width:99%;margin:15px auto;text-align:left;padding-left:20px;}
    .homecontainer .mui-row a.mui-btn{border-radius:20px;background: #F4F4F4;color:#929699;border-width:0;}
</style>
<template>
    <header1></header1>
    <nav1></nav1>

    <div class="mui-content">
        <div class="mui-slider" id='mainSlider'>
            <div class="mui-slider-group mui-slider-loop">
                <!--支持循环，需要重复图片节点-->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#"><img src="../../dist/img/homemarqueepic2.jpg" /></a>
                    <p class="mui-slider-title">幼狮公告3</p>
                </div>
                <div class="mui-slider-item">
                    <a href="#"><img src="../../dist/img/homemarqueepic.jpg" /></a>

                </div>
                <div class="mui-slider-item">
                    <a href="#"><img src="../../dist/img/homemarqueepic1.jpg" />
                    </a>
                </div>
                <div class="mui-slider-item">
                    <a href="#"><img src="../../dist/img/homemarqueepic2.jpg" />
                    </a>
                </div>
                <!--支持循环，需要重复图片节点-->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href="#"><img src="../../dist/img/homemarqueepic.jpg" /></a>

                </div>
            </div><!--轮播图片结束-->
            <div class="mui-slider-indicator" style="margin:0 auto;"> <!--轮播的按钮组件-->
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div><!--轮播结束-->
        <!--首页面图标链接开始-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div></a></li>
        </ul> <!--主链接结束-->

        <div class="homecontainer"> <!--幼狮社区开始-->
            <h4><span>幼狮</span>社区</h4>
            <div class="mui-slider" id='ursCommunity'>
                <div class="mui-slider-group mui-slider-loop">
                    <!--支持循环，需要重复图片最前节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#"><img src="../../dist/img/hotshoopingpic2.jpg" /></a>

                    </div>
                    <div class="mui-slider-item">
                        <a href="#"><img src="../../dist/img/hotshoopingpic1.jpg" /></a>

                    </div>
                    <div class="mui-slider-item">
                        <a href="#"><img src="../../dist/img/hotshoopingpic2.jpg" />
                        </a>
                    </div>
                    <!--支持循环，需要重复图片最后节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#"><img src="../../dist/img/hotshoopingpic1.jpg" /></a>

                    </div>
                </div><!--轮播图片结束-->
                <div class="mui-slider-indicator mui-text-right" style="margin:0 auto;"> <!--轮播的按钮组件-->
                    <div class="mui-indicator mui-active"></div>
                    <div class="mui-indicator"></div>
                </div>
            </div><!--轮播结束-->
        </div> <!--幼狮社区结束-->

        <div class="homecontainer"> <!--资源对接开始-->
            <h4><span>资源</span>对接</h4>
            <div class="mui-slider" id='resourceDocking'>
                <div class="mui-slider-group mui-slider-loop">
                    <!--支持循环，需要重复图片节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#"><img src="../../dist/img/hotactive2.png" /></a>
                    </div>
                    <div class="mui-slider-item">
                        <a href="#"><img src="../../dist/img/hotactive1.png" /></a>
                    </div>
                    <div class="mui-slider-item">
                        <a href="#"><img src="../../dist/img/hotactive2.png" />
                        </a>
                    </div>
                    <!--支持循环，需要重复图片节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate">
                        <a href="#"><img src="../../dist/img/hotactive1.png" /></a>
                    </div>
                </div><!--轮播图片结束-->
                <div class="mui-slider-indicator mui-text-right" style="margin:0 auto;"> <!--轮播的按钮组件-->
                    <div class="mui-indicator mui-active"></div>
                    <div class="mui-indicator"></div>
                </div>
            </div><!--轮播结束-->
        </div> <!--资源对接结束-->

        <div class="homecontainer"> <!--资源对接开始-->
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
            </div>
            <div class="mui-row">
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
        </div> <!--资源对接结束-->


        <div class="homecontainer"> <!--精选服务商开始-->
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
        </div> <!--精选服务商结束-->
    </div><!--内容区域结束-->


</template>
<script>
    import header1 from './componets/header.vue'
    import nav1 from './componets/nav.vue'
    export default {
        components : {
            header1,
            nav1
        }
    }
</script>