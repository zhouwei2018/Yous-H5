<template>
    <header1></header1>
    <bmap></bmap>
     <nav1></nav1>
</template>
<script>
       import bmap from '../../../src/components/BMapComponent.vue';
       import header1 from '../componets/header.vue';
       import nav1 from '../componets/nav.vue';
        export default {
        components : {
            header1,
            bmap,
            nav1
        }
    }
</script>