$(function(){
    $('.header-content').height($('.header-content').width()/0.64);

    $(window).resize(function(){
        $('.header-content').height($('.header-content').width()/0.64);
    });
});
$(function(){
    $('.specifications-content').height($('.specifications-content').width()/0.4);

    $(window).resize(function(){
        $('.specifications-content').height($('.specifications-content').width()/0.4);
    });
});
$(function(){
    $('.size-content').height($('.size-content').width()/0.32);

    $(window).resize(function(){
        $('.size-content').height($('.size-content').width()/0.32);
    });
});
$(function(){
    $('.title-wrapper').height($('.title-wrapper').width()/5.7);

    $(window).resize(function(){
        $('.title-wrapper').height($('.title-wrapper').width()/5.7);
    });
});
$(function(){
    $('.in-stock-item').height($('.in-stock-item').width()/0.641);

    $(window).resize(function(){
        $('.in-stock-item').height($('.in-stock-item').width()/0.641);
    });
});

$(document).ready(function () {
    $(".reviews-slider").slick({
        }
    );
});
$(document).ready(function () {
    $("#body").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});