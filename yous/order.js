var Vue = require('vue')
var Order = require('./src/order.vue')
new Vue({
    el : 'body',
    components : {
        order : Order
    }
})