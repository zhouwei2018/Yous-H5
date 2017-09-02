<style scoped lang="less">
  @import "../resources/css/website/order.less";
  @import "../resources/plugin/swiper/css/swiper.css"; /*swiper 轮播*/
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
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in houses_images">
                <a href="javascript:;">
                  <img :src="item" alt="">
                </a>
              </div>
            </div>
            <div class="banner-page">
              <span class="pageState"><span id="picIndex">1</span>/{{totImgNumber}}</span>
            </div>
          </div>
        </div>


        <div class="build_price_wrap clearfix">
          <span><i v-text="monthly_price"></i>万元/月</span>
          <span v-text="daily_price+'元/㎡/天'"></span>
        </div>

        <div class="build_common_msg_wrap">
          <a href="javascript:;"><span>面积</span><i v-text="room_area+'㎡'"></i></a>
          <a href="javascript:;"><span>工位</span><i v-text="workstation"></i></a>
          <a href="javascript:;"><span>装修</span><i v-text="decoration_level"></i></a>
          <span class="common_ver_line"></span>
          <span class="common_ver_line second"></span>
        </div>

        <div class="weixin_wrap">
          <div class="weixin_head clearfix">
            <span class="fl">楼层：<i v-text="locat_floor+'/'+floors"></i></span>
            <span class="fl">车位：<i v-text="parking">无</i></span>
            <span class="fl">租赁权限：<i>航远房源</i></span>
            <span class="fl">有无租户：<i v-text="rentor"></i></span>
          </div>
          <div class="weixin_bot clearfix">
            <img class="fl weixin_img" src="../resources/images/ys_weixin.jpg" alt="">
            <div class="fl weixin_bot_box">
              <span>销售顾问：<i>张三</i></span>
              <span>联系方式：<i class="con_telephone">010-6726526</i></span>
              <span class="weixin_tips">扫描或者长按识别二维码添加销售顾问为好友</span>
            </div>
          </div>
        </div>

      </div>
      <div class="tel-order clearfix">

        <a id="favoriteA" href="javascript:" class="order--attention clearfix">
          <i id="favorite" class="detail-icon" fl></i>
          <p class="fl">关注</p></a>
        <a id="semwaploupanxiangqingdibu400" href="tel:010-6726526" class="phone--tel-order">
          <img src="../resources/images/icons/phone-icon.png" class="mr05 mt-3">一键拨号</a>
      </div>

    </section>
    <!--context end-->
  </div>
</template>

<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';

  import '../resources/plugin/swiper/js/swiper.min.js';


  export default {
    components: {header1, footer1},
    data () {
      return {
        daily_price:0, //日价格
        monthly_price:0, //月价格
        room_area:0, //面积
        workstation:0, //工位
        floors:0, //总楼层
        locat_floor:0, //所在楼层
        decoration_level:0, //装修程度

        parking:'--', //车位
        rentor:'--', //租户

        houses_images: [], //轮播图
        totImgNumber: '--', //轮播图个数

      }
    },
    methods: {
      //获取某一办公楼详情
      getPerDetail(){
        var _this = this;

        this.$http.post(
          this.$api,
          {
            "parameters": {
              "hourse_id": this.$route.query.house_id
            },
            "foreEndType": 2,
            "code": "30000004"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            if (result.data) {

              if(result.data.houses_images.length){
                _this.houses_images = result.data.houses_images;  //轮播图
                $('.banner-page').show();
              }else{
                _this.houses_images=['http://116.62.71.76:81/default-youshi.png'];
                $('.banner-page').hide();
              };

              //banner swiper
              setTimeout(function () {
                var mySwiper = new Swiper('.swiper-container', {
                  loop: true,
                  paginationClickable: true,  //分页可点
                  centeredSlides: true,
                  autoplay: 3500,
                  onSlideChangeStart: function (swiper) {
                    $("#picIndex").text(swiper.realIndex + 1);
                  }
                });
              }, 500)

              _this.daily_price = result.data.daily_price == null ? '--' : result.data.daily_price;
              _this.monthly_price = result.data.monthly_price == null ? '--' : result.data.monthly_price;
              _this.room_area = result.data.room_area == null ? '--' : result.data.room_area;
              _this.workstation = result.data.room_area == null ? '--' : result.data.workstation;
              _this.floors = result.data.floors == null ? '--' : result.data.floors;
              _this.locat_floor = result.data.locat_floor == null ? '--' : result.data.locat_floor;
              _this.decoration_level = result.data.decoration_level == null ? '--' : result.data.decoration_level;
            }
          }

        }, function (res) {
          this.$Message.error('获取楼盘详情失败');
        });
      },
    },
    mounted(){
      Indicator.open({
        text: '',
        spinnerType: 'fading-circle'
      });
      this.getPerDetail();
    }

  }
</script>
