<style scoped lang="less">
  @import "../resources/css/website/detail.less";
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

              <!--office info-->
              <div class="office-info border-tb">
                  <div class="banner-text">
                      <p class="ellipsis">
                          <span class="detail-icon"></span>[朝阳-望京]望京街与阜安西路交叉路口</p>
                  </div>
                  <div class="house_msg_tit clearfix">
                      <div><i></i><span>7.0元/㎡/天</span></div>
                      <div><i></i><span>100套房源可租</span></div>
                      <span class="hou_line"></span>
                  </div>
                  <div class="house_msg_content clearfix">
                      <span>建筑面积：<i>100㎡</i></span>
                      <span>总户数：<i>100</i></span>
                      <span>楼盘级别：<i>豪华住宅</i></span>
                      <span>空置比例：<i>1:100</i></span>
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
export default {
    components: {header1, footer1},
    data () {
        return {}
      }
    }
</script>
