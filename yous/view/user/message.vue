<style scoped>
	.mui-media-body{font-size:15px;color:#333}
	.mui-ellipsis,.timeright{color:#aaa;}
</style>
<template>
  <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onclick="window.history.go(-1)"></a>
      <h1 class="mui-title">通知消息</h1>
  </header>
  <div class="mui-content">
      <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-hidden">cared
      <div id="M_Toggle" class="mui-switch mui-active">
        <div class="mui-switch-handle"></div>
      </div>
    </li>
    <li class="mui-table-view-cell mui-media">
      <a href="#">
        <img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
        <div class="mui-media-body">
          幸福<span class='mui-pull-left mui-pull-left-span'></span><span class='mui-pull-right timeright'>2分钟</span>
          <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
        </div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media">
      <a href="#">
        <img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
        <div class="mui-media-body">
          木屋<span class='mui-pull-left mui-pull-left-span'></span><span class='mui-pull-right timeright'>2分钟</span>
          <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
        </div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media">
      <a href="#">
        <img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
        <div class="mui-media-body">
          CBD<span class='mui-pull-left mui-pull-left-span'></span><span class='mui-pull-right timeright'>1小时</span>
          <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
        </div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media">
      <a href="#">
        <img class="mui-media-object mui-pull-left" src="../../../dist/img/urslistleft.png">
        <div class="mui-media-body">
          远眺<span class='mui-pull-left mui-pull-left-span'></span><span class='mui-pull-right timeright'>2小时</span>
          <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
        </div>
      </a>
    </li>
  </ul>
  </div>
</template>
