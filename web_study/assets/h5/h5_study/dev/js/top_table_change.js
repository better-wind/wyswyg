/**
 * Created by ¼Ñ·é on 2015/12/29.
 */
(function($){
    Top_table = {
        init:function(){
            var self = this;
            self.currenttime = $('body').attr('data-time');
            self.J_date_ul = $('.J_date_ul');
            self.J_date_li = $('.J_date_li');
            self.J_show_img = $('.J_show_img');
            self.eventing();

        },
        eventing:function(){
            var self = this;
            self.date_tab_change();
            LR();
        },
        date_img_table_left:function(){
            var self = this;
            var _i = self.date_img_table_nth();
            self.J_show_img.removeClass('show_block show_left show_right hide_left hide_right');
            self.J_date_li.removeClass('current add_current remove_current');
            self.J_show_img.eq(_i).addClass('hide_left');
            //self.J_date_li.eq(_i).addClass('remove_current');
            if(_i > 3){
                self.J_show_img.eq(0).addClass('show_block show_left');
                self.J_date_li.eq(0).addClass('current add_current');
            }
            else{
                self.J_show_img.eq(_i+1).addClass('show_block show_left');
                self.J_date_li.eq(_i+1).addClass('current add_current');
            }

        },
        date_img_table_right:function(){
            var self = this;
            var _i = self.date_img_table_nth();
            self.J_show_img.removeClass('show_block show_left show_right hide_left hide_right');
            self.J_date_li.removeClass('current add_current remove_current');
            self.J_show_img.eq(_i).addClass('hide_right');
            //self.J_date_li.eq(_i).addClass('remove_current');
            if(_i < 1){
                self.J_show_img.eq(4).addClass('show_block show_right');
                self.J_date_li.eq(4).addClass('current add_current');
            }
            else{
                self.J_show_img.eq(_i-1).addClass('show_block show_right');
                self.J_date_li.eq(_i-1).addClass('current add_current');
            }
        },
        date_tab_change:function(){
            var self = this;
            self.J_date_li.on('click',function(){
                var _i = self.data_tab_change_nth();
                var _n_i = $(this).index();
                self.J_date_li.removeClass('current add_current remove_current');
                self.J_date_li.eq(_i).removeClass('current remove_current');
                $(this).addClass('current add_current');
                self.J_show_img.removeClass('show_block show_right show_left hide_right hide_left');
                if(_i > _n_i){
                    self.J_show_img.eq(_n_i).addClass('show_block show_right');
                    self.J_show_img.eq(_i).addClass('hide_right');
                }
                if(_i < _n_i){
                    self.J_show_img.eq(_n_i).addClass('show_block show_left');
                    self.J_show_img.eq(_i).addClass('hide_left');
                }

            });
        },
        data_tab_change_nth:function(){
            var self = this;
            var i=0;
            for(var _i =0;_i<self.J_date_li.length;_i++){
                if(self.J_date_li.eq(_i).hasClass('current')){
                    i=_i;
                }

            }
            return i;

        },
        date_img_table_nth:function(){
            var self = this;
            var i=0;
            for(var _i =0;_i<self.J_show_img.length;_i++){
                if(self.J_show_img.eq(_i).hasClass('show_block')){
                    i=_i;
                }

            }
            return i;

        },
        li_nth_date:function(){
            var self = this;
            var i=0;
            for(var _i =0;_i<self.J_date_li.length;_i++){
                if(self.J_date_li.eq(_i).hasClass('current')){
                    i=_i;
                }
            }
            return i;
        },
    }
    $(function(){
        Top_table.init();
    })
    function LR(){
        var start_X;
        var end_X;
        mousedown = false;

        function eventDown(e){
            e.preventDefault();
            mousedown = true;
            if(e.changedTouches){
                e = e.changedTouches[e.changedTouches.length-1];
            }
            start_X = e.pageX;
            end_X = e.pageX;
        }
        function eventUp(e){
            e.preventDefault();
            if(end_X - start_X > 50){
                Top_table.date_img_table_right();
            }
            if(start_X - end_X > 50){
                Top_table.date_img_table_left();
            }

            mousedown = false;


        }
        function eventMove(e){
            e.preventDefault();
            if(mousedown) {
                if(e.changedTouches){
                    e = e.changedTouches[e.changedTouches.length-1];
                }
                end_X = e.pageX;
            }
        }

        var wrap = document.getElementById('J_show_img_wrap');
        wrap.addEventListener('touchstart', eventDown);
        wrap.addEventListener('touchend', eventUp);
        wrap.addEventListener('touchmove', eventMove);
    }
})(Zepto)