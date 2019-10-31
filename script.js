$(document).ready(function(){
    $("#dark").click(function(){
    $("#d").css("backgroundColor","#ffffff");
    });
    
    $("#light").click(function(){
    $("#d").css("backgroundColor","#000000");
    });
    
    $("#foo").click(function(){
       $("#fade").fadeOut("slow"); 
    });
    
    $(".title").mouseenter(function(){
      $("div#info").css("visibility","visible");
       alert("Click me to display my information!");
   });
    
    $("#animate").click(function(){
    $("#hanes").animate({
      right: '500px',
      opacity: '0',
      height: '100px',
      width: '100px'
    },"slow");
    });
});
