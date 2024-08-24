$(document).ready(function () {
    $('.slider__inner').slick({
        infinite: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png" alt="#"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="#"></button>'
    });
});