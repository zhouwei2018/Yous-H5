<style scoped>
    header{position:relative;}
    header a{margin-right:4%;}
  	.citybtn{border:0;background-color: transparent;}/*这里需要书写背景图片下拉按按钮*/
  	.mui-bar-nav{height:8rem;line-height:8rem!important;}
  	.citybtn,.logo,.mui-pull-right{line-height:8rem;}
</style>
<template>
    <header class="mui-bar mui-bar-nav" >
        <button href="#"  class="mui-btn mui-pull-left citybtn"  @click.prevent="show=true">北京</button>
        <actions :show.sync="show" title="请选择切换城市">
            <li @click="selectCity(1)">上海</li>
            <li @click="selectCity(2)">深圳</li>
            <li @click="selectCity(3)">广州</li>
            <li>取消</li>
        </actions>
        <h1 class="mui-title logo"><img src="../../../dist/img/logoworld.png"></h1>
        <a class="mui-pull-right"><span class="mui-icon mui-icon-map"></span></a>
    </header>
</template>
<script>
    //    header h1{background: url(logoworld.png) no-repeat center center;height:100%;background-size: 40% 70%;}
    import actions from '../../../src/components/actions.vue';
    export default {
        data ()
        {
            return {
                styleObject: {
                    background: 'url(./dist/img/logoworld.png) no-repeat center center',

                },
                show : false
            }
        },
        components : {
            actions
        },
        methods : {
            selectCity(data) {
                alert(data)
                this.show = false
            }
        }
    }
</script>
