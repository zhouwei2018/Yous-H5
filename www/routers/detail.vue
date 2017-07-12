<style scoped lang="less">
  @import "../resources/css/website/detail.less";
</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <!--header end-->
    <!--context-->
    <section id="section" class="pr">
      <div class="detail-container mb60">
        <!--banner-->
        <div id="slideBox" class="slideBox">
          <img src="../resources/images/banner/banner01.jpg" alt="">
        </div>

        <!--office info-->
        <div class="office-info border-tb">
          <div class="banner-text">
            <p class="ellipsis">
              <span class="detail-icon"></span>{{address}}</p>
          </div>
          <div class="house_msg_tit clearfix">
            <div><i></i><span v-text="price+'元/㎡/天'"></span></div>
            <div><i></i><span v-text="total_items+'套房源可租'"></span></div>
            <span class="hou_line"></span>
          </div>
          <div class="house_msg_content clearfix">
            <span>建筑面积：<i v-text="building_area+'㎡'"></i></span>
            <span>总户数：<i v-text="total_households"></i></span>
            <span>楼盘级别：<i v-text="building_level"></i></span>
            <span>空置率：<i v-text="vacancy_rate"></i></span>
            <span>物业公司：<i v-text="property_company"></i></span>
            <span>物业费：<i v-text="property_fee+'元/㎡·月'"></i></span>
          </div>
        </div>

        <!--house info-->
        <div class="mb08 houseInfo">
          <div id="houseScroll">
            <div class="size_wrap">
              <div class="size_box clearfix">

                <div v-for="(item,index) in area_arr" v-if="index == 0"
                     :id="item.code"
                     :class="{active:areaActive == index}"
                     @click="sel_area_list($event)"
                     v-text="item.name">
                </div>

                <template v-else>
                  <div v-if="index == area_arr.length-1"
                       :class="{active:areaActive == index}"
                       class="last"
                       @click="sel_area_list($event)"
                  >>{{item.minnum}}m²
                  </div>
                  <div v-else :class="{active:areaActive == index}"
                       @click="sel_area_list($event)">{{item.minnum}}-{{item.maxnum}}m²
                  </div>
                </template>
                <a></a>
              </div>
            </div>
            <!--搜索结果-->
            <div class="size_content">
              <div class="size_con_sub" v-for="item1 in buildList">
                <router-link :to="{path:'order',query:{house_id:item1.id}}" class="dz-list clearfix">
                  <div class="dz_img_wrap">
                    <img :src="item1.housing_icon" alt="">
                    <div class="img_number">12图</div>
                  </div>
                  <div class="dz_msg fl">
                    <span v-text="item1.monthly_price+'万元/月'"></span>
                    <span><i v-text="item1.housing_area+'㎡'"></i><i v-text="item1.decoration_level"></i></span>
                    <span v-text="item1.workstation+'个工位'"></span>
                  </div>
                </router-link>
              </div>

              <div class="no_result" style="display: none" v-show="res_showFlag">暂无房源信息</div>

            </div>
          </div>


          <router-link :to="{path:'/list'}" id="houseListMore" v-show="more_flag" class="btn-more">查看更多</router-link>
        </div>

        <!--map-->
        <div class="pt20 mb08 border-tb bg-white" id="kuan">
          <h2 class="sort-title tc fb mb20">周边配套</h2>
          <div class="map-box" id="allmap"></div>
          <ul class="text-gray6 clearfix ph15" id="map_item_ul">
            <li class="supporting-item">
              <i class="supporting-icon sup-ct"></i>
              <span class="db">餐厅 <b class="text-black">33</b></span>
            </li>
            <li class="supporting-item">
              <i class="supporting-icon sup-jd"></i>
              <span class="db">酒店 <b class="text-black">25</b></span>
            </li>
            <li class="supporting-item">
              <i class="supporting-icon sup-js"></i>
              <span class="db">健身 <b class="text-black">4</b></span>
            </li>
            <li class="supporting-item">
              <i class="supporting-icon sup-yh"></i>
              <span class="db">银行 <b class="text-black">22</b></span>
            </li>
          </ul>
        </div>
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
  import swiper from 'swiper';

  export default {
    components: {
      header1,
      footer1,

    },
    data () {
      return {
        building_id: '3013',
        address: '',  //楼盘地址
        price: '',  //单价
        buildList: [], //结果列表
        total_items: '',  //可租房源总数
        areaActive: 0,
        area_arr: [], //面积条件数组

        res_showFlag:false, //查询无结果showhide
        more_flag:false, //查看更多

        area: "", //区域
        price_dj: "", // 单价
        price_zj: "", //总价

        total_households: '', //总户数

        vacancy_rate: '',//空置率
        property_company: '',//物业公司
        property_fee: '',//物业费
        opening_date: '',//建成年代
        building_level: '',//楼盘级别
        property_rights: '',//产权性质
        building_area: '',//建筑面积

      }
    },
    methods: {

      //获取筛选条件
      getSortList(){
        var _this = this;
        //调用区域查询接口，更新数据
        this.$http.post(
          this.$api,
          {
            "parameters": {},
            "foreEndType": 2,
            "code": "90000301"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          if (result.success) {
            _this.area_arr = result.data.range_areas; //面积arr

            var all_area = {
              code: "area_all",
              name: "全部"
            };
            _this.area_arr.unshift(all_area);
            $('.size_box').width(_this.area_arr.length*2.3+'rem');


          } else {
            this.$Message.error(result.message);
          }
        }, function (res) {
          this.$Message.error('获取区域失败');
        });
      },

      //获取楼盘详情
      getDetail(){
        var _this = this;
        //this.building_id = this.$route.query.building_id;
        this.$http.post(
          this.$api,
          {
            "parameters": {
              "building_id": this.building_id,
              "area": "",
              "price_dj": "[0,1000000]",
              "price_zj": "",
              "orderby": "",
              "curr_page": "1",
              "items_perpage": "10"
            },
            "foreEndType": 2,
            "code": "30000002"
          }
        ).then(function (res) {

          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            if (result.data) {

              $('title').html(result.data.building_name);


              _this.total_households = result.data.total_households == "" ? '--' : result.data.total_households; //总户数
              _this.district = result.data.district == null ? '区域' : result.data.district; //区域
              _this.business = result.data.business == null ? '商圈' : result.data.business; //商圈

              _this.address = '[' + _this.district + '-' + _this.business + '] ' + result.data.address;
              _this.price = result.data.price == null ? '--' : result.data.price;
              _this.positionData = result.data.longitude + ',' + result.data.latitude;
              _this.building_level = result.data.building_level == null ? '--' : result.data.building_level;


              //物业信息
              _this.property_company = result.data.property_company; //物业公司
              _this.property_fee = result.data.property_fee; //物业费
              _this.opening_date = result.data.opening_date; // 建成年代
              _this.building_level = result.data.building_level; //楼盘级别
              _this.property_rights = result.data.property_rights; //产权性质
              _this.building_area = result.data.building_area;  //建筑面积
            }
          }

        }, function (res) {
          this.$Message.error('获取楼盘详情失败');
        });
      },

      //获取楼盘详情页楼盘列表
      getDetList(){
        var _this = this;

        this.buildList = [];
        Indicator.open({
          text: '',
          spinnerType: 'fading-circle'
        });
        this.$http.post(
          this.$api,
          {
            "parameters": {
              "building_id": this.building_id,
              "area": this.area,
              "price_dj": this.price_dj,
              "price_zj": this.price_zj,
              "orderby": "D",
              "curr_page": "1",
              "items_perpage": "5"
            },
            "foreEndType": 2,
            "code": "30000003"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            _this.buildList = result.data.houses;
            if(_this.buildList.length){
              _this.res_showFlag=false; //不展示
              _this.total_items = result.data.total_items == null ? '--' : result.data.total_items;

              if(_this.buildList.length>3){
                  _this.more_flag=true;
              }

            }else{
                _this.res_showFlag=true;
            }
          }

        }, function (res) {
          this.$Message.error('获取楼盘列表失败');
        });
      },

      //选择面积筛选
      sel_area_list(e){
          $(e.target).addClass('active').siblings().removeClass('active');

          this.area=[];

        var min = 0, max = 0, sort_two_single = 1;
        if ($(e.target).html() == '全部') {
          this.area = "";

        } else if ($(e.target).hasClass('last')) {
          this.area = [];
          min = Math.floor($(e.target).html().match(/\d+/g)[0]);
          max = "";
          this.area.push(min);
          this.area.push(max);
        } else {
          this.area = [];
          var area_fw=$(e.target).html().split('-');
          min = Math.floor(area_fw[0]);
          max = Math.floor(area_fw[1].match(/\d+/g)[0]);
          this.area.push(min);
          this.area.push(max);
        }

        this.getDetList();

      },

    },

    mounted(){
      Indicator.open({
        text: '',
        spinnerType: 'fading-circle'
      });
      this.getSortList(); //获取筛选条件
      this.getDetail(); //获取楼盘详情
      this.getDetList(); //获取楼盘详情页楼盘列表
    }
  }
</script>
