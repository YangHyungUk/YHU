$(document).ready(function(){ 

  /* 슬라이드 */
  var $slides = $(".slide");
  var $controls;
  $slides.css({"display":"none"});
  $slides.eq(0).css({"display":"block"})

  //슬라이드 하나마다 돌아가면서 버튼하나씩 만든다
  $slides.each(function(){
    $controls = $("<button class='control-btn'></button>");
	$(".control-group").append($controls);
  });

  $(".control-btn").eq(0).addClass("active");

  $("button").on("click",function(){
	//alert($(this).index());
	fnShow($(this).index());
  });	

//번호를 받아서 그번호에 해당되는 슬라이드만 보여준다
  function fnShow(idx){
	$slides.fadeOut(500);
	$slides.eq(idx).fadeIn(500);
	$(".control-btn").removeClass("active");
	$(".control-btn").eq(idx).addClass("active");
  }



});
