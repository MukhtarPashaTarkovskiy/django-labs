$(document).ready(function () {

    // --- Подсветка поста при наведении (one-post-shadow -> opacity 0.1 / 0) ---
    $('.one-post').hover(
        function (event) {
            $(event.currentTarget)
                .find('.one-post-shadow')
                .stop(true)
                .animate({ opacity: '0.1' }, 300);
        },
        function (event) {
            $(event.currentTarget)
                .find('.one-post-shadow')
                .stop(true)
                .animate({ opacity: '0' }, 300);
        }
    );


    // --- эффект для логотипа (наводим на шапку, анимируем img) ---
    var $logo = $('.header img');

    function initLogoHover() {
    var w0 = $logo.width();
    var h0 = $logo.height();
    var ratio = h0 / w0;

        $('.header').hover(
            function () {
                $logo.stop(true).animate({
                    width: (w0 + 20) + "px",
                    height: ((w0 + 20) * ratio) + "px"
                }, 200);
            },
            function () {
                $logo.stop(true).animate({
                    width: w0 + "px",
                    height: h0 + "px"
                }, 200);
            }
        );
    }

    // если картинка уже загружена — сразу
    if ($logo[0] && $logo[0].complete) {
        initLogoHover();
    } else {
        $logo.on('load', initLogoHover);
    }


});