
<template>
    <nav class="mui-bar mui-bar-tab">
    <a  class="mui-tab-item" v-link="{ path: '/index', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </a>
    <a class="mui-tab-item"  v-link="{ path: '/decorate', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">装修</span>
    </a>
    <a class="mui-tab-item" v-link="{ path: '/service', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">服务</span>
    </a>
    <a class="mui-tab-item" v-link="{ path: '/space', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">动态</span>
    </a>
    <a class="mui-tab-item"  v-link="{ path: '/login', activeClass:'mui-active'}">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">13</span></span>
        <span class="mui-tab-label">个人中心</span>
    </a>
</nav>
<alert :show.sync="show"
       :title="title"
       :content="content"></alert>
</template>
