$(document).ready(function() {

  // Owl Carousel Photos
  $("#photos").owlCarousel({
    items: 2,
    navigation: true,
    pagination: true,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    autoPlay: 2500,
    slideSpeed: 200,
    paginationSpeed: 800,
    jsonPath: "assets/javascript/libs/owl-carousel/custom/json/images.json",
    jsonSuccess: customDataSuccess
  });

  function customDataSuccess(data) {
    var content = "";
    for (var i in data["items"]) {

      var src = data["img"][i].src;
      var alt = data["img"][i].alt;
      var caption = data["span"][i].caption;

      content += "<img src=\"" + src + "\" alt=\"" + alt + "\"><br><span>caption=\"" + caption + "\"</span>"
    }
    $("#photos").html(content);
  }
});
