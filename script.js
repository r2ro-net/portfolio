$(document).ready(function(){
  let i = document.getElementById("illustrations");
  let a = document.getElementById("about");
  let w = document.getElementById("work");
  let f = document.getElementById("footer");

  $("#illustration-button").click(function(){
    if (i.style.display === "none" || i.style.display === "") {
      f.style.display = "none";
      i.style.display = "block";
      $("#illustration-button").addClass("active-box");
      if(a.style.display === "block") {
        a.style.display = "none";
        $("#about-button").removeClass("active-box");
      } else if(w.style.display === "block"){
        w.style.display = "none";
        $("#work-button").removeClass("active-box");
      }
    } else {
      f.style.display = "block";
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
        f.style.display = "block";
        $("#illustration-button").removeClass("active-box");
      } else if (w.style.display === "block") {
        w.style.display = "none";
        f.style.display = "block";
        $("#work-button").removeClass("active-box");
      }
    } else {
      a.style.display = "none";
      $("#about-button").removeClass("active-box");
    }
  });

  $("#work-button").click(function(){
    if (w.style.display === "none" || w.style.display === "") {
      w.style.display = "block";
      f.style.display = "none";
      $("#work-button").addClass("active-box");
      if(i.style.display === "block" ) {
        i.style.display = "none";
        $("#illustration-button").removeClass("active-box");
      } else if(a.style.display === "block"){
        a.style.display = "none";
        $("#about-button").removeClass("active-box");
      }
    } else {
      w.style.display = "none";
      f.style.display = "block";
      $("#work-button").removeClass("active-box");
    }
  });

});

function closeAbout(){
  document.getElementById('about').style.display = "none";
  $("#about-button").removeClass("active-box");
}

function openModal(name) {
  if(name === "work"){
    document.getElementById('workModal').style.display = "block";
  } else{
    document.getElementById('myModal').style.display = "block";
  }
}

function closeModal(name) {
  if(name === "work"){
    document.getElementById('workModal').style.display = "none";
  } else{
    document.getElementById('myModal').style.display = "none";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, name) {
  if(name === 'work'){
    showSlides(slideIndex += n, 'work');
  }else {
    showSlides(slideIndex += n);
  }
}

function currentSlide(n, name) {
  if(name === 'work'){
    showSlides(slideIndex = n, 'work');
  }else{
    showSlides(slideIndex = n);
  }
}

function showSlides(n, name) {
  var i;
  if(name === 'work'){
    var slides = document.getElementsByClassName("work-slide");
    var captionText = document.getElementById("work-caption");
  } else {
    var slides = document.getElementsByClassName("item-slide");
    var captionText = document.getElementById("caption");
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}
