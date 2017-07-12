<style scoped lang="less">
  @import "../resources/css/website/list.less";
</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <!--header end-->

    <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
      <input type="text" id="keyword" placeholder="请输入关键字搜索" value="" maxlength="50">
    </a>
    <!--context-->
    <section id="section" class="pr">
      <div class="option">
        <div class="filtate-outter">
          <div class="list-filtrate">
            <!--筛选条件标题开始-->
            <section class="filtrate-nav">
              <ul>
                <li data-role="filterItem" data-id="filter-dclz">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis">
                      位置</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-id="filter-price">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis">价格</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-id="filter-area">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis">面积</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-id="filter-char">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis">特色</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
              </ul>
            </section>
            <!--筛选条件标题结束-->

            <!--筛选条件内容start-->
            <div class="filt-container">
              <div class="filt-open js-sigle nbrt" id="filter-dclz" style="display:none">
                <div class="warpper box-flex1 bg-white" data-key="district" style="height:365px;">
                  <ul
                    style="overflow:auto;height: 100%;transform: translate3d(0px, 0px, 0px); transition-timing-function: cubic-bezier(0.1, 0.3, 0.5, 1); transition-duration: 0ms; background-color: #F4F4F4;">
                    <li onclick="showfujin();" style="border:none">
                      <a href="javascript:void(0);" style="color: #302F35;">附近</a>
                    </li>
                    <li class="active" onclick="showDistrict();" style="border:none">
                      <a href="javascript:void(0);" style="color: #302F35;">区域</a>
                    </li>
                    <li onclick="showSubway();" style="border:none">
                      <a href="javascript:void(0);" style="color: #302F35;">地铁</a>
                    </li>
                  </ul>
                </div>
                <div id="warpper_1" class="warpper2 box-flex1 bg-white" data-key="district"
                     style="display:none;height:365px;">
                  <ul
                    style="overflow:auto;height: 100%;transform: translate3d(0px, 0px, 0px); transition-timing-function: cubic-bezier(0.1, 0.3, 0.5, 1); transition-duration: 0ms;"></ul>
                </div>
                <div id="warpper_2" class="warpper2 box-flex1 bg-white"
                     style="display:none;width: 33.333%;height:365px;">
                  <ul id="ul" style="overflow: auto;height: 100%;"></ul>
                </div>
              </div>
              <div class="filt-open js-sigle" id="filter-price" style="display:none">
                <div class="warpper box-flex1 bg-white" style="height: 390px;">
                  <ul
                    style="overflow:hidden;height: 340px;transform: translate3d(0px, 0px, 0px); transition-timing-function: cubic-bezier(0.1, 0.3, 0.5, 1); transition-duration: 0ms; background-color: #F4F4F4;">
                    <li class="active" onclick="showPrice(1);" style="border:none">
                      <a href="javascript:void(0);" style="color: #302F35;">单价</a>
                    </li>
                    <li onclick="showPrice(2);" style="border:none">
                      <a href="javascript:void(0);" style="color: #302F35;">总价</a>
                    </li>

                    <div id="price_filter" class="warpper2 box-flex1 bg-white" data-key="district"
                         style="display:none;height:365px;">
                      <ul
                        style="overflow:auto;height: 100%;transform: translate3d(0px, 0px, 0px); transition-timing-function: cubic-bezier(0.1, 0.3, 0.5, 1); transition-duration: 0ms;"></ul>
                    </div>
                  </ul>
                  <div class="price-bottom">
                    <div class="price-bot price-div">自定义区间
                      <input id="startprice" type="tel" placeholder="元/㎡.天"
                             oninput="if(value.length>2)value=value.slice(0,2)"><i>----</i>
                      <input id="endprice" type="tel" placeholder="元/㎡.天"
                             oninput="if(value.length>2)value=value.slice(0,2)">
                      <button onclick="submitPage('price');">确定</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filt-open js-sigle" id="filter-area">
                <div class="warpper box-flex1  bg-white" data-key="huxing_shi" style="height:419px;">
                  <ul>
                    <li class="active" onclick="submitArea('0');">
                      <a href="javascript:void(0);">不限</a>
                    </li>

                    <li onclick="submitArea('1');">
                      <a href="javascript:void(0);">0-100㎡</a>
                    </li>
                    <li onclick="submitArea('2');">
                      <a href="javascript:void(0);">100-200㎡</a>
                    </li>
                    <li onclick="submitArea('3');">
                      <a href="javascript:void(0);">200-300㎡</a>
                    </li>
                    <li onclick="submitArea('4');">
                      <a href="javascript:void(0);">300-500㎡</a>
                    </li>
                    <li onclick="submitArea('5');">
                      <a href="javascript:void(0);">500-1000㎡</a>
                    </li>
                    <li onclick="submitArea('6');">
                      <a href="javascript:void(0);">1000-2000㎡</a>
                    </li>
                    <li onclick="submitArea('7');">
                      <a href="javascript:void(0);">2000-3000㎡</a>
                    </li>
                    <li onclick="submitArea('8');">
                      <a href="javascript:void(0);">&gt;3000㎡</a>
                    </li>
                  </ul>
                  <div class="price-bottom">
                    <div class="price-bot">自定义区间
                      <input type="tel" id="beginArea" value="" maxlength="5" placeholder="平米"
                             oninput="if(value.length>5)value=value.slice(0,5)"><i>----</i>
                      <input type="tel" id="endArea" value="" maxlength="5" placeholder="平米"
                             oninput="if(value.length>5)value=value.slice(0,5)">
                      <button onclick="submitPage('area');">确定</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filt-open js-sigle" id="filter-char" style="display:none">
                <div class="warpper box-flex1" style="height: 312px;">
                  <ul class="box-flex1 bg-white"
                      style="overflow:auto;height: 100%;transform: translate3d(0px, 0px, 0px); transition-timing-function: cubic-bezier(0.1, 0.3, 0.5, 1); transition-duration: 0ms;">
                    <li class="active" onclick="submitTag('0');">
                      <a href="javascript:void(0);">不限</a>
                    </li>

                    <li onclick="submitTag('7');">
                      <a href="javascript:void(0);">地铁周边</a>
                    </li>
                    <li onclick="submitTag('3');">
                      <a href="javascript:void(0);">互联网</a>
                    </li>
                    <li onclick="submitTag('6');">
                      <a href="javascript:void(0);">金融精英</a>
                    </li>
                    <li onclick="submitTag('15');">
                      <a href="javascript:void(0);">健康空气</a>
                    </li>
                    <li onclick="submitTag('16');">
                      <a href="javascript:void(0);">LEED</a>
                    </li>
                    <li onclick="window.location.href='/bj/zt/xinlou.html'">
                      <a href="javascript:void(0);">新楼</a>
                    </li>
                    <li onclick="submitTag('5');">
                      <a href="javascript:void(0);">地标建筑</a>
                    </li>
                    <li onclick="submitTag('8');">
                      <a href="javascript:void(0);">创意园区</a>
                    </li>
                    <li onclick="submitTag('9');">
                      <a href="javascript:void(0);">名企开发商</a>
                    </li>
                    <li onclick="submitTag('13');">
                      <a href="javascript:void(0);">知名物业</a>
                    </li>
                    <li onclick="submitTag('14');">
                      <a href="javascript:void(0);">5A写字楼</a>
                    </li>
                    <li onclick="submitTag('11');">
                      <a href="javascript:void(0);">纳什空间</a>
                    </li>
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
          infinite-scroll-distance="10">
          <li class="ys_listcon pv15" v-for="item in resultData">
            <router-link :to="{path:'/detail'}" class="supply_box">
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
                      <dl class="supply_tag clearfix">
                        <dd class="tagClass">互联网+</dd>
                        <dd class="tagClass">LEED</dd>
                      </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mask" id="maskEl" style="display:none;"></div>
    </section>
    <!--context end-->
  </div>
</template>

<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  import { Indicator } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    components: {
        header1,
        footer1,
        InfiniteScroll
    },
    data () {
      return {
        loading:false,
        getMore:true,
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
          "items_perpage": 10
        },
        resultData: []
      }
    },
    mounted(){
        Indicator.open({
          text: '',
          spinnerType: 'fading-circle'
        });
        this.init()
    },
    methods:{
        init(){
            this.getData();
        },
       getData(){
            console.log("個體more")
         var paraObj ={
           "parameters": {
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
             "curr_page": this.para.curr_page,
             "items_perpage": 10
           },
           "foreEndType": 2,
           "code": "30000001"
         }, this_ = this;
         let successCb = function(result){
              Indicator.close();
              if(result.data.data.buildings.length>0){
                if(result.data.data.buildings<this_.para.items_perpage){
                    this_.getMore = false;
                }
                this_.resultData=this_.resultData.concat(result.data.data.buildings)
                console.log(this_.resultData)
              }
         };
         let errorCb = function(result){
            Indicator.close({
              text: '',
              spinnerType: 'fading-circle'
            });
         };
         this.gRemoteData(paraObj, successCb ,errorCb);
       },
       gRemoteData(paraobj, successcb, errorcb){
        let instance = axios.create({
          baseURL: 'http://116.62.71.76:8001/'
        });
        instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        instance.post('api/GetServiceApiResult',paraobj)
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
           if(this.getMore){
             this.para.curr_page+=1;
             this.loading = true;
             this.getData();
           }

      }
    }
  }
</script>
