$(document).ready(function(){
  $(".clickhide").click(function(){
      $(this).hide();
  });
  $(".clickhideslow").click(function(){
      $(this).hide("slow");
  });
  $(".clickfadeout").click(function(){
      $(this).fadeOut();
  });
  $(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
  $(".clicktogglereleasenotes").click(function(){
      $("#releasenotes").slideToggle();
      if ($(this).html() == "折叠") {
      $(this).html("展开");
      } else {
      $(this).html("折叠");
      }
  });
});
