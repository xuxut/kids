//懒加载
$(()=>{
    img = $('img');
    // 页面刷新时首先调用一次加载函数
    lazyload();
    // 注册滚动监听函数
    $(window).scroll(lazyload);
    //懒加载函数
    function lazyload(){
        for(var i=0;i<img.length;i++){
            //当前图片相对于页面顶部的距离  <= 可视区域 + 滚动条距离距离顶部的距离 -400。
            if(img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())-400) {
                // 如果每个img的src为空的话，给每个img的src赋值为data-src的值
                if(img.eq(i).attr("src") == "") {
                    var src = img.eq(i).attr("data-src");
                    img.eq(i).attr("src", src);
                    n = i + 1;
                }
            }
        }
    }
})


//轮播
$(()=>{
    $("#html5zoo-1").html5zoo({
        //isresponsive:false,//鼠标触发自动响应
        pauseonmouseover:true,//鼠标移上去暂停，离开继续播放
        randomplay:true,//随机播放
        slideinterval:3000,//播放间隔时间
        loop:0,//循环播放。 0（无限循环） 1（循环1次）
        autoplay:true,//自动播放
        arrowwidth:50,
        arrowHeight:50,
        arrowimage:"../images/index/arrows-48-48-3.png",
        slide: {
            duration:1000,
            easing:"easeOutCubic",
            checked:true
        },
        crossfade: {
            duration:1000,
            easing:"easeOutCubic",
            checked:true
        },
        threedhorizontal: {
            checked:true,
            bgcolor:"#222222",
            perspective:1000,
            slicecount:1,
            duration:1500,
            easing:"easeOutCubic",
            fallback:"slice",
            scatter:5,
            perspectiveorigin:"bottom"
        },
        slice: {
            duration:1500,
            easing:"easeOutCubic",
            checked:true,
            effects:"up,down,updown",
            slicecount:10
        },
        fade: {
            duration:1000,
            easing:"easeOutCubic",
            checked:true
        },
        blocks: {
            columncount:5,
            checked:true,
            rowcount:5,
            effects:"topleft,bottomright,top,bottom,random",
            duration:1500,
            easing:"easeOutCubic"
        },
        blinds: {
            duration:2000,
            easing:"easeOutCubic",
            checked:true,
            slicecount:3
        },
        shuffle: {
            duration:1500,
            easing:"easeOutCubic",
            columncount:5,
            checked:true,
            rowcount:5
        },
        threed: {
            checked:true,
            bgcolor:"#222222",
            perspective:1000,
            slicecount:5,
            duration:1500,
            easing:"easeOutCubic",
            fallback:"slice",
            scatter:5,
            perspectiveorigin:"right"
        },
        transition:"slide,crossfade,threedhorizontal,slice,fade,blocks,blinds,shuffle,threed"
    })

    $(".html5zoo-slider-0").css({"margin-left":"0px"})
})
