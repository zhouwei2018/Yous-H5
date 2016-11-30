<style scoped>
    header{position:relative;}
    header a{margin-right:4%;}
  	.citybtn{border:0;background-color: transparent;}/*这里需要书写背景图片下拉按按钮*/
  	.mui-bar-nav{height:0.9rem;}
  	.logo img{height:0.32rem;}
  	.mui-pull-right img{height:0.42rem!important;}
  	.logo,.mui-pull-right{height:0.9rem;line-height:1rem;padding:0;margin:0;}
  	.citybtn{font-size:0.28rem;color:#101010;line-height:0.9rem;height:0.7rem;padding:0;}
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
        <h1 class="mui-title logo"><img src="../../../dist/img/logoworld1.png"></h1>
        <a class="mui-pull-right" v-link="{ path: '/map/map'}"><img src="../../../dist/img/mapnew.png"></a>
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
