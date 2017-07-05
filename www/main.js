/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);

Vue.prototype.$api = "http://116.62.71.76:8001/api/GetServiceApiResult" //api地址
Vue.prototype.$resouceUrl = "http://localhost:8081/"  //资源文件地址
Vue.config.debug = true;// 开启debug模式

var router = new VueRouter({
    mode: "history",
    hashbang: false,
    routes: [
        {
            path: '/index',
            component: require('./routers/list.vue')
        },
        {
            path: '*',
            redirect: '/index'
        }

    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
