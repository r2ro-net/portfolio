$(document).ready(function(){
  $("#illustration-button").click(function(){
    var x = document.getElementById("illustrations");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      $("#illustration-button").addClass("active-box");
    } else {
      x.style.display = "none";
      $("#illustration-button").removeClass("active-box");
    }
  });
});

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
