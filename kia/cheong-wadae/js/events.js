
$(function(){

    document.querySelector(".photo1").addEventListener("click", function(){
        document.querySelector(".container").style.transform = "translate(0px)";
           });
       
       document.querySelector(".photo2").addEventListener("click", function(){
           document.querySelector(".container").style.transform = "translate(-1200px)";
       });
       document.querySelector(".photo3").addEventListener("click", function(){
           document.querySelector(".container").style.transform = "translate(-2400px)";
       });
    
});