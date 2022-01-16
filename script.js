$(document).ready(function(){
  $("a").click(function(){
    var x = document.getElementById("illustrations-box");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      $("a").addClass("active-box");
    } else {
      x.style.display = "none";
      $("a").removeClass("active-box");
    }
  });
});
