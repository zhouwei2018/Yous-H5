<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">注册</h1>
    </header>
    <div class="mui-content">
        <form id='login-form' class="mui-input-group">
            <div class="mui-input-row">
                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号">
            </div>
            <div class="mui-input-row">
                <input id='pwd' type="password" class="mui-input-clear mui-input" placeholder="输入密码">
            </div>
            <div class="mui-input-row">
                <input id='reppwd' type="password" class="mui-input-clear mui-input" placeholder="确认密码">
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入验证码">
                <input type="button" value="获取验证码" id="btn" style='position:absolute;right:10px;top:0;' class="mui-btn getnumber" onclick="sendCode(this)">
            </div>
        </form>
        <div class="mui-content-padded">
            <button id='zhuce' class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;'>注册</button>
        </div>
    </div>
    <div class="mui-content-padded oauth-area">

    </div>
    </div>
</template>