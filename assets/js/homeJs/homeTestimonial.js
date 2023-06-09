//Testimonial Slider
var swiper = new Swiper('.testi-slider', {
    spaceBetween: 300,
    navigation: {
        nextEl: '.testi-next',
        prevEl: '.testi-prev',
    },
    pagination: {
        el: '.testi-pagination',
        clickable: true,
    },
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: true,
    },
    loop: true,
});
var swiper = new Swiper('.testi-slider4', {
    pagination: {
    el: '.testi-slider4-pagination',
    clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
});

$('.testi-pagination span, .testi-prev, .testi-next').on('click', function() {
    $('svg circle').toggleClass('animation-one');
    $('svg circle').toggleClass('animation-two');
});

//The Testimonial Tabs
$('.testimonial .section-wrapper ul.nav.nav-tabs li').on('click', function(){
    $('.testimonial .section-wrapper ul.nav.nav-tabs li').removeClass("active");
    $(this).addClass("active");
});