$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 787){
            $("#btn1").fadeIn();
            $("#btn2").fadeIn();
        }else{
            $("#btn1").fadeOut();
            $("#btn2").fadeOut();
        }
    });
    
    $("#btn1").on("click",function(){
        $("html").animate({scrollTop:0},1000,"swing");
    });
    
    $("#btn2").on("click",function(){
        $("html").animate({scrollTop:5789},1000,"swing");
    });
    
    });