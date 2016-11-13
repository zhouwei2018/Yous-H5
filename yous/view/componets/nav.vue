<style>
    header{position:relative;}
    header a{margin-right:4%;}
    header h1{background: url(../../../dist/img/logoworld.png) no-repeat center center;height:100%;background-size: 40% 70%;}
    select{-webkit-appearance: listbox; -webkit-user-select: auto !important;}
    #citylist{border-width:0;background:url(../../../dist/img/selectarrow.png) no-repeat center right #F7F7F7;padding-right:23px;position:absolute;z-index:20px;font-size:14px;background-position-y:33% ;}

</style>
<template>
    <nav class="mui-bar mui-bar-tab">
    <a id="defaultTab" class="mui-tab-item" href="home.html" v-link="{ path: '/index', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item" href="chat.html">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">装修</span>
    </a>
    <a class="mui-tab-item" href="tel.html">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">服务</span>
    </a>
    <a class="mui-tab-item" href="setting.html">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">动态</span>
    </a>
    <a class="mui-tab-item"  v-link="{ path: '/login', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">13</span></span>
        <span class="mui-tab-label">个人中心</span>
    </a>
</nav>
</template>