<style scoped lang="less">
  @import "../resources/css/website/list.less";
 .page-infinite-loading {
    text-align: center;
    background-color:#FFF;
   &>span{
     display: inline-block;
   }
  }

</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
     <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
       <input type="text" id="keyword" placeholder="请输入关键字搜索"  v-model="para.search_keywork" maxlength="50" @focus="changeRou">
    </a>
    <router-view></router-view>
    <section class="section" :class="{'in-filter':this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'||this.currentFilterTab=='features'}">
      <div class="option">
        <div class="filtate-outter">
          <div class="list-filtrate">

            <!--筛选条件标题开始-->
            <section class="filtrate-nav">
              <ul @click="chooseFilter($event)">
                <li data-role="filterItem" data-type="district" :class="{'active-filter':this.currentFilterTab=='district'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis district-h">区域</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="price" :class="{'active-filter':this.currentFilterTab=='price'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis price-h">价格</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="area" :class="{'active-filter':this.currentFilterTab=='area'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis area-h">面积</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="features" :class="{'active-filter':this.currentFilterTab=='features'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis feature-h">特色</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
              </ul>
            </section>
            <!--筛选条件标题结束-->

            <!--筛选条件内容start-->
            <div class="filt-container">
              <div class="filt-open" id="filter-district" :class="{show:this.currentFilterTab=='district'}">
                <div class="warpper box-flex1">
                  <ul class="box-flex1 bg-white cut-height">
                    <li v-for="item in districtArray" data-type="district" @click="searchChoose(item.id, '', item.name, $event)"><a href="javascript:;">{{item.name}}</a></li>
                  </ul>
                </div>
              </div>
              <div class="filt-open" id="filter-price" :class="{show:this.currentFilterTab=='price'}">
                <div class="warpper box-flex1 grey-bg price-height">
                  <ul>
                    <li class="price-sub"  :class="{act:this.priceFilterTab=='p'}" @click="priceFilterTab='p'">
                      <a href="javascript:void(0);" style="color: #302F35;">单价</a>
                    </li>
                    <li class="price-sub" :class="{act:this.priceFilterTab=='t'}" @click="priceFilterTab='t'">
                      <a href="javascript:void(0);" style="color: #302F35;">总价</a>
                    </li>

                    <div id="price_filter" class="warpper2 box-flex1 bg-white">
                      <ul class="price-ul cut-height" :class="{show:this.priceFilterTab=='p'}">
                        <li v-for="item in pricePArray" data-type="priceP" @click="searchChoose(item.code,item.minnum+'-'+item.maxnum, item.minnum+'-'+item.maxnum+'元', $event)"><a href="javascript:;">{{item.minnum}}-{{item.maxnum}}元</a></li>
                      </ul>
                      <ul class="price-ul cut-height" :class="{show:this.priceFilterTab=='t'}">
                        <li v-for="item in priceTArray" data-type="priceT" @click="searchChoose(item.code,item.minnum+'-'+item.maxnum, item.minnum+'-'+item.maxnum+'万元', $event)"><a href="javascript:;">{{item.minnum}}-{{item.maxnum}}万元</a></li>
                      </ul>
                    </div>
                  </ul>
                  <div class="price-bottom">
                    <div class="price-bot price-div">自定义区间
                      <input id="startprice" type="tel"  :placeholder="unitword"  v-model="price1"><i>----</i>
                      <input id="endprice" type="tel"  :placeholder="unitword"  v-model="price2">
                      <button @click="selfInputPrice">确定</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filt-open" id="filter-area" :class="{show:this.currentFilterTab=='area'}">
                <div class="warpper box-flex1  bg-white" data-key="huxing_shi">
                  <ul class="">
                    <li v-for="item in sizeArray" data-type="size" @click="searchChoose(item.code, item.minnum+'-'+item.maxnum,  item.minnum+'-'+item.maxnum+'m²', $event)"><a href="javascript:;">{{item.minnum}}-{{item.maxnum}}m²</a></li>
                  </ul>
                  <div class="price-bottom">
                    <div class="price-bot">自定义区间
                      <input type="tel" id="beginArea" value="" maxlength="5"  placeholder="平米" v-model="size1"><i>----</i>
                      <input type="tel" id="endArea" value="" maxlength="5" placeholder="平米"  v-model="size2">
                      <button  @click="selfInputSize">确定</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filt-open" id="filter-features" :class="{show:this.currentFilterTab=='features'}">
                <div class="warpper box-flex1">
                  <ul class="box-flex1 bg-white cut-height">
                    <li v-for="item in featureArray" data-type="feature" @click="searchChoose(item.code,'',item.name, $event)"><a href="javascript:;">{{item.name}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--筛选条件内容end-->

          </div>
        </div>
        <!--筛选结果start-->
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="20"
          infinite-scroll-immediate-check="checked">
          <li class="ys_listcon pv15" v-for="item in resultData">
            <router-link :to="{path:'/detail',query:{building_id:item.id}}" class="supply_box">
              <div class="supply_price">
                <span>{{item.price}}</span> 元/㎡·天
                <i style="display: block">{{item.max_areas}}㎡</i>
              </div>
              <dl class="supply">
                <dt>
                  <img :src="item.img_path" alt="大楼图片">
                  <span class="icon720"><img src="../resources/images/icons/y720-icon.png"></span>
                </dt>
                <dd class="supply_msg_box">
                  <dl>
                    <dd class="supply_house">{{item.building_name}}</dd>
                    <dd class="supply_color ellipsis">{{item.address}}</dd>
                    <dd class="supply_color ellipsis">{{item.lease_nums}}套房源可租</dd>
                    <dd>
                      <dl class="supply_tag clearfix" v-if="item.label !=null">
                         <dd v-for="item in item.label.split(',')" class="tagClass">{{item}}</dd>
                      </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
        <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
      <div class="mask" id="maskEl" @click="closeFilter" :class="{show:this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'||this.currentFilterTab=='features'}">
      </div>
    </section>
    <!--context end-->
  </div>
</template>
<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  import { Indicator } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import { Actionsheet } from 'mint-ui';
  import { Search } from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    components: {
        header1,
        footer1,
        InfiniteScroll,
        Toast,
        Actionsheet,
        Search
    },

    data () {
      return {
        districtArray:[],
        pricePArray:[],
        priceTArray:[],
        sizeArray:[],
        featureArray:[],

        currentFilterTab:'nth',
        priceFilterTab:'p',
        loading:false,
        noMore:false,
        checked:false,
        price1:'',
        price2:'',
        size1:'',
        size2:'',
        para: {
          "search_keywork": "",
          "district": "",
          "business": "",
          "line_id": "",
          "station_id": "",
          "area": "",
          "price_dj": "",
          "price_zj": "",
          "label": "",
          "orderby": "D",
          "curr_page": 1,
          "items_perpage": 10,
        },
        resultData: []
      }
    },
    mounted(){
        this.init()
    },
    created:function () {
        var kw = this.getQueryString('keyword');
        if(kw){
            this.para.search_keywork=kw;
        }
    },
    computed:{
      unitword(){
          if(this.priceFilterTab==='p'){
               return "元/天" ;
          }else{
            return "万元/月" ;
          }
      }
    },
    methods:{
       init(){
         axios.defaults.baseURL = 'http://116.62.71.76:8001';
         axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
         this.resetGetData();
         this.getFilters();
        },
      getQueryString: function (key) {
        var t = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i"),
          n = window.location.search.substr(1).match(t);
        return null != n ? decodeURI(n[2]) : "";
      },
      closeFilter:function(){
        this.currentFilterTab='nth';
      },
      changeRou:function(){
        this.$router.push({path:'/list/search'})
      },
       searchChoose:function(code, val, value, e){
         switch ($(e.target).closest('li').attr('data-type')){
           case 'district':
             $('h2.district-h').html(value);
             this.para.district_id = code;
             break;
           case 'size':
             $('h2.area-h').html(value);
             this.para.area = [parseInt(val.split('-')[0]),parseInt(val.split('-')[1])];
             break;
           case 'priceP':
             $('h2.price-h').html(value);
             this.para.price_dj = [parseInt(val.split('-')[0]),parseInt(val.split('-')[1])];
             break;
           case 'priceT':
             $('h2.price-h').html(value);
             this.para.price_zj = [parseInt(val.split('-')[0]),parseInt(val.split('-')[1])];
             break;
           case 'feature':
             $('h2.feature-h').html(value);
             this.para.label=code;
             break;
           default:
         }
         this.currentFilterTab='nth';
         Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
         });
         this.resultData = [];
         this.getData();
       },
       getFilters:function(){
         var paraObj = {
           "parameters":{},
           "foreEndType":2,
           "code":"90000301"
         }, this_=this;
         axios.post('/api/GetServiceApiResult', paraObj)
           .then(function (response) {
             this_.districtArray = response.data.data.districts;
             this_.pricePArray = response.data.data.range_unit_prices;
             this_.priceTArray = response.data.data.range_total_prices;
             this_.sizeArray = response.data.data.range_areas;
             this_.featureArray = response.data.data.labels;
           }).catch(function (error) {

         });
       },
       chooseFilter:function(e){
             var e= e || window.event;
             this.currentFilterTab = $(e.target).closest('li').attr('data-type')
      },
       resetGetData:function () {
           console.log(this.para.keyword)
         var paraObj ={
           "parameters": {
             "search_keywork": this.para.search_keywork,
             "district": this.para.district,
             "business": this.para.business,
             "line_id": this.para.line_id,
             "station_id":this.para.station_id,
             "area":this.para.area,
             "price_dj": this.para.price_dj,
             "price_zj": this.para.price_zj,
             "label": this.para.label,
             "orderby": "D",
             "curr_page": this.para.curr_page,
             "items_perpage": 10
           },
           "foreEndType": 2,
           "code": "30000001"
         }, this_ = this;
         let successCb = function(result){
           Indicator.close();
           if(result.data.data.buildings.length<this_.para.items_perpage){
             this_.noMore = true;
           }
           this_.resultData=this_.resultData.concat(result.data.data.buildings)
           if(this_.resultData.length==0){
             Toast({
               message: '抱歉,暂无符合条件的房源!',
               position: 'middle',
               duration: 3000
             });
           }
         };
         let errorCb = function(result){
           Indicator.close();
           Toast({
             message: '抱歉,暂无符合条件的房源!',
             position: 'middle',
             duration: 3000
           });
         };
         Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
         });
         this.resultData = [];
         this.gRemoteData(paraObj, successCb ,errorCb);
       },
       selfInputPrice:function(){
           if(parseInt(this.price1)<parseInt(this.price2)){
              if(this.priceFilterTab==='P'){
                  this.para.price_dj =[parseInt(this.price1),parseInt(this.price2)]
              }else{
                  this.para.price_zj =[parseInt(this.price1),parseInt(this.price2)]
              }
               this.getData();
           }else{
             Toast({
               message: '请输入合理价格',
               position: 'middle',
               duration: 2000
             });
           }
      },
       selfInputSize:function() {
         if (parseInt(this.size1) < parseInt(this.size2)) {
           this.para.area = [parseInt(this.size1), parseInt(this.size2)];
           this.getData();
         } else {
           Toast({
             message: '请输入合理面积数字',
             position: 'middle',
             duration: 2000
           });
         }
       },
       getData(){
         var paraObj ={
           "parameters": {
             "search_keywork": this.para.search_keywork,
             "district": this.para.district,
             "business": this.para.business,
             "line_id": this.para.line_id,
             "station_id":this.para.station_id,
             "area":this.para.area,
             "price_dj": this.para.price_dj,
             "price_zj": this.para.price_zj,
             "label": this.para.label,
             "orderby": "D",
             "curr_page": this.para.curr_page,
             "items_perpage": 10
           },
           "foreEndType": 2,
           "code": "30000001"
         }, this_ = this;
         this.currentFilterTab='nth';
         let successCb = function(result){
           Indicator.close();
           this_.loading = false;
           this_.resultData=this_.resultData.concat(result.data.data.buildings);
           if(result.data.data.buildings<this_.para.items_perpage){
             this_.noMore = true;
           }
           if(this_.resultData.length==0){
             Toast({
               message: '抱歉,暂无符合条件的房源!',
               position: 'middle',
               duration: 3000
             });
           }else if(this_.resultData.length>0&&result.data.data.buildings.length==0){
             Toast({
               message: '已经获得当前条件的所有房源!',
               position: 'middle',
               duration: 3000
             });
           }
         };
         let errorCb = function(result){
           Indicator.close();
           Toast({
             message: '抱歉,暂无符合条件的房源!',
             position: 'middle',
             duration: 3000
           });
         };
         this.gRemoteData(paraObj, successCb ,errorCb);
       },
       gRemoteData(paraobj, successcb, errorcb){
         axios.post('api/GetServiceApiResult',paraobj)
          .then(function (response) {
            if(typeof successcb==="function"){
              successcb(response)
            }
          }).catch(function (error) {
          if(typeof errorcb==="function"){
            errorcb(error)
          }
        });
      },
      loadMore(){
           if(!this.loading&&!this.noMore){
                this.loading = true;
                this.para.curr_page+=1;
                this.getData();
           }
      }
    }
  }
</script>
