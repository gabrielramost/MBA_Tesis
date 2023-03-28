$(document).ready(function() {
  $('.menu-btn').click(function() {
    $(this).toggleClass('open');
    $('.nav').toggleClass('open');
  });

  $('.nav__link').click(function() {
    $('.menu-btn').removeClass('open');
    $('.nav').removeClass('open');
  });
});
