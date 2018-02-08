module.exports = function() {
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});
	});

}
