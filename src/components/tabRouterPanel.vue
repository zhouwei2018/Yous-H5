<style>
    .t-tab__bd{
        display: block;
    }
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