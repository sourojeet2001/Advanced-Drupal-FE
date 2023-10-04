(function ($, Drupal, once) {
  Drupal.behaviors.sliderBehaviour = {
    attach: function (context, settings) {
      once('newSlider', 'html', context).forEach(function (element) {
        $('.one-time').slick({
          arrows: false,
          autoplay: true,
          infinite: true,
          speed: 100,
          slidesToShow: 1,
          adaptiveHeight: true
        });
      })
    }
  };
})(jQuery, Drupal, once);