var Vue = require('vue')
var Docs = require('./index.vue')
var prismcss = require('./lib/prism.css')
var prismjs = require('./lib/prism.js') //语法高亮

new Vue({
	el : 'body',
	components : {
		docs : Docs
	}
})