$(document).ready(function() {

  // Exercise 6.2
  $("#hideBtn").click(function() {
    $("#exercise3 img").hide();
  });
  $("#showBtn").click(function() {
    $("#exercise3 img").show();
  });

  // Exercise 6.4
  $("#exercise4 h1").dblclick(function() {
    $("#exercise4 h1").toggleClass("styleSwitch");
  });

// Exercise 6.6
  $("#addBtn").click(function() {
    $("#exercise5 ul").append("<li>CONTENT!</li>");
  });


// Exercise 6.8
  $("#exercise9").hover(function() {
    $("#exercise9").animate({
      margin : "15px 35px",
      padding: "10px",
      width: "25%"
    });
  });

   // Exercise 6.10
  $("#exercise11").mouseleave(function() {
    $("#exercise11").slideUp();
  });

 // Exercise 6.12
$("#exercise13Div").hover(function() {
    $("#exercise13Div").fadeOut();
  });