/**
 * Created by Elaskalani1 on 9/3/2014.
 */

var main = function(){
    $('.dropdown-menu').hide();
    $('.carousel').carousel({
        interval: 5000
    });
    $('.mainmenu').hover(function(){

        $('.dropdownmenu').toggle();
        $('subul').hide();

    });

    $('.suba').hover(function(){

        $('.subul').toggle();


    });

    $('.carousel').click(function(){
        $(this).carousel('next');

    });

    $(document).keydown(function(event){
        if(event.which===39){
            $(this).carousel('next');
        }else if(event.which===37){$(this).carousel('prev');}

    });

    $('.project').hover(function(){

        $(this).toggleClass('projecthover');

    });


};



$(document).ready(main);