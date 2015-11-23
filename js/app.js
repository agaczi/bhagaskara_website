//STICKY MENU

$(document).ready(function(){

    var menu = $(".menu");
    var menuStartPosition = menu.offset().top;
    var spacer = $("#stickyMenu");

    $(window).on("scroll", function(event){
        if($(window).scrollTop() > menuStartPosition){
            menu.parent().addClass("sticky");
            spacer.height(menu.outerHeight());
        }else{
            menu.parent().removeClass("sticky");
            spacer.height(0);
        }
    });
});

