$(()=>{
    //tab栏切换
    $(".tab").on("click",".tabs>li>a",function(e){
        //console.log(2)
        e.preventDefault();
        $tar = $(this);
        console.log($tar);
        console.log($tar.data("tab"));
    })
})
//duration 视频总时间
//volume音量
//playbackRate倍速
//src地址
//autoplay自动播放
//currentTime当前播放时间
//paused暂停中
//play()播放
//pause()暂停
//muted静音
//ontimeupdate时间改变事件
$(()=>{
var v = $("#v")[0];
//console.log(v)
//播放/暂停
$(".control>a.play").click((e)=>{
   e.preventDefault();
   //console.log(v.paused)
   if(v.paused){
        v.play();
        $(".control>.play").addClass("glyphicon-pause").removeClass("glyphicon-play");
    }else{
        v.pause();
        $(".control>.play").addClass("glyphicon-play").removeClass("glyphicon-pause");
    }

    //时间进度
    //console.log(v.duration)
    var atime = v.duration;
    var h = String(Math.floor(atime/60/60));
    var m = String(Math.floor(atime/60));
    var s = String(Math.floor(atime%60));
    //console.log(h.length)
    if(h.length==1){
        h="0"+h;
    }
    if(m.length==1){
        m="0"+m;
    }
    if(s.length==1){
        s="0"+s;
    }
    $(".control>.time>.alltime").html(h+":"+m+":"+s)
    //时间改变事件：当前播放时间，播放长度
    v.ontimeupdate=function(){
        var ctime = v.currentTime;
        if(ctime==atime){
            $(".control>.play").addClass("glyphicon-play").removeClass("glyphicon-pause");
            v.pause();
        }
        var hc = String(Math.floor(ctime/60/60));
        var mc = String(Math.floor(ctime/60));
        var sc = String(Math.floor(ctime%60));
        //console.log(ctime)
        if(hc.length==1){
            hc="0"+hc;
        }
        if(mc.length==1){
            mc="0"+mc;
        }
        if(sc.length==1){
            sc="0"+sc;
        }
        $(".control>.time>.ontime").html(hc+":"+mc+":"+sc)
        var per = ctime/atime;
        //console.log(per)
        //console.log(parseInt(per*$(".time>.timewidth").width()))
        var cwidth = parseInt(per*$(".time>.timewidth").width());
        //console.log(cwidth)
        $(".time>.timewidth>span").width(cwidth+"px");

        //播放了倍速才起作用
        $(".rate").on("click",(e)=>{
            e.preventDefault();
            //console.log(v.playbackRate)
            if($(e.target).html()=="2x"){
                v.playbackRate= 2.0;
            }else{
                v.playbackRate= 1.0;
            }
        })
    }
})
//让在播放前点击倍速不起作用
$(".rate").on("click",(e)=>{
    e.preventDefault();
})

//声音
$(".voice>a").click((e)=>{
    e.preventDefault();
    //console.log($(e.target)[0])
    if(v.muted){
        $(e.target).addClass("glyphicon-volume-up").removeClass("glyphicon-volume-off")
        v.muted=false;
    }else{
        $(e.target).addClass("glyphicon-volume-off").removeClass("glyphicon-volume-up")
        v.muted=true;
    }
    })
$(".voicewidth").click(()=>{

})

})