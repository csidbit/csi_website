// const counters = document.querySelectorAll('.counters');
// const speed = 200;

// counters.forEach(counter =>{
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const inc = target / speed;

//         if(count < target){
//             counter.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1);
//         } else {
//             count.innerText = target;
//         }
//     }

//     updateCount()
// });


/* Set Counter Up Function */
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
			}
		}

	}(jQuery);

	/* jQuery Window Load */
	jQuery(window).on("load", function (e) { ThemeBuilder.afterLoadThePage(); });
})(jQuery);