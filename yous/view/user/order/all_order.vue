<style scoped>
	  #sliderSegmentedControl>a
	{text-decoration:none;  line-height:40px;  color:#2C3637; border-right:1px solid #ccc;}
	#sliderSegmentedControl>a.mui-active
	{color:#ff7b18;  }
	 #sliderProgressBar
	{background:#ff7b18;  width:20%;  transition:0.3s;}
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
	    border-top: 1px solid #c8c7cc;
	    border-bottom: 0px solid #c8c7cc;
	}
	.mui-table-view .mui-media-object {
	    line-height: 70px;
	    max-width: 70px;
	    height:70px;
	}
	.ending{border:0;color:orangered}
	.mui-btn-outlined{padding:5px;font-size:12px;}	
	.mui-media-body p{font-size:12px;}
</style>
<template>
    <div id="body" class='mui-content'>
            <div id="slider" class="mui-slider">
                <div class="mui-slider-group">
                  <div class="mui-slider-item mui-control-content" v-if="(gridData.length>0)">
						<ul class="mui-table-view"  v-for="(index,entry) in gridData" v-link="{ path: '/user/order/detail'}">
							<li class="mui-table-view-cell mui-media">
								<a>
									<div>
										<button type="button" class="mui-btn mui-btn-outlined ending">{{entry.orderstateestr}}</button>
										<button type="button" class="mui-btn mui-btn-outlined" style='float:right;'>去评价</button>
										<button type="button" class="mui-btn mui-btn-outlined" style='float:right;margin-right:10px;'>删除订单</button>
									</div>
									<div style='padding:20px 0px;'>
										<img class="mui-media-object mui-pull-left" src='../../../../dist/btn_qq@3x.png'>
										<div class="mui-media-body">
											<p>订单号:<span>{{entry.fdserviceid}}</span></p>
											<p class='mui-ellipsis'>{{entry.fdcontent}}</p>
											<p>订单时间:<span>{{entry.fdcreatetime}}</span></p>
										</div>
									</div>
									<h6>感谢使用幼狮空间维修服务</h6>
								</a>
							</li>
						</ul>
                   </div>
					<div class="mui-slider-item mui-control-content" v-else>
						<empty_data></empty_data>
					</div>
                </div>
            </div>
        </div>
</template>
<script>
	import empty_data from '../order/nothing.vue'
	export default {
		data() {
		return {
			gridData: []
		}
	},
	components : {
		empty_data
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
							"phone":"13426242626",
							"servicetype":"",
							 state:""
						},
						ForeEndType:"2",
						Code:"20000007"
					}
			).then((response)=>{
				var response=JSON.parse(response.data);
			vm.$set('gridData', response.data);
			console.log(response.data);
		})
	}
	}
	}
</script>