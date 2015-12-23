(function($){
    var Christmas = {
        init:function(){
            var self = this;
            self.J_wrap = $('.J_wrap');
            self.J_gift_wrap = $('.J_gift_wrap');
            self.J_gift_box = $('.J_gift_box');
            self.J_wrap.css('height',$(window).height());
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.text_init();
            self.gift_init();
            self.snow_init();
        },
        gift_init:function(){
            var self = this;
            var gift_show = setTimeout(function(){
                self.J_gift_box.show();
                self.J_gift_box.addClass('gift_box_show');
            },6000);
            var gift_rotate = setTimeout(function(){
                self.J_gift_box.removeClass('gift_box_show').addClass('gift_box_rotate');
            },8000);

        },
        text_init:function(){
            var self = this;
            var _html = ' <img class="bg_text" src="http://xqproduct.xiangqu.com/FsWapgGpr_rrZoj_0B2OAlaiVQcR">';
            var text = setTimeout(function(){
                self.J_wrap.append(_html);
            },5000)
        },
        snow_init:function(){
            var self = this;
            self.snow_img_0 = new Image();
            self.snow_img_1 = new Image();
            self.snow_img_2 = new Image();
            self.snow_img_3 = new Image();
            self.snow_img_0.src ='http://xqproduct.xiangqu.com/Ft19JuXW8IMbrr3uRT8Qm5nh2MoR';
            self.snow_img_1.src ='http://xqproduct.xiangqu.com/FglASA5GrVrrnBjYsGYoZ4oNPjf2';
            self.snow_img_2.src ='http://xqproduct.xiangqu.com/FlLJqIJb31s2RiwQpMxJ1lvAF8mX';
            self.snow_img_3.src ='http://xqproduct.xiangqu.com/FglASA5GrVrrnBjYsGYoZ4oNPjf2';
            self.sonw_img =[
                self.snow_img_0.src,
                self.snow_img_1.src,
                self.snow_img_2.src,
                self.snow_img_3.src
            ]
            self.new_snow();
        },
        remove_all:function(){
            var self = this;
            if($('.win_show').length>50){
                $('.win_show').remove();
            }
        },
        new_snow:function(){
            var self= this;
            function settime(_a){
                var _X = parseInt(Math.random()*$(window).width());
                var _Y = parseInt(Math.random()*-50);
                if(_X > $(window).width()-22){
                    _X = $(window).width()-22;
                }
                var _snow_bg = _X%8;
                console.log(_snow_bg);
                var _html = '<div class="win_show snow_bg_'+_snow_bg+'" style="top:'+_Y+'px;left:'+_X+'px;"></div>'
                self.J_wrap.append(_html);
                self.drop_snow();
                var a = setTimeout(function(){
                    if(_a < 200){
                        _a = 300;
                    }
                    settime(_a-50);
                },_a);
            }
            settime(2000);
        },
        drop_snow:function(){
             var self = this;
             $('.win_show').each(function(index,ele){
                 $(this).addClass('drop');
                 var _html = $(this);
                 var hide = setTimeout(function(){
                     _html.remove();
                 },10000)
             });
            self.remove_all();
        },
        no_sign:function(str){
            if(!str){
                return false;
            }
            return str.split('%')[0];

        }
    }
    $(function(){
        Christmas.init();
    })
})(Zepto)