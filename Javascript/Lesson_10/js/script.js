$(function () {
    /* For carousel */

    $('.jcarousel').jcarousel({
        /*list: '.jcarousel-list',*/
        animation: 'slow',
        animation: {
            duration: 500,
            easing: 'linear',
            complete: function () {
            }
        }
    });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .on('click', function (e) {
            e.preventDefault();
        })
        .jcarouselControl({
            target: '+=1'
        });

    $("#country_id").selectbox();

    /* For checkbox */
    $('.nice-checkbox').mousedown(function () {
        changeCheck(jQuery(this));
    });
});