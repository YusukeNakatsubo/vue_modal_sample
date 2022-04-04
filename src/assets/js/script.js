/**
 * Roader
 *
 */
const LOADER = document.getElementById('js-loader');
window.addEventListener('load', () => {
  const ms = 400;
  LOADER.style.transition = 'opacity ' + ms + 'ms';

  const loaderOpacity = () => {
    LOADER.style.opacity = 0;
  }
  const loaderDisplay = () => {
    LOADER.style.display = 'none';
  }

  setTimeout(loaderOpacity, 1);
  setTimeout(loaderDisplay, ms);
}, false);

/**
 * Smooth Scroll
 *
 */
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  easing: 'easeInOutCubic',
  offset: 93
});

/**
 * Coupon
 *
 */
$(function() {
  $(function() {
    $('.js_copy_target').on('click', function() {
      var target = $(this).data('target');
      var coupon = document.getElementById(target);
      coupon.select();
      document.execCommand('copy');
      if(coupon.value.length > 0) {
        var popup = document.getElementById('js_popup_success');
        $(popup).fadeIn('slow', function () {
          $(this).delay(2000).fadeOut('slow');
        });
      } else {
        var popup = document.getElementById('js_popup_failure');
        $(popup).fadeIn('slow', function () {
          $(this).delay(2000).fadeOut('slow');
        });
      };
    });
  });
});
