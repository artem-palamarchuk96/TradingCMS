$(document).ready(function() {

	// fancybox
	$(".fancybox").fancybox();

	//Carousel
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 2,
		pagination: false,
		mouseDrag: false,
		slideSpeed: 800,
		rewindNav: false
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Top anchor
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

});