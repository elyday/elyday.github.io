$(document).ready(function() {
  $(".sidenav").sidenav();
  $("img.lazy").lazyload();
  $(".slider").slider({
    height: 650
  });
});

function nextSlide() {
  var instance = M.Slider.getInstance(document.getElementById("slider"));
  instance.next();
}

function prevSlide() {
  var instance = M.Slider.getInstance(document.getElementById("slider"));
  instance.prev();
}
