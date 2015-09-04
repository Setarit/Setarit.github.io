//hero background color animation
(function ($) {
	var i = 0;

	//get reference
	var hero = $(".hero");
	var colorsToFade = ["#c2c2ff", "#313983", "#1e2247"];

	window.setInterval(function() {
		hero.animate({backgroundColor:colorsToFade[i]}, 20000);
		i++;
		i = (i == colorsToFade.length) ? 0 : i;
	}, 20);
})(jQuery);