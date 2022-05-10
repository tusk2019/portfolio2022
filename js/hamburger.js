$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
$(function () {
    $('#activeElements a[href]').click(function () {
        $('.hamburger').removeClass('active');
        $('.globalMenuSp').removeClass('active');
    });
});
$(function() {
    $(window).on('load resize', function() {
        var bodyW = $('body').width();
        $('.globalMenuSp').width(bodyW);
    });
});
$(function() {
    $(window).on('load resize', function() {
        var bodyW = $('body').width();
        $('.globalMenuSp').width(bodyW);
        var bodyW2 = $('body').outerWidth();
        $('.res-header').outerWidth(bodyW2);
    });
});