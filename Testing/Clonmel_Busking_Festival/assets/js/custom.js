$(document).ready(function() {
	$("#menu-close").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
	});
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(
				/^\//, '') || location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +
					']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	//Back to top Button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
		}
		else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});
