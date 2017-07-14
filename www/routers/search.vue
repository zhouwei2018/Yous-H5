<style scoped lang="less">
  @import "../resources/css/website/list.less";
   .search{
     position: fixed;
     top:0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 9;
     background-color: #c9d12c;
     .pt07 {
       padding-top: 7px;
     }
     #s-header{
       position: relative;
       width: 100%;
       max-width: 640px;
       height: 44px;
       line-height: 44px;
       color: #FFF;
       font-size: 18px;
       background-color: #302F35;
       .close-icon {
         display: block;
         position: absolute;
         right: 15px;
         top: 0;
         width: 20px;
         height: 44px;
         img {
           width: 100%;
           margin-top: -3px;
         }
       }
       .search-text {
         display: block;
         width: 75%;
         height: 31px;
         line-height: 25px;
         margin-left: 20px;
         padding-left: 35px;
         text-align: left;
         /*background: rgba(255, 255, 255, 0.2) url(../../images/m-icon-2.png) 10px 6px no-repeat;*/
         background-size: 20px auto;
         box-sizing: border-box;
         border-radius: 30px;
         input {
           width: 95%;
           margin-top: 2px;
           color: #FFF;
           background: none;
         }
       }
     }
   }
  .more-house{
    position: relative;
    .hot-out{
      border:1px solid transparent;
      display: none;
    }
    .history-out{
      display: none;
    }
    .result-search{
      background-color: #fff;
      position: fixed;
      width: 100%;
      top: .88rem;
      max-height: 7.4rem;
      overflow-y: scroll;
       li{
         margin-left: .360rem;
         padding-right: .22rem;
         height:.88rem;
         line-height: .88rem;
         border-bottom: 0.01rem solid rgba(5, 8, 2, 0.2);
       }
    }
    .more-house-title {
      font-size: .30rem;
      color: #302F35;
      font-weight: 700;
      margin: .30rem !important;
    }
    .search-list {
      padding: 0 .30rem;
      li {
        float: left;
        margin-bottom: .14rem;
        margin-right: 1%;
        padding: .02rem .32rem;
        text-align: center;
        border: 1px solid #D8D8D8;
        border-radius: .60rem;
        box-sizing: border-box;
      }
    }
    .del-btn {
      position: absolute;
      top: 0;
      right:.30rem;
      width: .32rem;
      height: .22rem;
      text-align: center;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .fr{
      float: right;
      em{
        font-size: .42rem;
        font-weight: 900;
        color: red;
      }
    }
      .clearfix{
        clear: both;
      }

  }
</style>
<template>
    <div class="search">
      <div id="s-header">
        <div class="pt07">
          <a href="javascript:void(0);" class="search-text">
            <input type="text" id="keyword" placeholder="请输入写字楼、区域、商圈" maxlength="50" autofocus="autofocus" onchange="window.location.href='/bj/searchlist?keyword='+encodeURI(encodeURI($(this).val()));">
          </a>
        </div>
        <a href="javascript:void(0);" class="close-icon">
            <img src="http://img2.static.uban.com/www/images/xuan-close_1.png" alt="">
        </a>
      </div>
      <div class="more-house">
        <div class="hot-out">
          <h3 class="more-house-title mt15 mb15">热门搜索</h3>
          <ul class="search-list clearfix">

            <li>
              <a href="/bj/searchlist?keyword=%25E6%259C%259B%25E4%25BA%25ACsoho">望京soho</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E4%25B8%2587%25E8%25BE%25BE%25E5%25B9%25BF%25E5%259C%25BA">万达广场</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E7%259B%2588%25E7%25A7%2591%25E4%25B8%25AD%25E5%25BF%2583">盈科中心</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E9%2593%25B6%25E6%25B2%25B3soho">银河soho</a>
            </li>

          </ul>
        </div>
        <div class="pr history-out">
          <h3 class="more-house-title mt10 mb15">历史搜索</h3>
          <a href="javascript:;" class="del-btn"><img src="../resources/images/list/del-icon.png" alt="清除"></a>
          <ul class="search-list clearfix history">

            <li>
              <a href="/bj/searchlist?keyword=%25E6%259C%259B%25E4%25BA%25ACsoho">望京soho</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E7%259B%2588%25E7%25A7%2591%25E4%25B8%25AD%25E5%25BF%2583">盈科中心</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E4%25B8%2587%25E8%25BE%25BE%25E5%25B9%25BF%25E5%259C%25BA">万达广场</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E7%259B%2588%25E7%25A7%2591%25E4%25B8%25AD%25E5%25BF%2583">盈科中心</a>
            </li>

            <li>
              <a href="/bj/searchlist?keyword=%25E9%2593%25B6%25E6%25B2%25B3soho">银河soho</a>
            </li>

          </ul>
        </div>
        <ul class="result-search">
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
          <li class="clearfix">
            <span class="ellipsis">北京万达广场</span>
            <span class="ellipsis fr">
						<em>8</em>元/㎡·天
					</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>

</script>
