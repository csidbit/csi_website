(function ($) {
	'use strict';
    var ThemeBuilder = function () {

		/* Set Counter Up Function */
		var setCounterUp = function () {
			if (!checkSelectorExistence('.counters')) { return; }
			jQuery('.counters').counterUp({
				delay: 10,
				time: 3000
			});
		}

		/* Function ============ */
		return {
			afterLoadThePage: function () {
				setCounterUp();
			},
		}

	}(jQuery);

	/* jQuery Window Load */
	jQuery(window).on("load", function (e) { ThemeBuilder.afterLoadThePage(); });
})(jQuery);