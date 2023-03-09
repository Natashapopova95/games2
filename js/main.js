$(document).ready(function() {
  $('.menu__burger').click(function(event) {
  $('.menu__burger, .menu').toggleClass('active');
  $('.menu__burger, .search-burger2').toggleClass('burgerActive');
  $('body').toggleClass('lock');
  });
});


$(document).ready(function() {
  $('.header__search-img').click(function(event) {
   $('.wrap, .wrap__btn').toggleClass('active');
    $('.header__search-img, .menu ').toggleClass('menu--active');
   $(".wrap__btn[type='text']").focus();
  });
});


$(document).ready(function() {
  $('.search-images').click(function(event) {
  $('.search2, .search_input').toggleClass('active');
  $('body').toggleClass('activeSearch');
  $('.search2, .search__img').toggleClass('active');
  $('.search-images').toggleClass('active');
  $(".search_input[type='text']").focus();
  $('.search-burger2').toggleClass('search--active');
  });
});

$(document).ready(function() {
  $('.search-cross').click(function(event) {
  $('.search2, .search_input').toggleClass('active');
  $('body').toggleClass('activeSearch');
  $('.search2, .search__img').toggleClass('active');
  $('.search-images').toggleClass('active');
  $(".search_input[type='text']").focus();
  $('.search-burger2').toggleClass('search--active');
  });
});

 

$(function(){
   
	$('.slider').slick({
		nextArrow:false,
		prevArrow:'<button type="button" class="slick-btn slick-prev"><img src="images/arrow.svg"></button>'
	});
});


$(function(){
   
	$('.similar__slider').slick({
		nextArrow:false,
        prevArrow:false,
	});
});


