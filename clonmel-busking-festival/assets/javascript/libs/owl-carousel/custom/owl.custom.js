$(document).ready(function() {
  //Owl Carousel
  $("#podcasts").owlCarousel({
    singleItem: true,
    navigation: true,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    slideSpeed: 200,
    paginationSpeed: 800,
  });

  $("#photos").owlCarousel({
    jsonPath: "assets/javascript/libs/owl-carousel/custom/owl.custom.json",
    jsonSuccess: customDataSuccess
  });
  function customDataSuccess(data) {
    var content = "";
    for (var i in data["items"]) {

      var img = data["items"][i].img;
      var alt = data["items"][i].alt;
      var caption = data["items"][i].caption;

      content += "<img src=\"" + img + "\" alt=\"" + alt + "\" caption=\"" + caption + "\">"
    }
    $("#photos").html(content);
  }
  
  $("#photos").owlCarousel({
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
