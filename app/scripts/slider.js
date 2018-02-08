module.exports = function() {
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			nav:true,
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

	$('.owl-dot').click(function () {
		owl.trigger('to.owl.carousel', [$(this).index(), 300]);
	});
}
