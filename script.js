$(document).ready(function(){
  let i = document.getElementById("illustrations");
  let a = document.getElementById("about");
  let w = document.getElementById("work");

  $("#illustration-button").click(function(){
    if (i.style.display === "none" || i.style.display === "") {
      i.style.display = "block";
      $("#illustration-button").addClass("active-box");
      if(a.style.display === "block") {
        a.style.display = "none";
        $("#about-button").removeClass("active-box");
      }
    } else {
      i.style.display = "none";
      $("#illustration-button").removeClass("active-box");
    }
  });

  $("#about-button").click(function(){
    if (a.style.display === "none" || a.style.display === "") {
      a.style.display = "block";
      $("#about-button").addClass("active-box");
      if(i.style.display === "block") {
        i.style.display = "none";
        $("#illustration-button").removeClass("active-box");
      }
    } else {
      a.style.display = "none";
      $("#about-button").removeClass("active-box");
    }
  });

});

function closeAbout(){
  document.getElementById('about').style.display = "none";
  $("#about-button").removeClass("active-box");
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
