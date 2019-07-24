jQuery(function ($) {
    let main_menu = $('nav');
    $('.menu_btn').click(function () {
        if ($(main_menu).css('opacity') == 1){
            $(main_menu).slideUp(1000);
        }
        if ($(main_menu).css('display') == 'none') {
            $(main_menu).slideDown(1000);
        }
    });

    //Find tour slider
    let find_tour_v1 = $('.find_tour_variant').eq(0);
    let tour_w = $(find_tour_v1).width();
    let tours_count = $('.find_tour_variants>div>div').length - 1;

    $('.left_arr').click(function () {
        if ($(find_tour_v1).css('margin-left') == '0px'){
            $(find_tour_v1).animate({'margin-left' : "-"+tours_count*100+'%'}, 1000);
            $(tour_points).find('div').css('background', 'none');
            $(tour_points).find('div').eq(tours_count).css('background-color', '#585858');
        }else{
            $(find_tour_v1).animate({'margin-left' : "+=100%"}, 1000);
            for (let i = 0; i <= tours_count; i++){
                if ($(tour_points).find('div').eq(i).css('background-color') == 'rgb(88, 88, 88)'){
                    $(tour_points).find('div').css('background', 'none');
                    $(tour_points).find('div').eq(i-1).css('background-color', '#585858');
                    break;
                }
            }
        }
    });

    $('.right_arr').click(function () {
        if ($(find_tour_v1).css('margin-left') == -tours_count*tour_w+'px'){
            $(find_tour_v1).animate({'margin-left' : 0}, 1000);
            $(tour_points).find('div').css('background', 'none');
            $(tour_points).find('div').eq(0).css('background-color', '#585858');

        }else{
            $(find_tour_v1).animate({'margin-left' : "+=-100%"}, 1000);
            $(tour_points).find('div');
            for (let i = 0; i <= tours_count; i++){
                if ($(tour_points).find('div').eq(i).css('background-color') == 'rgb(88, 88, 88)'){
                    $(tour_points).find('div').css('background', 'none');
                    $(tour_points).find('div').eq(i+1).css('background-color', '#585858');
                    break;
                }
            }

        }

    });

    let tour_points = $('.tour_points');
    for (let i = 0; i <= tours_count; i++){
        $(tour_points).append("<div></div>");
    }
    
    $(tour_points).children('div').click(function () {
        $(tour_points).find('div').css('background', 'none');
        $(this).css('background-color', '#585858');
        $(find_tour_v1).animate({'margin-left' : "-"+$(this).index()*100+"%"}, 1000);
    });


    //Deals slider
    $('.deal_left, .deal_right').css('max-width' , 'none').width(($(window).width() - $('.deal').width() - 50)/2);

    $('.deal_right').click(function () {
        let ml = $('.deal').eq(1).width()*2+50;
        $('.deal').eq(0).animate({'margin-left' : '-='+ml+'px'}, 500, function () {
            let firstDeal = $('.deal').eq(0).detach().removeAttr('style');
            $('.deals').append(firstDeal);
        });
    });

    $('.deal_left').click(function () {
        let ml = $('.deal').eq(1).width()*2+50;
        $('.deal').eq(0).animate({'margin-left' : '+='+ml+'px'}, 500, function () {
            let lastDeal = $('.deal').last().detach();
            lastDeal.insertAfter($('.deal_right'));
            $('.deal').eq(1).removeAttr('style');
        });
    });
    
});