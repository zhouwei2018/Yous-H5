<style>
    header{position:relative;}
    header a{margin-right:4%;}
</style>
<template>
    <header class="mui-bar mui-bar-nav" >
        <button href="#"  class="mui-btn mui-pull-left"  @click.prevent="show=true">北京</button>
        <actions :show.sync="show" title="请选择切换城市">
            <li @click="selectCity(1)">上海</li>
            <li @click="selectCity(2)">深圳</li>
            <li @click="selectCity(3)">广州</li>
        </actions>
        <h1 class="mui-title" ></h1>
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
