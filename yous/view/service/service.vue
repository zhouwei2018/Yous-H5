<template>
    <!--头部区域-->
    <header1></header1>
    <!--面板区域-->
    <div class="mui-content">
        <span>服务商模块</span>
    </div>
    <!--导航区域-->
    <nav1></nav1>

</template>
<script>
    import header1 from '.././componets/header.vue'
    import nav1 from '.././componets/nav.vue'
    export default {
        components : {
            header1,
            nav1
        }
    }
</script>
