<style scoped lang="less">
  @import "../resources/css/website/order.less";
</style>
<template>
  <div>
      <!--header-->
      <section  id="header">
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

              <div class="build_price_wrap clearfix">
                  <span><i>24950</i>元/月</span>
                  <span>7.0元/㎡/天</span>
              </div>

              <div class="build_common_msg_wrap">
                  <a href="javascript:;"><span>面积</span><i>165㎡</i></a>
                  <a href="javascript:;"><span>工位</span><i>13-20</i></a>
                  <a href="javascript:;"><span>装修</span><i>毛坯</i></a>
                  <span class="common_ver_line"></span>
                  <span class="common_ver_line second"></span>
              </div>

              <div class="weixin_wrap">
                  <div class="weixin_head clearfix">
                      <span class="fl">楼层：<i>12/29</i></span>
                      <span class="fl">车位：<i>无</i></span>
                      <span class="fl">租赁权限：<i>航远房源</i></span>
                      <span class="fl">有无租户：<i>有</i></span>
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
              <a id="semwaploupanxiangqingdibu400" href="javascript:;" class="phone--tel-order">
                  <img src="../resources/images/icons/phone-icon.png" class="mr05 mt-3">一键拨号</a>
          </div>

      </section>
        <!--context end-->
  </div>
</template>

<script>
import header1 from '../components/header.vue';
import footer1 from '../components/footer.vue';
export default {
    components: {header1, footer1},
    data () {
        return {}
      }
    }
</script>
