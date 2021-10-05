(function ($) {
"use strict";

$(document).ready(function(){

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

});

})(jQuery);	

(function($) {
	"use strict";
	$(window).on("scroll", function() {
		if ($("#content_oovwomi94").isOnScreen(0.01, 0.01)) {
			TweenLite.to("#content_oovwomi94", 500 / 1000, {
				opacity: "1",
				ease: "Circ.easeInOut",
				delay: "0.2",
			});

		}
	});
	$(window).scroll();
})(jQuery);
(function($) {
	"use strict";
	$(window).on("scroll", function() {});
	$(window).scroll();
})(jQuery);