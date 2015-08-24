/*------------------------------------------------------------------------------
	Custom Owl Javascript for Photo Gallery
------------------------------------------------------------------------------*/

$(document).ready(function() {
	$("#photos").owlCarousel({
		items: 2,
		navigation: true,
		pagination: true,
		transtionStyle: "scaleUp",
		navigationText: [
			"<i class='fa	fa-1x fa-arrow-left'></i>",
			"<i class='fa	fa-1x fa-arrow-right'></i>"
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
			var src = data["items"][i].src;
			var alt = data["items"][i].alt;
			var caption = data["items"][i].caption;
			content += "<div><img src=\"" + src + "\" alt=\"" + alt + "\"><br><p>\"" + caption + "\"</p></div>"
		}
		$("#photos").html(content);
	}
});
