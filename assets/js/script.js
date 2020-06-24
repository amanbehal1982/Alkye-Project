$(function () {
    if ('.slider.length > 0') {
        var slider = $('.slider').slick({

            infinite: false,
            draggable: false,
            touchMove: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            appendDots: $('.slideControls'),
            dots: true,
            customPaging: function (slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                /* return '<a>' + ('0' + (i + 1)).slice(-2) + '</a>' + '/' + '0' + slider.slideCount; */
                return '<a>' + (i + 1) + '</a>' + '/' + slider.slideCount;
            },

            fnCanGoNext: function (instance, currentSlide) {

                var currentSlide = instance.$slides.eq(currentSlide);
                var checkbox = currentSlide.find("input[type=checkbox]");
                var radio = currentSlide.find("input[type=radio]");

                if (checkbox.is(':checked') || radio.is(':checked')) {
                    return true;
                } else {
                    return true;
                }

            }

        });
    }

});

$(document).ready(function(){
    $('.submit').click( function(event){
        event.preventDefault();
        $('#regForm').hide();
        $('.result-area').show();
    });
    $('.summary-box h2').click(function(){
        $(this).toggleClass('active-box').siblings('.summary-box ul.summary-list').toggle();
    });
});