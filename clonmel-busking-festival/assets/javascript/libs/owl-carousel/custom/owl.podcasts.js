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
    for (var j in data["items"]) {
      var width = data["items"][j].width;
      var height = data["items"][j].height;
      var scrolling = data["items"][j].scrolling;
      var frameborder = data["items"][j].frameborder;
      var src = data["items"][j].src;
      var caption = data["item"][i].caption;

      content += "<div><iframe width=\"" + width + "\" height=\"" + height + "\" scrolling=\"" + scrolling + "\" frameborder=\"" + frameborder + "\" src=\"" + src + "\"></iframe><br><p>\"" + caption + "\"</p></div>"
    }
    $("#podcasts").html(content);
  }
});
