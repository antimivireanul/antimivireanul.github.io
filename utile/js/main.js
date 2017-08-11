$(document).ready(function() {

  // Variables
  var $nav = $('.stickynav'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', onScroll)
    
  }




  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }
  function onScroll() {
	  $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    if(navOffsetTop < $window.scrollTop()) {
		$body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
	
  }

  init();
  


});
	  // Select all links with hashes
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
				$('#navmobile li.active.slicknav_parent').removeClass('active');
				
				var $iceMenu_new=$(this).closest('.parent').attr('id');
				$('#' + $iceMenu_new).addClass('active');
				$(this).closest('a.slicknav_item.slicknav_row').addClass('active');
				$(this).closest('li.active.slicknav_parent').addClass('active');
			$('html, body').animate({
			  scrollTop: target.offset().top-70
			}, 1000, function() {
			  
			});
		  }
		}
	  });