$(()=>{
    //全屏插件设置
    $("#fullpage").fullpage({
        'verticalCentered': false,//内容是否垂直居中
        'css3': true,//是否使用transform滚动
        'sectionsColor': ['#000', '#2EB5E5', '#008B8B', '#FFF29B'],//每个全屏的颜色slidesColor
        'anchors': ['page1', 'page2', 'page3', 'page4'],//为每一个section添加data-anchor="page1（2）..."属性
        'menu':true,
        'navigation': true,//是否显示项目导航
        'navigationColor':"red",
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于', '作品', '联系'],
    })

})

//banner中鼠标滑过（拖拽原理）
$(()=>{
    //鼠标进入，铅笔出来
    $("body").on("mouseenter",function(e){
        //console.log(e.clientX, e.clientY);
        //console.log(e.offsetX);
        //e.offsetX/Y是鼠标距离符合自的距离
        $(".mouse").css("display","block");
//        $(this).css("cursor","none");
    })
        //鼠标移动
        .on("mousemove",function(e){
            //console.log(e.clientX, e.clientY);
            $(".mouse").css({
                "left":e.clientX,
                "top":e.clientY,
                "margin-top":"-30px",
                "margin-left":"-30px"
            })
            if(e.clientX>350&&e.clientX<=550&&
                e.clientY>=100&& e.clientY<=300
            ) {
                //console.log($(".four>a>img")[0])
                $(".four>a>img").addClass("big")
            }else{
                $(".four>a>img").removeClass("big")
            }
        })
        //鼠标离开,铅笔隐藏
        .on("mouseleave",function(e){
            //$(".mouse").css("display","none");
            $(this).css("cursor","pointer");
        })
        //点击clickme,进入主页面
        .on("click",function(e){
            if(e.clientX>350&&e.clientX<=550&&
                e.clientY>=100&& e.clientY<=300
            ){
                location="indexreal.html"
            }
        })


})

//画布
var can1 = document.getElementsByTagName("canvas")[0];
var can2 = document.getElementsByTagName("canvas")[1];
var can3 = document.getElementsByTagName("canvas")[2];
var can4 = document.getElementsByTagName("canvas")[3];


//console.log(can)
var ctx1=can1.getContext("2d");
var ctx2=can2.getContext("2d");
var ctx3=can3.getContext("2d");
var ctx4=can4.getContext("2d");

var one=new Image();
var two=new Image();
var three=new Image();
var four=new Image();
var five = new Image();
one.src="./images/in/snow1.png";
two.src="./images/in/snow2.png";
three.src="./images/in/snow3.png";
four.src="./images/in/snow4.png";
five.src="./images/in/snow5.png";

//初始化雪花类型
for(var arr=[],i=0;i<30;i++){
    var num=Math.random();
    if(num>0.8){
        arr[i]=one;
    }else if(num>0.6){
        arr[i]=two;
    }else if(num>0.4){
        arr[i]=three;
    }else if(num>0.2){
        arr[i]=four;
    }else{
        arr[i]=five;
    }
}
//初始化雪花位置
for(var x=[],i=0;i<30;i++){
    x[i]=Math.random()*2000;
}
for(var y=[],i=0;i<30;i++ ){
    y[i]=Math.random()*1000;
}
//每隔一段时间清除画布，并使y值增大，左右（x值增大减小）随机。使雪花飘落
setInterval(()=> {
    ctx1.clearRect(0,0,1900,1000);
    ctx2.clearRect(0,0,1900,1000);
    ctx3.clearRect(0,0,1900,1000);
    ctx4.clearRect(0,0,1900,1000);
    for(var i=0;i<30;i++){
        var ranx = Math.random()*6;
        var rany = Math.random()*10;
        //y值增大
        y[i]+=rany;
        if(y[i]>900){
             //console.log(y[i])
             y[i]=10;
         }

        //x值随机
        Math.random()>0.5?x[i]-=ranx:x[i]+=ranx;
         if(x[i]>1870){
             x[i]=1870;
         }else if(x[i]<30){
             x[i]=30;
         }
    }
     for(var i=0;i<30;i++) {
         ctx1.drawImage(arr[i], x[i], y[i]);
         ctx2.drawImage(arr[i], x[i], y[i]);
         ctx3.drawImage(arr[i], x[i], y[i]);
         ctx4.drawImage(arr[i], x[i], y[i]);
     }
},1000/10)




