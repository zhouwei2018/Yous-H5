<script>
    export default {
        created: function () {
            debugger;
            var user = localStorage.removeItem('userinfo');
            this.$router.go({path: '/login'})
        }
    }
</script>