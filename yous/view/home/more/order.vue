<style scoped>
    .tel{float:right;}
    textarea{border:0;}
    .questionpic{margin-bottom:10px;}
    #submit{width:96%;margin:10px auto;}
</style>
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">水路管件</h1>
    </header>
    <div class="mui-content">
        <!-- 普通面板 -->
        <panel :show="false" title="个人信息" class='inform'>
	        <div>
	            <p class='name'>张三<span class='tel'>185658546561</span></p>
	            <p class='address'>北京市朝阳区东三环建外soho</p>
	        </div>
    	</panel>
        <panel :show="false" title="问题和意见 快捷输入" class='question'>
            <div>
                <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
            </div>
        </panel>
        <panel :show="false" title="请详细描述你的问题和意见" class='questionpic'>
            <div>
                <p>图片(选填,提供问题截图,总大小10M以下)</p>
            </div>
        </panel>
        <div id='image-list' class="row image-list"></div>
        <button id="submit" class="mui-btn mui-btn-blue mui-btn-block">发送</button>
    </div>
</template>
<script>
    import panel from '../../../../src/components/panel.vue'
    export default {
        components : {
            panel
        }
    }
</script>

