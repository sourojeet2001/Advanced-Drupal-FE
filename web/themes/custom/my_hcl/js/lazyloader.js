(function ($, Drupal, once) {
  Drupal.behaviors.lazySliderBehaviour = {
    attach: function (context, settings) {
      once('lazySlider', 'html', context).forEach(function (element) {
        $('.multiple-items').slick({
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1
        });
      })
    }
  };
})(jQuery, Drupal, once);