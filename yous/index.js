var Vue = require('vue')
var App = require('./src/index.vue')
new Vue({
    el : 'body',
    components : {
        app : App
    }
})