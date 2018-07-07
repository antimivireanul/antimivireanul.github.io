jQuery(document).ready(function ($) {
  // Variables
  var $nav = $('.stickynav'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
  function init() {
    $('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		  &&
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
				var $iceMenu_old=$('#icemegamenu .active').closest('li').attr('id');
				$('#' + $iceMenu_old).removeClass('active');
				$('.js .slicknav_menu li.iceMenuLiLevel_1.active.slicknav_open').removeClass('active');

				var $iceMenu_new=$(this).closest('.parent').attr('id');
				$('#' + $iceMenu_new).addClass('active');
				$(this).closest('li.iceMenuLiLevel_1.slicknav_open').addClass('active');
			$('html, body').animate({
			  scrollTop: target.offset().top-70
			}, 1000, function() {
			});
		  }
		}
	  });
	$window.on('scroll', onScroll)
    $window.on('resize', onScroll)
      // Select all links with hashes
  }
  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }
  function onScroll() {
    navOffsetTop = $nav.offset().top
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
		$body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
  }
  //smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  init();
});
