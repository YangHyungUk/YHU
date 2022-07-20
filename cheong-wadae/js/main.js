
$(function(){

document.querySelector(".button1").addEventListener("click", function(){
 document.querySelector(".container").style.transform = "translate(0vw)";
    });

document.querySelector(".button2").addEventListener("click", function(){
    document.querySelector(".container").style.transform = "translate(-100vw)";
});
document.querySelector(".button3").addEventListener("click", function(){
    document.querySelector(".container").style.transform = "translate(-200vw)";
});

var a=0

setInterval(function(){
    var next = (a+1)%3

    $(".events_1").eq(a).fadeOut()
    $(".events_1").eq(next).fadeIn()
    a=next
},3000)


});