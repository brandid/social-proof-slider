jQuery( document ).ready( function() {
	createSlider();
} );

document.addEventListener( 'gutenbergSlick', function( e ) {
	window.setTimeout( createSlider, 1000 );
}, false );

const createSlider = function() {
    jQuery(".social-proof-slider-wrap").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: false,
        pauseOnHover: false,
    });
};
