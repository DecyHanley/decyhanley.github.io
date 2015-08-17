$(document).ready(function() {

  //Owl Carousel Podcasts
  $("#podcasts").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    slideSpeed: 200,
    paginationSpeed: 800,
    jsonPath: "json/podcasts.json",
    jsonSuccess: customDataSuccess
  });

  function customDataSuccess(data) {
    var content = "";
    for (var i in data["items"]) {
      var scrolling = data["items"][i].scrolling;
      var frameborder = data["items"][i].frameborder;
      var src = data["items"][i].src;
      content += "<iframe scrolling=\"" + scrolling + "\" frameborder=\"" + frameborder + "\" src=\"" + src + "\">"
    }
    $("#podcasts").html(content);
  }

  // Owl Carousel Photos
  $("#photos").owlCarousel({
    items: 2,
    navigation: true,
    pagination: false,
    navigationText: [
      "<i class='fa  fa-1x fa-arrow-left'></i>",
      "<i class='fa  fa-1x fa-arrow-right'></i>"
    ],
    autoPlay: 2500,
    slideSpeed: 200,
    paginationSpeed: 800,
    jsonPath: "json/images.json",
    jsonSuccess: customDataSuccess
  });

  function customDataSuccess(data) {
    var content = "";
    for (var j in data["items"]) {
      var img = data["items"][j].img;
      var alt = data["items"][j].alt;
      content += "<img src=\"" + img + "\" alt=\"" + alt + "\">"
    }
    $("#photos").html(content);
  }
});
