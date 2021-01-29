$(document).ready(function() {
    $(function(){
        $('.info__item').each(function(){
            $(this).on('click', function () {
                $(this).toggleClass('info_show');
            });
        });
    });
 });