//������
$(()=>{
    img = $('img');
    // ҳ��ˢ��ʱ���ȵ���һ�μ��غ���
    lazyload();
    // ע�������������
    $(window).scroll(lazyload);
    //�����غ���
    function lazyload(){
        for(var i=0;i<img.length;i++){
            //��ǰͼƬ�����ҳ�涥���ľ���  <= �������� + ������������붥���ľ��� -400��
            if(img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())-400) {
                // ���ÿ��img��srcΪ�յĻ�����ÿ��img��src��ֵΪdata-src��ֵ
                if(img.eq(i).attr("src") == "") {
                    var src = img.eq(i).attr("data-src");
                    img.eq(i).attr("src", src);
                    n = i + 1;
                }
            }
        }
    }
})


//�ֲ�
$(()=>{
    $("#html5zoo-1").html5zoo({
        //isresponsive:false,//��괥���Զ���Ӧ
        pauseonmouseover:true,//�������ȥ��ͣ���뿪��������
        randomplay:true,//�������
        slideinterval:3000,//���ż��ʱ��
        loop:0,//ѭ�����š� 0������ѭ���� 1��ѭ��1�Σ�
        autoplay:true,//�Զ�����
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
