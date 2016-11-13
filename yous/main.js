var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter);
// 引入组件！直接使用es6的语法
var index = require('./src/index.vue')
var login = require('./src/login.vue')
var register=require('./src/register.vue')

//开启debug模式
Vue.config.debug = true;

// 路由器需要一个根组件。
var App = Vue.extend({
    components: {
    }
});
var router = new VueRouter()
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map(
    //定义路由映射
    {
    '/index':{//访问地址
        name:'index',//定义路由的名字。方便使用。
        component:index,//引用的组件名称，对应上面使用`import`导入的组件
    },
    '/login': {
        name:'login',
        component:login
    },
    '/register': {
        name:'register',
        component:register
    },
});
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/index"//重定向任意未匹配路径到/index
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');