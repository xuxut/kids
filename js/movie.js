$(()=>{
    //tab���л�
    $(".tab").on("click",".tabs>li>a",function(e){
        //console.log(2)
        e.preventDefault();
        $tar = $(this);
        console.log($tar);
        console.log($tar.data("tab"));
    })
})
//duration ��Ƶ��ʱ��
//volume����
//playbackRate����
//src��ַ
//autoplay�Զ�����
//currentTime��ǰ����ʱ��
//paused��ͣ��
//play()����
//pause()��ͣ
//muted����
//ontimeupdateʱ��ı��¼�
$(()=>{
var v = $("#v")[0];
//console.log(v)
//����/��ͣ
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

    //ʱ�����
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
    //ʱ��ı��¼�����ǰ����ʱ�䣬���ų���
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

        //�����˱��ٲ�������
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
//���ڲ���ǰ������ٲ�������
$(".rate").on("click",(e)=>{
    e.preventDefault();
})

//����
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