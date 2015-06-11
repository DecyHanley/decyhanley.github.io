// Closes the sidebar menu
$(document).ready(function()  {
  $("#menu-close").click(function(e)  {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  // Scrolls to the selected menu item on the page
  $(function()  {
    $('a[href*=#]:not([href=#])').click(function()  {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length)  {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});

//Carousel
$(document).ready(function(){
     $('#myCarousel').carousel({
       interval: 2500
     });
 });

//Back to top Button
$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  //Click event to scroll to top
  $('#back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });
});
