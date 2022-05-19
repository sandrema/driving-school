$(document).ready( function(){

    $('.slider').slick({
        arrows:false,
        slidesToShow:1,
        variableWidth: true,
    });

    const imgs = $('.img-sm');
    const answer = $('.questions__answer');
    const questItem = $('.questions__items');
    const formInp = $('.form__user');
    const arrowLeft = $('.arrow-left');
    const arrowRight = $('.arrow-right');
    const links = $('.link');
    const linkDark = $('.link-d');
    const btnRed = $('.btn-red');


    $.each(btnRed, function(i, value){
        $(value).hover(function(){
            $(value).css('background-color', 'rgba(211, 65, 55, 1)');
        }, function(){
            $(value).css('background-color', 'rgba(255, 87, 77, 1)');
        });
    });

    $.each(linkDark, function(i, value){
        $(value).hover(function(){
            $(value).css('color', 'rgba(43, 142, 83, 1)');
            $(value).css('font-weight', 'bold');
        }, function(){
            $(value).css('color', 'rgba(255, 255, 255, 1)');
            $(value).css('font-weight', 'normal');
        });
    });

    $.each(links, function(i, value){
        $(value).hover(function(){
            $(value).css('color', 'rgba(43, 142, 83, 1)');
            $(value).css('font-weight', 'bold');
        }, function(){
            $(value).css('color', 'rgba(16, 16, 16, 1)');
            $(value).css('font-weight', 'normal');
        });
    });

    $.each(arrowLeft, function(i, value){
        $(value).hover(function(){
            $(value).attr("src","imgs/arrow-left-hover.png");
        }, function(){
            $(value).attr("src","imgs/arrow-left.png");
        });
    });

    $.each(arrowRight, function(i, value){
        $(value).hover(function(){
            $(value).attr("src","imgs/arrow-right-hover.png");
        }, function(){
            $(value).attr("src","imgs/arrow-right.png");
        });
    });



    $.each(formInp, function(i, value){
        $(value).focus(function(){
            $(value).addClass('active-input');
        });
        $(value).focusout(function(){
            $(value).removeClass('active-input');
        });
    });


    $('.dop-info').click(()=>{
        $(answer[0]).css('display', 'block');
        $(questItem[0]).css('display', 'none');
    });

    $('.close-answer').click(()=>{
        $(answer[0]).css('display', 'none');
        $(questItem[0]).css('display', 'inherit');
    });

    $('.btn-left').click(function(e){
        $('.slider').slick('slickPrev');
        $('.slider').on('afterChange', function(event, slick, currentSlide){
            let current = currentSlide+1;
            $('.counter__active').html(current);
        });
        $('.slider').on('beforeChange', function(event, slick, currentSlide){
            $.each(imgs, function(i, value){
                if(i == currentSlide) {
                    $(value).addClass('img-xl');
                } 
                else {
                    $(value).removeClass('img-xl');
                }
            });
        });
    });

    $('.btn-right').click(function(e){
        $('.slider').slick('slickNext');
        $('.slider').on('afterChange', function(event, slick, currentSlide){
            let current = currentSlide+1;
            $('.counter__active').html(current);

        });
        $('.slider').on('beforeChange', function(event, slick, currentSlide){
            $.each(imgs, function(i, value){
                if(i == currentSlide) {
                    $(value).addClass('img-xl');
                } 
                else {
                    $(value).removeClass('img-xl');
                }
            });
        }); 
    });


});