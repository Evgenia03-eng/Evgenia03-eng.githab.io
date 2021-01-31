$(document).ready(function() {
    $(function(){
        $('.block__item').each(function(){
            $(this).on('click', function () {
                $(this).toggleClass('block_show');
            });
        });
    });

    $('.header__hamburger').on('click', function () {
        $('.menu').toggleClass('menu_show');
    });

 });