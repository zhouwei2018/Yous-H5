<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <button id="submit" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">发送</button>
        <h1 class="mui-title">问题反馈</h1>
    </header>
    <div class="mui-content">
        <div class="mui-content-padded">
            <div class="mui-inline">问题和意见</div>
            <a class="mui-pull-right mui-inline" href="#popover">
                快捷输入
                <span class="mui-icon mui-icon-arrowdown"></span>
            </a>
            <!--快捷输入具体内容，开发者可自己替换常用语-->
            <div id="popover" class="mui-popover">
                <div class="mui-popover-arrow"></div>
                <div class="mui-scroll-wrapper">
                    <div class="mui-scroll">
                        <ul class="mui-table-view">
                            <!--仅流应用环境下显示-->
                            <li class="mui-table-view-cell stream">
                                <a href="#">桌面快捷方式创建失败</a>
                            </li>
                            <li class="mui-table-view-cell"><a href="#">界面显示错乱</a></li>
                            <li class="mui-table-view-cell"><a href="#">启动缓慢，卡出翔了</a></li>
                            <li class="mui-table-view-cell"><a href="#">偶发性崩溃</a></li>
                            <li class="mui-table-view-cell"><a href="#">UI无法直视，丑哭了</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mui-input-row">
            <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
        </div>
        <p>图片(选填,提供问题截图,总大小10M以下)</p>
        <div id='image-list' class="row image-list"></div>
        <p>QQ/邮箱</p>
        <div class="mui-input-row">
            <input id='contact' type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
        </div>
    </div>
</template>