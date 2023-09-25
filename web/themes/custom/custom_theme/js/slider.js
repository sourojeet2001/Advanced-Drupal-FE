(function ($, Drupal, once) {
  Drupal.behaviors.sliderBehaviour = {
    attach: function (context, settings) {
      once('newSlider', 'html', context).forEach(function (element) {
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          autoplay: true,
          centerMode: true,
          focusOnSelect: true
        });
      })
    }
  };
})(jQuery, Drupal, once);