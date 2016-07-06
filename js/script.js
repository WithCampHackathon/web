var zoom = 0;

$(document).ready(function() {
    $(window).resize();
});
$(window).resize(function() {
    $('#cover-picture').height($(this).width() * 251 / 720);
    if ($(this).width() <= 1440 && zoom != 1) {
        $.each($('img'), function (k, v) {
            $(this).attr('src', $(this).data('img') + '.png');
        });
        zoom = 1;
    } else if ($(this).width() <= 1920 && zoom != 2) {
        $.each($('img'), function (k, v) {
            $(this).attr('src', $(this).data('img') + '@2x.png');
        });
        zoom = 2;
    } else if ($(this).width() > 1920 && zoom != 3) {
        $.each($('img'), function (k, v) {
            $(this).attr('src', $(this).data('img') + '@3x.png');
        });
        zoom = 3;
    }
});
