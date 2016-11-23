<template></template>
<script>
    export default {
        created: function () {
            var user = localStorage.getItem('userinfo');
            if (user == undefined) {
                this.$router.go({path: '/login'})
            }
        }
    }
</script>