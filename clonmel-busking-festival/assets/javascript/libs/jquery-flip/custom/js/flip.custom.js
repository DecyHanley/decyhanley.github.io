/*------------------------------------------------------------------------------
	Custom jQuery Flip Javascript
------------------------------------------------------------------------------*/

$(document).ready(function() {
	$("#card").flip({
		axis: 'y',
		trigger: 'click',
		reverse: 'true',
		speed: 500,
		forceWidth: true,
		forceHeight: true
	});
});
