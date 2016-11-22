<style scoped>
	html{font-size:10px;}
	.mui-table-view{margin-top:1rem;}
	.mui-table-view li a{color:#3c3b40!important;FONT-SIZE:14px;}
	.mui-table-view span{float:right;margin-right:15px;font-size:12px;color:#aaa;}
</style>
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">设置</h1>
    </header>
    <div class="mui-content">
        <!--个人资料-->
        <ul class="mui-table-view" style='margin-top:0;'>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right" id='openziliao' v-link="{path:'/user/info'}">
                    个人资料
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right" id='openapply'>
                    申请认证<span>未认证</span>
                </a>
            </li>
        </ul>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-link="{path:'/user/suggestion'}">
                <a class="mui-navigate-right">
                    反馈建议
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right" href='tel:1234355'>
                    提问客服<span>400 800 12545</span>
                </a>
            </li>
        </ul>


        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    给我评分
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    常见问题
                </a>
            </li>
        </ul>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    清除缓存<span>32.23M</span>
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" style="text-align: center;">
                <a v-link="{ path: '/login'}">退出登录</a>
            </li>
        </ul>
    </div>
</template>
