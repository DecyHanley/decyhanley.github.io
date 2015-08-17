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

      var url = data["items"][i].url;
      var params = data["items"][i].params;
      var width = data["items"][i].width;
      var height = data["items"][i].height;
      var iframe = data["items"][i].iframe;

      content += "[soundcloud url=\"" + url + "\"  params=\"" + params + "\" width=\"" + width + "\" height=\"" + height + "\" iframe=\"" + iframe + "\"/]"
    }
    $("#podcasts").html(content);
  }
});
