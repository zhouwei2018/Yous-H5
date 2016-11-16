var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
Vue.use(VueResource)
Vue.use(VueRouter)
// 引入组件！直接使用es6的语法
var header=require('./view/componets/header.vue');
var nav=require('./view/componets/nav.vue');
var index = require('./view/index.vue')
var login = require('./view/login.vue')
var register=require('./view/register.vue');
var service=require('./view/service/service.vue');
var space=require('./view/space/space.vue');
var decorate=require('./view/decorate/decorate.vue');
var main=require('./view/user/main.vue');//用户中心主页面
var setting=require('./view/user/setting.vue'); //设置
var info=require('./view/user/info.vue'); //我的信息
//开启debug模式
//Vue.config.debug = true;

// 路由器需要一个根组件。
var App = Vue.extend({
    components: {
    }
});

var router = new VueRouter(
    {
        mode:"history",
        hashbang: false,
        //history: true
    }
)
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map(
    //定义路由映射
    {
    '/index':{//访问地址
        name:'index',//定义路由的名字。方便使用。
        component:index,//引用的组件名称，对应上面使用`import`导入的组件
        ////// 定义子路由
        //subRoutes: {
        //    '/header': {
        //        component: header
        //    },
        //    '/nav': {
        //        component: nav
        //    }
        //}
    },
    //登录
    '/login': {
        name:'login',
        component:login
    },
    //注册
    '/register': {
        name:'register',
        component:register
    },
    //服务
    '/service': {
        name:'service',
        component:service
    },
    //空间
    '/space': {
        name:'space',
        component:space
    },
    //装修
    '/decorate': {
        name:'decorate',
        component:decorate
    },
    '/user/main': {
        name:'main',
        component:main
        },
    '/user/setting':{
        name:'setting',
        component:setting
    },
    '/user/info':{
        name:'info',
        component:info
    },

});
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/index"//重定向任意未匹配路径到/index
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');