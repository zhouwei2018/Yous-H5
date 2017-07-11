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
            <span>楼盘级别：<i v-text=""></i></span>
            <span>空置率：<i v-text=""></i></span>
            <span>物业公司：<i>CBD</i></span>
            <span>物业费：<i></i>1.8</span>
          </div>
        </div>

        <!--house info-->
        <div class="mb08 houseInfo">
          <div id="houseScroll">
            <div class="size_wrap">
              <div class="size_box clearfix">
                <div>全部</div>
                <div>0-100㎡</div>
                <div>100-200㎡</div>
                <div>200-300㎡</div>
                <div>300-500㎡</div>
                <div>500-1000㎡</div>
                <div>1000-2000㎡</div>
              </div>
              <div class="size_content">
                <div class="size_con_sub">
                  <a href="order.html" class="dz-list clearfix">
                    <div class="dz_img_wrap">
                      <img src="../resources/images/house/house01.jpg" alt="">
                      <div class="img_number">12图</div>
                    </div>
                    <div class="dz_msg fl">
                      <span>24049元/月</span>
                      <span><i>105㎡</i><i>毛坯</i><i>12层</i></span>
                      <span>13-20个工位</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <a href="javascript:;" id="houseListMore" class="btn-more">查看更多</a>
        </div>

        <!--detail-list-->
        <div class="detail-list pt20 mb08 border-tb bg-white">
          <h2 class="sort-title tc fb mb10">楼盘参数</h2>
          <ul class="clearfix pv15">
            <li><span>得房率</span>65％</li>
            <li><span>业主类型</span>

              大业主+小业主
            </li>
            <li><span>层数</span>47层</li>
            <li><span>物业等级</span>甲级</li>
            <li><span>净层高</span>
              2.7米
            </li>
            <li><span>物业费</span>
              24元/㎡·月
            </li>
            <li><span>物业类型</span>办公楼</li>
            <li><span>开发商</span>SOHO中国</li>
            <li><span>均价</span>6.5元/m²·天</li>
            <li><span>停车位数量</span>1800</li>

            <li><span>停车费</span>1500元/月</li>
            <li><span>竣工时间</span>2013-12-01</li>
            <li><span>占地面积</span>暂无数据</li>
            <li><span>标准层面积</span>2500m²</li>
            <li><span>地上层数</span>47</li>
            <li><span>地下层数</span>暂无数据</li>

            <li><span>容积率</span>8.1</li>
            <li><span>绿化率</span>30%</li>
          </ul>
          <a href="/introduce/184" class="btn-more">查看楼盘简介</a>
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
  import swiper from 'swiper';

  export default {
    components: {
      header1,
      footer1
    },
    data () {
      return {
        building_id: '3013',
        address: '',  //楼盘地址
        price: '',  //单价
        buildList:[], //结果列表
        total_items: '',  //可租房源总数

        area: "", //区域
        price_dj: "", // 单价
        price_zj: "", //总价

        building_area:'', //建筑面积
        total_households:'', //总户数

      }
    },
    methods: {

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
          if (result.success) {
            if (result.data) {

              $('title').html(result.data.building_name);


              _this.total_households = result.data.total_households == "" ? '--' : result.data.total_households; //总户数

              _this.district = result.data.district == null ? '区域' : result.data.district; //区域
              _this.business = result.data.business == null ? '商圈' : result.data.business; //商圈

              _this.address = '[' + _this.district + '-' + _this.business + '] ' + result.data.address;
              _this.price = result.data.price == null ? '--' : result.data.price;
              _this.positionData = result.data.longitude + ',' + result.data.latitude;


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

          if (result.success) {
            _this.buildList = result.data.houses;
            _this.total_items=result.data.total_items  == null ? '--' : result.data.total_items;

          }

        }, function (res) {
          this.$Message.error('获取楼盘列表失败');
        });
      },
    },

    mounted(){
      this.getDetail();
      this.getDetList();
    }
  }
</script>
