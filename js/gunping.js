


var danmuNum = 6;
function gunping(parents,childUl){
    $.ajax({
        url:'newsList.json',
        data:{},
        type:'GET',
        dataType:'json',
        success:function (res) {
            if(res.re){
                for(var i=0;i<res.data.length;i++){
                    $('<li><a href="'+res.data[i].url+'">'+res.data[i].title+'</a></li>').appendTo(childUl[0])
                }
                setInterval(function () {
                    $(parents).find("ul").stop().animate({
                        marginTop : "-2.25rem"
                    },500,function(){
                        $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
                    });
                    /*danmuNum=danmuNum+1;
                    if(danmuNum >= res.data.length){
                        danmuNum=0;
                    }*/
                },2000)
            }
        },
        error:function (err) {}    });
}