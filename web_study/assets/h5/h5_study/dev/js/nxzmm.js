/**
 * Created by �ѷ� on 2015/11/27.
 */
(function($){
    var nxzmm = {
        init:function(){
            var self = this;
            self.J_left = $('.J_left');
            self.J_right = $('.J_right');
            self.J_li = $('.J_ul_wrap li');
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.J_left.on('touchstart',function(){
                var _i = self.li_nth();
                console.log(_i);
                self.J_li.removeClass('center_show right_show left_show center_left_hide right_right_show right_left_hide left_left_hide');
                self.J_li.removeClass('center_right_hide left_left_show left_right_hide right_right_hide');

                self.J_li.eq(_i).removeClass('center_show').addClass('left_show center_left_hide');
                if(_i == 10){
                    self.J_li.eq(_i+1).removeClass('right_show').addClass('right_left_hide center_show');
                    self.J_li.eq(0).removeClass('right_show').addClass('right_right_show right_show');
                }
                if(_i == 11 ){
                    self.J_li.eq(0).removeClass('right_show').addClass('right_left_hide center_show');
                    self.J_li.eq(1).removeClass('right_show').addClass('right_right_show right_show');
                }
                else{
                    self.J_li.eq(_i+1).removeClass('right_show').addClass('right_left_hide center_show');
                    self.J_li.eq(_i+2).addClass('right_right_show right_show');
                }


                self.J_li.eq(_i-1).removeClass('left_show').addClass('left_left_hide');
            })
            self.J_right.on('touchstart',function(){
                var _i = self.li_nth();
                console.log(_i);
                self.J_li.removeClass('center_show right_show left_show center_left_hide right_right_show right_left_hide left_left_hide');
                self.J_li.removeClass('center_right_hide left_left_show left_right_hide right_right_hide');
                self.J_li.eq(_i).removeClass('center_show').addClass('right_show center_right_hide');
                self.J_li.eq(_i-1).removeClass('left_show').addClass('left_right_hide center_show');
                self.J_li.eq(_i-2).addClass('left_left_show left_show');


                self.J_li.eq(_i+1).removeClass('right_show').addClass('right_right_hide');
            })
        },
        li_nth:function(){
            var self = this;
            var _i;
            for(var i =0 ;i<self.J_li.length;i++){
                if(self.J_li.eq(i).hasClass('center_show')){
                    _i = i;
                }
            }
            return _i;
        }
    }
    $(function(){
     nxzmm.init();
 })
})(Zepto)