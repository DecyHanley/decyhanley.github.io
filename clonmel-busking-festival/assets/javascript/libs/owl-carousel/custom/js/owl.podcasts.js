/*------------------------------------------------------------------------------
	Custom Owl Carousel Javascript for Podcasts
------------------------------------------------------------------------------*/

$(document).ready(function() {
	var owl = $("#podcasts");

	owl.owlCarousel	({
		singleItem: true,
		pagination: true,
		//transtionStyle: "backSlide",
		slideSpeed: 200,
		paginationSpeed: 800,
		jsonPath: "assets/javascript/libs/owl-carousel/custom/json/podcasts.json",
		jsonSuccess: customDataSuccess
	});
	$("#next").click(function(){
		owl.trigger('owl.next');
	});
	$("#prev").click(function(){
		owl.trigger('owl.prev');
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
