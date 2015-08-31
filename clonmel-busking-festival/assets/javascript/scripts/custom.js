/*------------------------------------------------------------------------------
	Custom Javascript
------------------------------------------------------------------------------*/
$(document).ready(function() {

  //Menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  //Menu Toggle Fade In and Fade Out
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#menu-toggle').fadeIn();
    } else {
      $('#menu-toggle').fadeOut();
    }
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

  //Return Button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#return').fadeIn();
    } else {
      $('#return').fadeOut();
    }
  });
  $('#return').click(function() {
    window.location.href = "index.html";
  });

  //Back to top Button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // Character Counters For Form Inputs
  $('#the-f-name').keyup(function() {
    var characterCount1 = $(this).val().length,
      current1 = $('#current1'),
      maximum1 = $('#maximum1'),
      theCount1 = $('#the-count1');
    current1.text(characterCount1);
  });
	$('#the-s-name').keyup(function() {
		var characterCount2 = $(this).val().length,
			current2 = $('#current2'),
			maximum2 = $('#maximum2'),
			theCount2 = $('#the-count2');
		current2.text(characterCount2);
	});
	$('#the-email').keyup(function() {
		var characterCount3 = $(this).val().length,
			current3 = $('#current3'),
			maximum3 = $('#maximum3'),
			theCount3 = $('#the-count3');
		current3.text(characterCount3);
	});
	$('#the-phone').keyup(function() {
		var characterCount4 = $(this).val().length,
			current4 = $('#current4'),
			maximum4 = $('#maximum4'),
			theCount4 = $('#the-count4');
		current4.text(characterCount4);
	});
	$('#the-message').keyup(function() {
		var characterCount5 = $(this).val().length,
			current5 = $('#current5'),
			maximum5 = $('#maximum5'),
			theCount5 = $('#the-count5');
		current5.text(characterCount5);
	});
});
