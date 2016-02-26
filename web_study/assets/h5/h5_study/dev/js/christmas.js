(function($){
    var Christmas = {
        init:function(){
            var self = this;
            self.J_wrap = $('.J_wrap');
            self.J_gift_wrap = $('.J_gift_wrap');
            self.J_gift_box = $('.J_gift_box');
            self.J_gift_box_top = $('.J_gift_box_top');
            self.J_gift_box_bottom = $('.J_gift_box_bottom');
            self.J_wrap.css('height',$(window).height());
            self.J_top = $('.J_top');
            self.J_left_open = $('.J_left_open');
            self.J_right_open = $('.J_right_open');
            self.J_front_open = $('.J_front_open');
            self.J_behind_open = $('.J_behind_open');
            self.J_love = $('.J_love');
            self.J_ggl_wrap = $('.J_ggl_wrap');
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.text_init();
            self.gift_init();
            self.snow_init();
            self.my_gift_show();
            self.ggl_init();

        },
        love_heart_show:function(){
            var self = this;
            self.J_love.show().addClass('love_show');
            var ggl_show = setTimeout(function(){
                self.J_love.hide();
                $('.message').show();
                $('#myCanvas').show();
            },3000)
        },
        my_gift_show:function(){
            var self = this;
            self.J_gift_box.on('click',function(){
                $(this).removeClass('gift_box_rotate');
                self.J_gift_box_top.addClass('gift_box_top_open');
                self.J_gift_box_bottom.addClass('gift_box_bottom_open');
                self.J_left_open.addClass('left_open');
                self.J_right_open.addClass('right_open');
                self.J_front_open.addClass('front_open');
                self.J_behind_open.addClass('behind_open');
                var hide = setTimeout(function(){
                    self.J_gift_wrap.hide();
                },1000)
                var love_show = setTimeout(function(){
                    self.love_heart_show();
                    $('.bg_text').addClass('text_hug');
                },200)

            })
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
                //console.log(_snow_bg);
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
            settime(1000);
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

        },
        ggl_init:function(){
            var self = this;
            var _w = $('.ggl').width();
            var _h = $('.ggl').height();
            $('.ggl canvas').css('height',_h);
            var clip =new imageClip(.2,_w,_h);
            clip.finish(function(){
                clip.clear();
            });
        },
        last_show:function(){
            var self = this;
            self.J_ggl_wrap.hide();
            $('.bg_text').hide();
            $('.my_nn').show().addClass('my_nn_show');
            var my_nn_op = setTimeout(function(){
                $('.my_nn').removeClass('my_nn_show').addClass('my_nn_op');
                $('.ILU').show().addClass('ILU_hug');
            },5000);



        }
    }
    $(function(){
        Christmas.init();
    })
    function imageClip(filter,width,height){
        var ggl_nav = $('.ggl');
        var ggl_wrap = $('.ggl_wrap');
        var canvas = document.getElementById("myCanvas"),
            context = canvas.getContext('2d'),
            img = new Image(),
            finish;
        img.src = '../../../build/h5/h5_study/img/heart.png';
        img.onload = function(){
            canvas.width  = width;
            canvas.height = height;
            context.drawImage(img,0,0,canvas.width,canvas.height);
            context.globalCompositeOperation = 'destination-out';

        }
        canvasLeft = canvas.offsetLeft,
            canvasTop = canvas.offsetTop,
            mousedown = false;
        isfirst = true;
        ggl_navmarginLeft = parseInt(Nopx(ggl_nav.css('margin-left')));
        ggl_navmarginTop = parseInt(Nopx(ggl_nav.css('margin-top')));
        ggl_navLeft =ggl_nav.position().left;
        ggl_navTop =ggl_nav.position().top;
        ggl_wrapmarginLeft =parseInt(Nopx(ggl_wrap.css('margin-left')));
        ggl_wrapmarginTop =parseInt(Nopx(ggl_wrap.css('margin-top')));
        ggl_wrapLeft =ggl_wrap.position().left;
        ggl_wrapTop =ggl_wrap.position().top;
        function first(){
            if(isfirst){
                $('.ggl .message img').show();
            }
            isfirst = false;
        }
        function eventDown(e){
            e.preventDefault();
            mousedown = true;
            first();

        }
        function eventUp(e){
            e.preventDefault();
            mousedown = false;
            clearMask();
        }
        function clearMask(){
            var num = 0,
                datas = context.getImageData(width*0.1,height*0.1,width*0.8,height*0.8),
                datasLength = datas.data.length;
            for (var i = 0; i < datasLength; i++) {
                if (datas.data[i] == 0) num++;
            }
            if (num >= datasLength * filter) {
                if(finish) finish();
            };
        }
        function eventMove(e){
            e.preventDefault();
            if(mousedown) {
                if(e.changedTouches){
                    e = e.changedTouches[e.changedTouches.length-1];
                }
                var x = (e.clientX + $(document).scrollLeft() || e.pageX) - canvasLeft - ggl_navLeft - ggl_navmarginLeft -ggl_wrapmarginLeft -ggl_wrapLeft|| 0,
                    y = (e.clientY + $(document).scrollTop()  || e.pageY) - canvasTop -ggl_navTop - ggl_navmarginTop-ggl_wrapTop - ggl_wrapmarginTop|| 0;
                //console.log(e.clientX+','+e.clientY+'    '+e.pageX+','+e.pageY+'    '+x+','+y);

                context.beginPath();
                context.arc(x, y, 15, 0, Math.PI * 2);
                context.fill();
            }
        }

        canvas.addEventListener('touchstart', eventDown);
        canvas.addEventListener('touchend', eventUp);
        canvas.addEventListener('touchmove', eventMove);
        this.finish = function(callback){
            finish = callback;
        }
        this.clear = function(){
            context.beginPath();
            context.rect(0,0,width,height);
            context.fill();
            canvas.removeEventListener('touchstart', eventDown);
            canvas.removeEventListener('touchend', eventUp);
            canvas.removeEventListener('touchmove', eventMove);
            Christmas.last_show();

        }

    }
    function Nopx(_px){
        if(!_px){
            return false;
        }
        var _intpx = _px.split('px');
        return _intpx[0];
    }
})(Zepto)