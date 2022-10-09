$(document).ready(function(){

$(".one>li").on("mouseover",function(){
    $(".two").stop().slideDown(300); 	
    $(".submenu-bg").stop().slideDown(300);
});
    
//메인메뉴에서 마우스가 나가면 서브메뉴와 바탕감춤
$(".one>li").on("mouseout",function(){ 
    $(".two").stop().slideUp(200);
    $(".submenu-bg").stop().slideUp(200);
});
    
//서브바탕에 마우스가 나가도 전체 네비가 보이도록 함
$(".submenu-bg").on("mouseover",function(){
    $(".two").stop().show();
    $(this).stop().show();
});
    
$(".submenu-bg").on("mouseout",function(){ 
    $(".two").stop().hide(); 
    $(this).stop().hide(); 
});

/* 슬라이더
------------------------*/
var current=0;
var $slides=$(".slide-group img");
var total=$(".slide-group img").length; 	

//컨트롤버튼 만들기
$slides.each(function(index){ 
	var $btn=$("<button class='control-btn'></button>"); 
		if(index==0){ 
		$btn.addClass("active");
	}					
	$(".control-group").append($btn);
});	

function move(idx){
	$slides.stop().fadeOut(1000);
	$slides.eq(idx).stop().fadeIn(1000);
	$(".control-btn").removeClass("active");
	$(".control-btn").eq(idx).addClass("active");
	current=idx;
}

function setSlide(){
	if(current==2){
		move(0);
	}else{
		move(current+1);
	}
}

setInterval(setSlide,2000);

/* 모바일의 햄버거메뉴 클릭시
----------------------------*/
var i=0;
$("#moblie-open").on("click",function(){
	if(i%2==0){
		$(this).addClass("on"); // .on은 햄버거와 X를 전환시킴
		$(".moblie-gnb").slideDown(1000);
	}else{
		$(this).removeClass("on"); 
		$(".moblie-gnb").slideUp(1000);
	}
	i++;
});
/* 모바일의 어코디언 메뉴
-----------------------------*/
$(".moblie-gnb>li>a").on("click",function(){
	if($(this).hasClass("open")==true){ //클릭한 메뉴가 열려있으면 
		$(this).siblings(".sub").stop().slideUp(300); //이 메뉴를 닫고
		$(this).removeClass("open"); //열림표시 제거한다.
		
	}else{ //클릭한 메뉴가 닫혀있으면
		$(".moblie-gnb .sub").stop().slideUp(300); //다른 모든 메뉴는 닫고
		$(this).siblings(".sub").stop().slideDown(300); //이 메뉴는 연다음에
		$(".moblie-gnb>li>a").removeClass("open");//다른 메뉴의 열림표시는 제거하고 
		$(this).addClass("open"); //이 메뉴에 열림표시 붙인다.
	}
});


});