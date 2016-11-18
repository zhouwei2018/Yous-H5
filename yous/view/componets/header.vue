<style>
    header{position:relative;}
    header a{margin-right:4%;}
</style>
<template>
    <header class="mui-bar mui-bar-nav" >
        <button href="#"  class="mui-btn mui-pull-left">北京</button>
        <h1 class="mui-title" ></h1>
        <a class="mui-pull-right"><span class="mui-icon mui-icon-map"></span></a>
    </header>
</template>
<script>
    //    header h1{background: url(logoworld.png) no-repeat center center;height:100%;background-size: 40% 70%;}
    export default {
        data ()
    {
        return {
            styleObject: {
                background: 'url(./dist/img/logoworld.png) no-repeat center center',
                height:'100%'
            }
        }
    }
    }
</script>
