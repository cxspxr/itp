module.exports = function() {
	$(document).ready(
		function(){
			// $('#about').click(function(){
			// 	$("html, body").animate({ scrollTop: 0 }, "slow");
			// }

		// );
			$('#contacts').click(function(){
				$('html, body').animate({
    				scrollTop: $("#contacts-anchor").offset().top
				}, 1000);
			});
			$('#events').click(function(){
				$('html, body').animate({
    				scrollTop: $(".slider-section").offset().top
				}, 1000);
			});
			$('#about').click(function(){
				$('html, body').animate({
    				scrollTop: $(".about").offset().top
				}, 1000);
			});
		});
}