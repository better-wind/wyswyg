/**
 * Created by �ѷ� on 2015/11/18.
 */
(function($){
    var Nav = {
        init:function(){
            var self = this;
            self.J_nav_fix = $('.J_nav_fix span');
            self.J_content = $('.J_content');
            self.J_left_nav = $('.J_left_nav');
            self.J_top_nav = $(".J_top_nav");
            self.J_menu_wrap = $('.J_menu_wrap');
            self.J_sub_menu_nav = $('.J_sub_menu_nav');
            self.J_menu_a = $('.J_left_nav div a');
            self.J_menu_sub = $('.J_menu_sub section');

            self.eventing();
            self.menu_sub();


        },
        eventing:function(){
            var self = this;
            self.J_content.on('click',function(){

            })
            self.J_nav_fix.on('click',function(){

                if($(this).hasClass('open')){
                    self.J_content.animate({top:'30px',left:'240px'},1000);
                    self.J_content.removeClass('b_adiu_B').addClass('b_radiu');
                    self.J_left_nav.removeClass('left_nav_close').addClass('left_nav_open');
                    self.J_top_nav.removeClass('top_nav_close').addClass('top_nav_open');
                    self.J_menu_wrap.removeClass('menu_wrap_hide').addClass('menu_wrap_show');
                    if(!self.J_menu_a.hasClass('onclick')){
                        self.J_menu_a.eq(4).addClass('onclick');
                        self.J_menu_sub.eq(4).show();
                    }

                }
                else{
                    self.J_content.animate({top:'0px',left:'0px'},1000);
                    self.J_content.removeClass('b_radiu').addClass('b_radiu_B');
                    self.J_left_nav.removeClass('left_nav_open').addClass('left_nav_close');
                    self.J_top_nav.removeClass('top_nav_open').addClass('top_nav_close');
                    self.J_menu_wrap.removeClass('menu_wrap_show').addClass('menu_wrap_hide');

                }
                $(this).toggleClass('open');
                $(this).toggleClass('close');


            });



        },
        menu_sub:function(){
            var self = this;
            self.J_menu_a.on('click',function(){
                var _i = $(this).index();
                self.J_menu_a.removeClass('onclick').eq(_i).addClass('onclick');
                self.J_menu_sub.hide().eq(_i).show();
            })

        }

    }
    $(function(){
       Nav.init();
    });
})(jQuery)