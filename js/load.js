$(document).ready(function() {
  $(".sidenav").sidenav();
  $("img.lazy").lazyload();
  $("#slider").slider();
  $("#slider2").slider({
    height: 650
  });
});

function nextSlide() {
  var instance = M.Slider.getInstance(document.getElementById("slider2"));
  instance.next();
}

function prevSlide() {
  var instance = M.Slider.getInstance(document.getElementById("slider2"));
  instance.prev();
}
