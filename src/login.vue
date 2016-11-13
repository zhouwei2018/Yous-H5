<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">登录</h1>
    </header>
    <div class="mui-content" style='margin-top:10px;'>
        <form id='login-form' class="mui-input-group">
            <div class="mui-input-row">
                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入手机号">
            </div>
            <div class="mui-input-row" style='position:relative;'>
                <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
            </div>
        </form>
        <div class="mui-content-padded" style='text-align:center;'>
            <button id='login' class="mui-btn mui-btn-block" style='background:#ff8112;color:#fff;'>登录</button>
            <div class="link-area"><a v-link="{ path: '/register'}">注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
            </div>
        </div>
    </div>
</template>
<script>

</script>