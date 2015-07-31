$(document).ready(function() {
  //Owl Carousel
  $("#music").owlCarousel({
    singleItem: true,
    navigation: true,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    slideSpeed: 200,
    paginationSpeed: 800,
  });
  $("#photo").owlCarousel({
    singleItem: true,
    navigation: true,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    autoPlay: 2500,
    slideSpeed: 200,
    paginationSpeed: 800,
  });
});
