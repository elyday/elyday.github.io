$(document).ready(function() {
  $(".sidenav").sidenav();
  $("img.lazy").lazyload();
  $(".slider").slider();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
});
