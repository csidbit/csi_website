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
	var BasicFunction = function () {
		var checkSelectorExistence = function (selectorName) {
			if (jQuery(selectorName).length > 0) { return true; } else { return false; }
		};

		var setTestimonialCarousel = function () {
			if (!checkSelectorExistence('.testimonial-carousel')) { return; }

			jQuery('.testimonial-carousel').owlCarousel({
				loop: true,
				autoplay: true,
				margin: 30,
				nav: true,
				dots: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					1024: {
						items: 2
					},
					1200: {
						items: 2
					}
				}
			});

		}

		return {
			initialHelper: function () {
				setTestimonialCarousel();
			}
		}

	}(jQuery);
	
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

