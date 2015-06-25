$(document).ready(function()	{
  //Owl Carousel
  $("#photo").owlCarousel({
    items: 2,
    navigation : true,
    navigationText: [
    "<i class='fa  fa-1x fa-arrow-left'></i>",
    "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    autoPlay: 2500,
    slideSpeed : 200,
    paginationSpeed : 800,
  });

  $("#podcasts").owlCarousel({
    singleItem: true,
    navigation : true,
    navigationText: [
    "<i class='fa  fa-1x fa-arrow-left'></i>",
    "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    slideSpeed : 200,
    paginationSpeed : 800,
  });
});
