<style scoped>
	.mui-table-view{margin-top:10px;}
	.mui-table-view:first-child{height:8rem;line-height:6rem;}
	.mui-table-view li a{color:#3c3b40!important;font-size:14px;}
	.mui-table-view span{float:right;margin-right:20px;font-size:12px;color:#aaa;}
</style>
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">个人资料</h1>
    </header>
    <div class="mui-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    头像
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">
                    账号<span>space</span>
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-link="{path:'/user/restpassword'}">
                <a class="mui-navigate-right">
                    修改密码
                </a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-link="{path:'/user/address'}">
                <a class="mui-navigate-right">
                    所在地址
                </a>
            </li>
        </ul>
    </div>
</template>
