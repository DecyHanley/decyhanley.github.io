$(document).ready(function() {

  //Owl Carousel Podcasts
  $("#podcasts").owlCarousel({
    items: 2,
    navigation: true,
    pagination: true,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    slideSpeed: 200,
    paginationSpeed: 800,
    jsonPath: "assets/javascript/libs/owl-carousel/custom/json/podcasts.json",
    jsonSuccess: customDataSuccess
  });

  function customDataSuccess(data) {
    var content = "";
    for (var i in data["items"]) {
      var src = data["items"][i].src;
      var width = data["items"][i].width;
      var height = data["items"][i].height;
      content += "<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\">"
    }
    $("#podcasts").html(content);
  }
});
