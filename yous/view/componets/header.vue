<style>
    header{position:relative;}
    header a{margin-right:4%;}
    select{-webkit-appearance: listbox; -webkit-user-select: auto !important;}
    #citylist{border-width:0;background:url(../../../dist/img/selectarrow.png) no-repeat center right #F7F7F7;padding-right:23px;position:absolute;z-index:20px;font-size:14px;background-position-y:33% ;}
</style>
<template>
    <header class="mui-bar mui-bar-nav" >
        <button href="#" id="citylist" class="mui-btn mui-pull-left">北京</button>
        <h1 id="title" class="mui-title" ></h1>
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