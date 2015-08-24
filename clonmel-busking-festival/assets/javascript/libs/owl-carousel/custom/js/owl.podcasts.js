/*------------------------------------------------------------------------------
	Custom Owl Javascript for Podcasts
------------------------------------------------------------------------------*/

$(document).ready(function() {
	$("#podcasts").owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: true,
		transtionStyle: backSlide,
		navigationText: [
			"<i class='fa	fa-1x fa-arrow-left'></i>",
			"<i class='fa	fa-1x fa-arrow-right'></i>"
		],
		slideSpeed: 200,
		paginationSpeed: 800,
		jsonPath: "assets/javascript/libs/owl-carousel/custom/json/podcasts.json",
		jsonSuccess: customDataSuccess
	});
	function customDataSuccess(data) {
		var content = "";
		for (var j in data["items"]) {
			var scrolling = data["items"][j].scrolling;
			var frameborder = data["items"][j].frameborder;
			var src = data["items"][j].src;
			var caption = data["items"][j].caption;
			content += "<div><iframe scrolling=\"" + scrolling + "\" frameborder=\"" + frameborder + "\" src=\"" + src + "\"></iframe><br><p>\"" + caption + "\"</p></div>"
		}
		$("#podcasts").html(content);
	}
});
