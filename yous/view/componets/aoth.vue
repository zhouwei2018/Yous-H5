<template></template>
<script>
    export default {
        created: function () {
            debugger;
            var user = localStorage.getItem('userinfo');
            if (user == undefined) {
                this.$router.go({path: '/login'})
            }
        }
    }
</script>