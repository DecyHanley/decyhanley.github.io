$(document).ready(function() {

  //Cover for Pace
  $(window).load(function() {
      $(".cover").fadeOut(2000);
  });

  //Animated Logo
  $(window).on("load", function() {
    $('#logo').toggleClass('appear', $(document).scrollTop() <= 0);
  });
  $(window).on("scroll touchmove", function() {
    $('#logo').toggleClass('tiny', $(document).scrollTop() > 100);
  });

  //Menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  //Menu Toggle Fade In
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

  $("#iframe").fancybox({
    'onStart ': function(){ $.fancybox.hideActivity },
    'onComplete' : function(){ $.fancybox.hideActivity },
    width: '100%',
    height: '100%',
    autoScale: false,
    titlePosition: 'over',
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'iframe',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
});
