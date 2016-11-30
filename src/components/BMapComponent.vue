<template>
    <!--<div id="allmap" style="width: 100%; height: {{mapHeight}}px"></div>-->
    <!--<div id="allmap":style="{width: '100%', height: mapHeight + 'px'}"></div>-->
    <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
    export default{
        data:function(){
            return{
                mapStyle:{
                    width:'100%',
                    height:'500px'
                }
            }
        },
        props:{
           // 地图在该视图上的高度
            mapHeight:{
                type:Number,
            default:500
            },
           // 经度
            longitude:{
                type:Number,
            default:116.404
            },
          // 纬度
            latitude:{
                type:Number,
            default:39.915
            },
            description:{
                type:String,
                default:'天安门'
            }
        },
        ready:function(){

            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = 'http://api.map.baidu.com/api?v=2.0&ak=FbzOyQ4YujPrZsxiQKoB07aB'

            document.head.appendChild(script)
            var map =new BMap.Map("allmap");
            var point =new BMap.Point(this.longitude,this.latitude);
            var marker =new BMap.Marker(point);
            map.enableScrollWheelZoom();//缩放
            map.addOverlay(marker);
            map.centerAndZoom(point,15);
           // 信息窗的配置信息
            var opts ={
                width :250,
                height:75,
                title :"地址：1233",
            }
            var infoWindow =BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
            marker.addEventListener("click",function(){
                map.openInfoWindow(infoWindow,point);
            });
            map.enableScrollWheelZoom(true);
            map.openInfoWindow(infoWindow,point);//开启信息窗口
        }
    }
</script>
<!--Add"scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>