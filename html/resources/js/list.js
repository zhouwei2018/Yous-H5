// JavaScript Document
$(function(){
    var subwaylineid = '0';
    var subwaystopid = '0';
    var districtId = '0';
    var businessCircleId = '0';
    var tagstr = '0';
    var imagesPath = "http://img1.static.uban.com";
    var type = "1";
    var typeForBackShow = "1";
    var priceFlag = "0";
    var startprice = '0';
    var endprice = '0';


    if(subwaylineid>0){
        showSubway();
        if(subwaystopid>0){
            showSubwaystop(subwaylineid, null);
        }
    }else if(districtId>0){
        showDistrict();
        if(businessCircleId>0){
            showBusiness(districtId, null);
        }
    }
    var $global;
    var $global_cur;
    $(".filtrate-nav li").click(function(){
        $('body').addClass("body-filt-open");
        $('body').css("overflow","hidden");
        $("#maskEl").css("display","block");
        $('.filtate-outter').css('z-index',5);


        var $id= $(this).attr("data-id");
        var $obj=$("#"+$id);
        $global=$obj;
        if($obj.css("display")=="none"){
            $global_cur=$(this);
            $(this).toggleClass('active').siblings('li').removeClass('active');
            $obj.css("display","block").siblings('div').css("display","none");

            //判断#warpper_1模块的显示状态，如果均隐藏，执行active li元素的click事件
            if($('#warpper_1').is(':hidden') && $id=='filter-dclz'){//判断当前点击的是否是“区域”
                var number = $("#dclzFlag").val();
                if(number == 2){
                    showfujin();
                }else{
                    showDistrict();
                }
//            	$obj.find('ul').find('li').find('.active').click();
            }
            //判断当前点击的是否是“价格筛选”
            if($('#price_filter').is(':hidden') && $id=='filter-price'){
                showPrice(type);
                $(".price-div input").each(function(i,o){
                    if(Number(type) == 2){
                        togglePricePlaceholder(o,2);
                    }else {
                        togglePricePlaceholder(o,1);
                    }
                })
            }

        }else{
            $('body').css("overflow","");
            $global_cur=$(this);
            $(this).removeClass('active');
            $obj.css("display","none");

            $('body').removeClass("body-filt-open");
            $("#maskEl").css("display","none");
            $("#type").val(typeForBackShow);
        }
    });

    $('.warpper li').click(function(){
        var $li = $(this);
        $li.addClass('active').siblings('li').removeClass('active');

        //判断当前显示的是价格筛选区域
        if(!$("#filter-price").is(":hidden")){
            $(".price-div input").each(function(i,o){
                if($li.text().replace(/(^\s*)|(\s*$)/g,"") == "单价"){
                    togglePricePlaceholder(o,1);
                }else {
                    togglePricePlaceholder(o,2);
                }
            })
        }
    });

    function togglePricePlaceholder(o,type){
        if(Number(type) == 1){
            $(o).attr("placeholder","元/㎡.天");
            if(priceFlag ==0 && (startprice > 0 || endprice >0) && Number(typeForBackShow) == 1){
                $(".price-div input").eq(0).val(startprice == 0?'':startprice);
                $(".price-div input").eq(1).val(endprice == 0?'':endprice);
            }else {
                $(".price-div input").val("");
            }
            $("#type").val(1);
        }else {
            if(priceFlag ==0 && (startprice > 0 || endprice >0) && Number(typeForBackShow) == 2){
                $(".price-div input").eq(0).val(startprice / 10000 == 0?'':startprice / 10000);
                $(".price-div input").eq(1).val(endprice / 10000 == 0 ?'':endprice / 10000);
            }else {
                $(".price-div input").val("");
            }
            $(o).attr("placeholder","万元/月");
            $("#type").val(2);
        }
    }

    $("#maskEl").click(function(){
        if($global.css("display")=="none"){
            $global_cur.toggleClass('active').siblings('li').removeClass('active');
            $global.css("display","block").siblings('div').css("display","none");

        }else{
            $global_cur.removeClass('active');
            $global.css("display","none");

            $('body').removeClass("body-filt-open");
            $("#maskEl").css("display","none");
            $('body').css("overflow","");
        }
    });
});


function submitPage(flag) {
    if(flag == 'price'){
        var statrPriceTmp = $("#startprice").val();
        var endPriceTmp = $("#endprice").val();
        if($("#type").val() == 2){
            statrPriceTmp = statrPriceTmp * 10000;
            endPriceTmp = endPriceTmp * 10000;
        }
        $("#beginPrice_").val(statrPriceTmp);
        $("#endPrice_").val(endPriceTmp);
        $("#priceFlag").val(0);
    }else if(flag == 'area'){
        $("#beginArea_").val($("#beginArea").val());
        $("#endArea_").val($("#endArea").val());
        $("#areaFlag").val(0);
    }
    window.location.href=getUrl();
}

function getUrl(flag){
    var url = '/'+city + '/searchlist';

    var subwaylineid = $('#subwaylineid').val();
    var subwaystopid = $('#subwaystopid').val();
    var districtId = $('#districtId').val();
    var businessCircleId = $('#businessCircleId').val();
    var tagstr = $('#tagstr').val();
    var type = $('#type').val();
    var priceFlag = $('#priceFlag').val();
    var areaFlag = $('#areaFlag').val();
    var keyword = encodeURI(encodeURI($('#keyword').val()));
    //价格类型
    var startprice = $('#beginPrice_').val();
    var endprice  = $('#endPrice_').val();
    var beginArea = $('#beginArea_').val();
    var endArea = $('#endArea_').val();
    if(subwaylineid>0){
        url += '-l'+subwaylineid+'-z'+subwaystopid;
    }else if(districtId>0){
        url += '-d'+districtId+'-c'+businessCircleId;
    }
    url+='/';
    if(tagstr>0||type>0||priceFlag>0||areaFlag>0){
        var tmp = '';
        if(areaFlag>0){
            tmp += '-a'+areaFlag;
        }
        if(type>0){
            tmp += '-t'+type;
        }
        if(priceFlag>0){
            tmp += '-p'+priceFlag;
        }
        if(tagstr>0){
            tmp += '-g'+tagstr;
        }

        url += tmp.substring(1) +'/';
    }

    url+='?keyword=';

    if(keyword){
        url+=keyword;
    }
    if(priceFlag == 0){
        if(startprice){
            url+='&startprice=' + startprice;
        }
        if(endprice){
            url+='&endprice=' + endprice;
        }
    }
    if(areaFlag == 0){
        if(beginArea){
            url+='&beginArea=' + beginArea;
        }
        if(endArea){
            url+='&endArea=' + endArea;
        }
    }

    return url;
}

function submitTag(tagstr) {
    $('#tagstr').val(tagstr);
    $('#type').val(0);
    submitPage();
}

function submitFlag(priceFlag) {
    $('#priceFlag').val(priceFlag);
    //不限将价格类型置为空
    if(Number(priceFlag) == 0){
        $("#type").val(0);
    }
    $('#beginPrice_').val(null);
    $('#endPrice_').val(null);

    if($('#beginArea_').val() == 0){
        $('#beginArea_').val(null)
    }
    if( $('#endArea_').val() == 0 ){
        $('#endArea_').val(null);
    }
    submitPage();
}

function submitArea(areaFlag) {
    $('#beginArea_').val(null);
    $('#endArea_').val(null);

    if($('#beginPrice_').val() == 0){
        $('#beginPrice_').val(null);
    }
    if($('#endPrice_').val() == 0){
        $('#endPrice_').val(null);
    }

    $('#areaFlag').val(areaFlag);
    submitPage();
}

function submitDistrict(districtId, circleId) {
    $('#subwaylineid').val(0);
    $('#subwaystopid').val(0);
    $('#districtId').val(districtId);
    $('#businessCircleId').val(circleId);
    submitPage();
}

function submitSubway(subwaylineid, subwaystopid) {
    $('#districtId').val(0);
    $('#businessCircleId').val(0);
    $('#subwaylineid').val(subwaylineid);
    $('#subwaystopid').val(subwaystopid);
    submitPage();
}

function redirectDetail(id){
    var priceFlag = $('#priceFlag').val();
    var areaFlag = $('#areaFlag').val();

    var startprice = $('#startprice').val();
    var endprice = $('#endprice').val();
    var beginArea = $('#beginArea').val();
    var endArea = $('#endArea').val();

    if(priceFlag>0 || areaFlag>0){
        window.location.href='/'+city+'/detail-'+id+'/a'+areaFlag+'-p'+priceFlag+'.html';
    }else{
        window.location.href='/'+city+'/detail-'+id+'.html?startprice='+startprice+'&endprice='+endprice
            + '&beginArea='+beginArea+'&endArea='+endArea;
    }

}

function showfujin(){
    var km = $("#km").val();
    $('#warpper_1').show();
    var ul = $('#warpper_1').children('ul');
    $("#warpper_2").css("display","none");
    $("#warpper_1").css("width","50%");
    ul.empty();
    var executed = false;
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            executed = true;
            lon = r.point.lng;
            lat = r.point.lat;
            var point = new BMap.Point(lon, lat);//创建点坐标
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs){
                var cityP = 0;
                var addComp = rs.addressComponents;
                if('上海市'==addComp.province
                    || '浙江省'==addComp.province
                    || '江苏省'==addComp.province
                    || '安徽省'==addComp.province){
                    cityP = 13;
                } else {
                    cityP = 12;
                }
                var html = '';
                if(km == 1){
                    html += '<li class="active"><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+1+'/'+cityP+'">1km</a></li>';
                }else{
                    html += '<li><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+1+'/'+cityP+'">1km</a></li>';
                }
                if(km == 2){
                    html += '<li class="active"><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+2+'/'+cityP+'">2km</a></li>';
                }else{
                    html += '<li><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+2+'/'+cityP+'">2km</a></li>';
                }
                if(km == 3){
                    html += '<li class="active"><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+3+'/'+cityP+'">3km</a></li>';
                }else{
                    html += '<li><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+3+'/'+cityP+'">3km</a></li>';
                }
                if(km == 5){
                    html += '<li class="active"><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+5+'/'+cityP+'">5km</a></li>';
                }else{
                    html += '<li><a href="/'+city+'/fujin/'+lon+'/'+lat+'/'+5+'/'+cityP+'">5km</a></li>';
                }
                ul.append(html);
            });
        }
        else {
        }
    });

}

function showDistrict(){
    // $.ajax({
    //     async: false,
    //     url: '/'+city+'/showDistrictList',
    //     type: 'POST',
    //     success: function (districtList) {
    //         $('#warpper_1').show();
    //         var ul = $('#warpper_1').children('ul');
    //         $("#warpper_2").css("display","none");
    //         $("#warpper_1").css("width","50%");
    //         ul.empty();
    //         var html = '<li onclick="submitDistrict(0, 0);"><a href="javascript:void(0);">不限</a></li>';
    //         if(districtId==0){
    //             html = '<li class="active" onclick="submitSubway(0, 0);"><a href="javascript:void(0);">不限</a></li>';
    //         }
    //         for(var i=0;i<districtList.length;i++){
    //             if(districtId == districtList[i].districtId){
    //                 html+='<li onclick="showBusiness('+districtList[i].districtId+', this)" class="active" dblclick="submitDistrict('+districtList[i].districtId+', 0);"><a href="javascript:void(0);">'+districtList[i].districtName+'</a></li>';
    //             }else{
    //                 html+='<li onclick="showBusiness('+districtList[i].districtId+', this)" dblclick="submitDistrict('+districtList[i].districtId+', 0);"><a href="javascript:void(0);">'+districtList[i].districtName+'</a></li>';
    //             }
    //         }
    //         ul.append(html);
    //     }
    // });

}

function showSubway(){
    $.ajax({
        async: false,
        url: '/'+city+'/showSubwayline',
        type: 'POST',
        success: function (subwayLineList) {
            $('#warpper_1').show();
            var ul = $('#warpper_1').children('ul');
            $("#warpper_2").css("display","none");
            $("#warpper_1").css("width","50%");
            ul.empty();
            var html = '<li onclick="activeCss(this);submitSubway(0, 0);"><a href="javascript:void(0);">不限</a></li>';
            if(subwaylineid==0){
                html = '<li class="active" onclick="activeCss(this);submitSubway(0, 0);"><a href="javascript:void(0);">不限</a></li>';
            }
            for(var i=0;i<subwayLineList.length;i++){
                if(subwaylineid == subwayLineList[i].subwayLineId){
                    html+='<li onclick="showSubwaystop('+subwayLineList[i].subwayLineId+', this)" class="active" dblclick="submitSubway('+subwayLineList[i].subwayLineId+', 0);"><a href="javascript:void(0);">'+subwayLineList[i].shortName+'</a></li>';
                }else{
                    html+='<li onclick="showSubwaystop('+subwayLineList[i].subwayLineId+', this)" dblclick="submitSubway('+subwayLineList[i].subwayLineId+', 0);"><a href="javascript:void(0);">'+subwayLineList[i].shortName+'</a></li>';
                }
            }
            ul.append(html);
        }
    });

}


function showBusiness(districtId, obj){
    activeCss(obj);
    $.ajax({
        async: false,
        url: '/'+city+'/showCircleList',
        type: 'POST',
        data: {
            "districtId": districtId
        },
        success: function (circleList) {
            $('#warpper_1').css("width", "66.6666%");
            $('#warpper_2').show();
            var ul = $('#warpper_2').children('ul');
            ul.empty();
            var html = '<li onclick="activeCss(this);submitDistrict('+districtId+', 0);"><a href="javascript:void(0);">不限</a></li>';
            if(businessCircleId==0){
                html = '<li class="active" onclick="activeCss(this);submitDistrict('+districtId+', 0);"><a href="javascript:void(0);">不限</a></li>';
            }
            for(var i=0;i<circleList.length;i++){
                if(businessCircleId == circleList[i].circleId){
                    html+='<li onclick="activeCss(this);submitDistrict('+districtId+', '+circleList[i].circleId+');" class="active"><a href="javascript:void(0);">'+circleList[i].circleName+'</a></li>';
                }else{
                    html+='<li onclick="activeCss(this);submitDistrict('+districtId+', '+circleList[i].circleId+');"><a href="javascript:void(0);">'+circleList[i].circleName+'</a></li>';
                }
            }
            ul.append(html);
        }
    });

}

function showSubwaystop(subwaylineid, obj){
    activeCss(obj);
    $.ajax({
        async: false,
        url: '/'+city+'/showSubwaystop',
        type: 'POST',
        data: {
            "lineId": subwaylineid
        },
        success: function (subwayStopsList) {
            $('#warpper_1').css("width", "66.6666%");
            $('#warpper_2').show();
            var ul = $('#warpper_2').children('ul');
            ul.empty();
            var html = '<li onclick="activeCss(this);submitSubway('+subwaylineid+', 0);"><a href="javascript:void(0);">不限</a></li>';
            if(subwaystopid==0){
                html = '<li class="active" onclick="activeCss(this);submitSubway('+subwaylineid+', 0);"><a href="javascript:void(0);">不限</a></li>';
            }
            for(var i=0;i<subwayStopsList.length;i++){
                if(subwaystopid == subwayStopsList[i].subwayStopsId){
                    html+='<li onclick="activeCss(this);submitSubway('+subwaylineid+', '+subwayStopsList[i].subwayStopsId+');" class="active"><a href="javascript:void(0);">'+subwayStopsList[i].stopsName+'</a></li>';
                }else{
                    html+='<li onclick="activeCss(this);submitSubway('+subwaylineid+', '+subwayStopsList[i].subwayStopsId+');"><a href="javascript:void(0);">'+subwayStopsList[i].stopsName+'</a></li>';
                }
            }
            ul.append(html);
        }
    });
}

//1 单价 2总价
function showPrice(p) {
    $("#type").val(p);
    // $.ajax({
    //     async: false,
    //     url: '/'+city+'/showPrice/'+p,
    //     type: 'POST',
    //     success: function (data) {
    //         $('#price_filter').show();
    //         var ul = $('#price_filter').children('ul');
    //         $("#price_filter").css("width","50%");
    //         ul.empty();
    //         var html = "";
    //         if(Number(priceFlag) == 0 && startprice == 0 && endprice == 0){
    //             html = '<li class="active" onclick="submitFlag(0);"><a href="javascript:void(0);">不限</a></li>';
    //         }else {
    //             html = '<li onclick="submitFlag(0);"><a href="javascript:void(0);">不限</a></li>';
    //         }
    //         for(var i=0;i<data.length;i++){
    //             var pF = Number(i)+1;
    //             if(Number(priceFlag) === pF && Number(type) === Number(p)){
    //                 html+='<li class="active" onclick="submitFlag('+pF+');" ><a href="javascript:void(0);">'+data[i].name+'</a></li>';
    //             }else {
    //                 html+='<li onclick="submitFlag('+pF+');" ><a href="javascript:void(0);">'+data[i].name+'</a></li>';
    //             }
    //         }
    //         ul.append(html);
    //     }
    // });
}

function activeCss(obj){
    $(obj).addClass('active').siblings('li').removeClass('active');
}


$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            pullUpAction(function () {});
        }
    });
    //加载内容填充不满屏幕
    if ($(document).height() <= $(window).height()) {
        $('#pullUp').hide();
    }

});

var index = 2;
var page_size = 5;
var loadingflag = false;
function pullUpAction(callback) {
    if (loadingflag) {
        return;
    }
    loadingflag = true;
    //判断 条件
    var ajaxUrl=getUrl();
    //console.log(ajaxUrl)
    var loadHtml = "<div class='tc' id='load-div'>努力加载中...</div>";
    $('.ub_listcon').append(loadHtml);
    $.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
            pageindex: index,
            pagesize: 10
        },
        success: function (r) {
            var template = $('#searchresulttemplate').html();
            var ads = $('#ads').html();

            Mustache.parse(template);   // optional, speeds up future uses
            Mustache.parse(ads);
            var html = '';
            for (var i = 0; i < r.data.length; i++) {
                if(r.data[i]["promotetype"]==null||r.data[i]["promotetype"]){
                    if(r.data[i]["houseCount"]!=1){
                        r.data[i]["area"] = fomateNumber(r.data[i]["minArea"]) + "-" + fomateNumber(r.data[i]["maxArea"]);
                    }else{
                        r.data[i]["area"] = fomateNumber(r.data[i]["maxArea"]);
                    }
                    if (!r.data[i]["imgPath"]) {
                        r.data[i]["imgPath"] = "227ec270-2a2f-11e5-b929-00163e00571b.png"
                    }
                    if (r.data[i]["price"]) {
                        r.data[i]["price"] = toDecimal(r.data[i]["price"]);
                    }
                    r.data[i]['loopindex'] = i + 10 + 1;
                    if(r.data[i]["adDesc"]==0){
                        r.data[i]["imgPath"] = imagesPath +'/' + r.data[i]["imgPath"];
                    }
                    if(r.data[i]["imagesortflag"]==50||r.data[i]["imagesortflag"]==100){
                        r.data[i]['icon720'] = 1;
                    }
                    if(r.data[i]['tags']){
                        for (var j = 0; j < r.data[i]['tags'].length; j++) {
                            var cla = getclass();
                            r.data[i]['tags'][j]['cla']=cla;
                            /*地铁周边筛选条件展示距离*/
                            if(tagstr == 7 && r.data[i]['tags'][j]['tagId'] == 7){
                                r.data[i]['tags'][j]['tagDesc']=r.data[i]['stationDesc'].replace("离",'');
                            }
                            /*不展示联合办公标签*/
                            if(r.data[i]['tags'][j]['tagId'] == 4){
                                r.data[i]['tags'][j]['tagDesc']='';
                            }
                        }
                    }
                    var rendered = Mustache.render(template, r.data[i]);
                    html += rendered;
                }

                if(r.data[i]["promotetype"]!=null&&!r.data[i]["promotetype"]){
                    var rendered = Mustache.render(ads, r.data[i]);
                    html += rendered;
                }

            }
            $("#load-div").remove();
            $('.ub_listcon').append(html);
            index++;
            if (!r.hasnext) {
                $('#pullUp').hide();
            } else {
                $('#pullUp').show();
            }
            if (r.data.length > 0) {
                loadingflag = false;
            }
            $('.ub_listcon .supply_box').show();
            $('.supply_msg_box').width(($('.supply').width()-$('.supply dt').width()-10)+'px');
            callback();
        }
    });
}

var classIndex = 0;

function getclass(){
    classIndex++;
    switch(classIndex%5) {
        case 0:
            return "jx";
        case 1:
            return "dbjz";
        case 2:
            return "dt";
        case 3:
            return "jj";
        case 4:
            return "rz";

    }
}

function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}

function fomateNumber(n){
    return Number(n).toFixed(0);
}




