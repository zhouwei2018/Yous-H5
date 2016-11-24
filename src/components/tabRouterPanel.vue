<style scoped>
    .t-tab__bd{
        display: block;margin-top:0px;background:#fff;padding:0px;
    }
    section {
        padding:0;
    }
    .t-tab nav a{
        padding-top:2px;padding-bottom:2px;display:inline-block;
        width:19%;text-align:center;border-right:1px solid #ddd;font-size:14px;color:#333;
        border-bottom:2px solid transparent;background:#fff;
    }
    .t-tab nav a:last-child{border:0;}
    .t-tab nav a.active{border-bottom:2px solid orangered}

    .v-link-active{color: red}
</style>
<template>
    <section class="t-tab">
        <nav>
            <a v-for="its in list" v-link="{ path: its.path}" v-text="its.title" ></a>
        </nav>
        <div class="t-tab__bd">
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
        return {
            index : 0
        }
    },
    props : {
        list : {
            type : Array
        }
    }
    }
</script>