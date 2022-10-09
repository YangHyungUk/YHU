$(document).ready(function(){


    document.querySelector(".photo1").addEventListener("click", function(){
        document.querySelector(".container").style.transform = "translate(0px)";
           });
       
       document.querySelector(".photo2").addEventListener("click", function(){
           document.querySelector(".container").style.transform = "translate(-1200px)";
       });
       document.querySelector(".photo3").addEventListener("click", function(){
           document.querySelector(".container").style.transform = "translate(-2400px)";
       });
    

    /* 모바일의 햄버거메뉴 클릭시
    ----------------------------*/
    var i=0;
    $("#moblie-open").on("click",function(){
        if(i%2==0){
            $(this).addClass("on"); // .on은 햄버거와 X를 전환시킴
            $("#moblie_menu").slideDown(1000);
        }else{
            $(this).removeClass("on"); 
            $("#moblie_menu").slideUp(1000);
        }
        i++;
    });
    
    $("#sch-btn").on("click",function(){
        $(".site-search").toggleClass("on");
    });
    
    $(".language-img").on("click",function(){
        $(".language_menu").toggleClass("on");
    });
    
    
});