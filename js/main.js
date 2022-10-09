$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 587){
            $("#btn1,#btn2").stop().fadeIn();
        }else{
            $("#btn1,#btn2").stop().fadeOut();

        }
    });
    
    $("#btn1").on("click",function(){
        $("html").animate({scrollTop:0},500,"swing");
    });
    
    $("#btn2").on("click",function(){
        $("html").animate({scrollTop:2500},500,"swing");
    });



    $("a").on("click",function(){
        var id = $(this).attr("href");
        var pos =$(id).offset().top; //$("#sect01").offset().top
    
    
        $("html").animate({ //변수를 넣어서 계속 변하는 값을 집어넣는다
            scrollTop:pos
        },800,"swing");  
    });
    
    var startPos = $("#banner").offset().top
    
    $(window).on("scroll",function(){
        var scrollPos = $("html").scrollTop();
        $("#info").text(newPos);
        
        var newPos = startPos + scrollPos;
        $("#banner").animate({
            top:newPos
        },30,"swing");
    });

    
});