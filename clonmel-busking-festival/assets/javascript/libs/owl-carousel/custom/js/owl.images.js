/*------------------------------------------------------------------------------
	Custom Owl Carousel Javascript for Photo Gallery
------------------------------------------------------------------------------*/

$(document).ready(function() {
	var owl = $("#photos");

	owl.owlCarousel	({
		items: 2,
		pagination: true,
		autoPlay: 2500,
		slideSpeed: 200,
		paginationSpeed: 800,
		jsonPath: "assets/javascript/libs/owl-carousel/custom/json/images.json",
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
		for (var i in data["items"]) {
			var src = data["items"][i].src;
			var alt = data["items"][i].alt;
			var caption = data["items"][i].caption;
			content += "<div><img src=\"" + src + "\" alt=\"" + alt + "\"><br><p>\"" + caption + "\"</p></div>"
		}
		$("#photos").html(content);
	}
});
