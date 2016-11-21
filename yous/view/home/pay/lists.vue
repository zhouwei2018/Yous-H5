
<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
        <h1 class="mui-title">缴费事项</h1>
    </header>
    <nav class="mui-bar mui-bar-tab" style='line-height:51px;text-align:center;background:#106eac;'>
        <a href='tel:123-23123' style='color:#fff;'>
            在线客服:<span class="mui-icon mui-icon-phone"></span>12316615
        </a>

    </nav>
    <div class="mui-content mui-scroll-wrapper shareRoom" style="position: absolute; bottom: 0; width: 100%; padding: 50px 0 51px 0;">
       <div class="mui-scroll">

					<div class="flex-container" v-for="(index,entry) in gridData">

						<a v-link="{ path: '/maintenance/order'}">
							<img src='{{ entry.fdsmallimagepath}}'>
							<h6>{{ entry.fdname}}</h6>
						</a>

					</div>
		   
				</div>

    </div>
</template>
<script>
	export default {
		data() {
		return {
			gridData: []
		}
	},
	ready: function() {
		this.getCustomers()
	},
	methods: {
		getCustomers: function (){
			var vm = this
			vm.$http.post(
					'http://106.14.27.89:8001/api/GetServiceApiResult',
					{
						Parameters:{
							"code":3
						},
						ForeEndType:"2",
						Code:"20000001"
					}
			).then((response)=>{
				var response=JSON.parse(response.data);
			debugger;
			vm.$set('gridData', response.data);
			console.log(response.data);
		})
	}
	}
	}
</script>