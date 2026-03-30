$(document).ready(function () {
  var $layers = $('.icons-for-parallax img');
  var $logo = $('.logo');

  var lastScroll = 0;
  var ticking = false;

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function update() {
    var scrolled = lastScroll;

    var vh = window.innerHeight || 800;
    var amp = clamp(vh / 800, 0.9, 1.6);

    // Иконки: передний слой движется быстрее, задний медленнее
    for (var i = 0; i < $layers.length; i++) {
      var baseSpeed = 0.46 - i * 0.12;   // 0.46 / 0.34 / 0.22
      var y = scrolled * baseSpeed * amp;
      y = clamp(y, 0, 220);
      $layers.eq(i).css('transform', 'translateY(' + y + 'px)');
    }

    // Логотип
    var yLogo = scrolled * 0.15 * amp;
    yLogo = clamp(yLogo, 0, 60);
    $logo.css('transform', 'translateY(' + yLogo + 'px)');

    ticking = false;
  }

  $(window).on('scroll', function () {
    lastScroll = $(window).scrollTop();
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });

  lastScroll = $(window).scrollTop();
  update();
});

