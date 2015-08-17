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
      var width = data["items"][i].width;
      var height = data["items"][i].height;
      var scrolling = data["items"][i].scrolling;
      var frameborder = data["items"][i].frameborder;
      var src = data["items"][i].src;

      content += "<iframe width=\"" + width + "\" height=\"" + height + "\" scrolling=\"" + scrolling + "\" frameborder=\"" + frameborder + "\" src=\"" + src + "\"></iframe>"
    }
    $("#podcasts").html(content);
  }
});
