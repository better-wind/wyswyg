/**
 * Created by ¼Ñ·é on 2015/11/17.
 */
(function($){
    var six_z = {
        init: function () {
           var self = this;
            self.J_six = $('.J_six');
            self.J_three = $('.three div');
            self.event();
        },
        event:function(){
            var self = this;
            self.J_six.on('click',function(){
                self.J_six.show();
                $(this).hide(100);

            });
            self.J_three.on('click',function(){
                var color = $(this).css('background-color');
                self.J_three.css({'opacity':0.6,'z-index':99});
                $(this).parent('.three').find('div').css({'opacity':1,'z-index':100});

            })
        }
    }
    $(function(){
        six_z.init();
    });

})(jQuery)