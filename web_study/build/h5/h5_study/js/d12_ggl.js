/**
 * Created by �ѷ� on 2015/12/14.
 */
/**
 * Created by fenghou on 2015/11/24.
 */
(function($){
    var GGL = {
        init:function(){
            var self = this;
            self.loginURL=$('body').attr('data-loginUrl');
            self.J_ggl = $('.ggl');
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.more_li_init();
            self.ggl_init();

        },
        more_li_init:function(){
            var self = this;
            self.J_more_ul = $('.more_ul');
            self.J_more_li = $('.more_ul li');
        },
        ggl_init:function(){
            var self = this;
            var _w = $('body').width()*0.828*0.828;
            var _h = $('.ggl').height()*0.9;
            var clip =new imageClip(.5,_w,_h);
            clip.finish(function(){
                clip.clear();
            });
        },
        login:function(){
            var self=this;
            if (self.loginURL != '') {
                //�е�¼�ӿ�
                if( self.loginURL.indexOf('http://') >= 0 ){
                    location.href = self.loginURL + '?redirectUrl='+location.href;
                }else{
                    location.href = self.loginURL;
                }
            } else {
                alert('�����µ�¼��');
            }
        }
    }
    $(function(){
        GGL.init();
    })
    function imageClip(filter,width,height){
        var ggl_nav = $('.ggl');
        var message =  $('.ggl p');
        var canvas = document.getElementById("myCanvas"),
            context = canvas.getContext('2d'),
            img = new Image(),
            finish;
        //        ͼƬ
        img.src = "http://xqproduct.xiangqu.com/FuKC89BO6DLCnppV8EKM2Ea0dkNu?imageView2/2/w/434/q/100/format/jpg/434x241/"
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
        //canvas.width  = width;
        //canvas.height = height;
        //context.fillStyle = '#DFDFDD';
        //context.globalAlpha = 1;
        //context.fillRect(0,0,width,height);
        //context.globalCompositeOperation = 'destination-out';
        function first(){
            if(isfirst){
                //�н�Ajax
                message.html('中奖');
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
                datas = context.getImageData(0,0,width,height),
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
                var x = (e.clientX + $(document).scrollLeft() || e.pageX) - canvasLeft - ggl_navLeft - ggl_navmarginLeft || 0,
                    y = (e.clientY + $(document).scrollTop()  || e.pageY) - canvasTop -ggl_navTop - ggl_navmarginTop|| 0;
                console.log(e.clientX+','+e.clientY+'    '+e.pageX+','+e.pageY+'    '+x+','+y);

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
            alert('success');
            canvas.removeEventListener('touchstart', eventDown);
            canvas.removeEventListener('touchend', eventUp);
            canvas.removeEventListener('touchmove', eventMove);

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