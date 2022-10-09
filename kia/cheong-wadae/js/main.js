$(document).ready(function(){

var current = 0;
var slideWidth;
var slideHeight;
var total=$(".slide").length;
var fullSlideWidth;

//슬라이드의 크기세팅 함수
function fnslideSet(){
    slideWidth = window.innerWidth;
    $(".slide").width(slideWidth);
    slideHeight =$(".slide img").height();

    $("#slide-content").height(slideHeight);
    $("#slide-content").width(slideWidth);

    fullSlideWidth-slideWidth*total;

    $(".slide-group").css({
        "width":fullSlideWidth
    });
}

fnslideSet();

$(window).on("resize",function(){
	fnSlideSet();

	//슬라이드 작동후 화면조절시 위치 다시잡기
	$(".slide-group").css({
		"left" : -slideWidth * current
	});

});

function fnMove(idx){
	$(".slide-group").animate({
		left : -slideWidth * idx
	});
	current = idx;
}

var a=0
var $slides=$(".slide");
var total = $slides.length;
$slides.css("opacity","0");
$slides.eq(0).css("opacity","1");

function fnFade(idx){ 		
	//현재 슬라이드를 제외한 모든 슬라이드는 크기원상복귀하고 투명하게 한다
	$slides.not($slides.eq(current)).css({
		"transform":"scale(1.5, 1.5)",
		"transition":"0ms",
		"opacity":"0"
	});	
	//다시 0번 슬라이드로 돌아갈때 현재 슬라이드는 투명하게
	$slides.eq(current).css({
		"transform":"scale(1, 1)",
		"transition":"4000ms",
		"opacity":"0"
	});
	//다음 슬라이드는 커지면서 보여지게 한다
	$slides.eq(idx).css({
		"transform":"scale(1, 1)",
		"transition":"4000ms",
		"opacity":"1"
	});	
	current = idx; 
}

function setSlide(){
	if(current == 2){ 
		fnFade(0);
	}else{
		fnFade(current + 1);
	}
}	
fnFade(0);
setInterval(setSlide ,4000);




// slide


setInterval(function(){
    var next = (a+1)%3
    $(".events_1").eq(a).fadeOut(1000)
    $(".events_1").eq(next).fadeIn(1000)
    a=next
},3000)



$(".box").on("mouseover",function(){
	$(this).find(".txt-box").stop().animate({
		top:"200px",
		fontSize:"20px"
	},500,"swing");
});

$(".box").on("mouseout",function(){
	$(this).find(".txt-box").stop().animate({
		top:"220px",
		fontSize:"15px"
	},500,"swing");
});


$("#sch-btn").on("click",function(){
    $(".site-search").toggleClass("on");
});

$("#history").click(function(){
    $(location).attr("href","history.html");
});


$(".language-img").on("click",function(){
    $(".language_menu").toggleClass("on");
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

		




});