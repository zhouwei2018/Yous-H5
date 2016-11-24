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
  .mui-content{margin-top:10px;}
  .mui-table-view .mui-media-object {
      line-height: 70px;
      max-width: 70px;
      height:70px;
  }

  .ending{border:0;color:orangered}
</style>
<template>
  <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
      <h1 class="mui-title">订单中心</h1>
  </header>
   <div class='mui-content'>
	    <tabpanel :list="list"></tabpanel>
   </div>
</template>
<script>

import tabpanel from '../../../../src/components/tabRouterPanel.vue';
export default {
	data() {
		return {
			list : [{
				title : '全部',
				path : "/user/order/all"
			},{
				title : '待接单',
                path : "/user/order/untaking"
			},{
				title : '待服务',
                path : "/user/order/untaking"
			},{
				title : '待确认',
                path :"/user/order/untaking"
			},{
				title : '待评价',
                    path : "/user/order/untaking"
			}

    ]
		}
	},
	components : {
		tabpanel
	}
}
</script>
