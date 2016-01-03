(function($){
    var StarrySky = {
        init:function(){
            var self = this;
            self.J_sky_wrap = $('.J_sky_wrap');
            self.sky_init();
            self.eventing();

        },
        eventing:function(){
            var self = this;

        },
        sky_init:function(){
            var self = this;
            self.J_sky_wrap.css('height',$(window).height()+'px');
        }
    }
    $(function(){
        StarrySky.init();
    })
})(jQuery)