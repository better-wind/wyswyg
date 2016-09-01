/**
 * Created by fenghou on 2015/11/24.
 */
(function($){
    var GGL = {
        init:function(){
            var self = this;

            self.J_ggl = $('.ggl');
            var b = setTimeout(function(){
                $('.J_wrap').css('height',$(window).width()/640*1512);
                self.eventing();
            },200);


        },
        eventing:function(){
            var self = this;
            self.ggl_init();


        },
        ggl_init:function(){
            var self = this;
            var _w = $('body').width()*0.828*0.828;
            var _h = $('.ggl').height()*0.8;
            $('.ggl canvas').css('height',_h);
            var clip =new imageClip(.1,_w,_h);
            clip.finish(function(){
                clip.clear();
            });
        },
    }
    $(function(){
        GGL.init();
    })
    function imageClip(filter,width,height){
        var ggl_nav = $('.ggl');
        var canvas = document.getElementById("myCanvas"),
            context = canvas.getContext('2d'),
            img = new Image(),
            finish;
        img.src = '';
        //img.onload = function(){
        //    canvas.width  = width;
        //    canvas.height = height;
        //    context.drawImage(img,0,0,canvas.width,canvas.height);
        //    context.globalCompositeOperation = 'destination-out';
        //
        //}
        canvas.width  = width;
        canvas.height = height;
        context.fillStyle = 'gray';
        context.globalAlpha = 1;
        context.fillRect(0,0,width,height);
        context.globalCompositeOperation = 'destination-out';
        canvasLeft = canvas.offsetLeft,
            canvasTop = canvas.offsetTop,
            mousedown = false;
        isfirst = true;
        ggl_navmarginLeft = parseInt(Nopx(ggl_nav.css('margin-left')));
        ggl_navmarginTop = parseInt(Nopx(ggl_nav.css('margin-top')));
        ggl_navLeft =ggl_nav.position().left;
        ggl_navTop =ggl_nav.position().top;
        function first(){
            if(isfirst){
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
            //clearMask();
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
                var x = (e.clientX + $(document).scrollLeft() || e.pageX) - canvasLeft - ggl_navLeft - ggl_navmarginLeft || 0,
                    y = (e.clientY + $(document).scrollTop()  || e.pageY) - canvasTop -ggl_navTop - ggl_navmarginTop|| 0;
                //console.log(e.clientX+','+e.clientY+'    '+e.pageX+','+e.pageY+'    '+x+','+y);

                context.beginPath();
                context.arc(x, y, 5, 0, Math.PI * 2);
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

        }

    }
    function Nopx(_px){
        if(!_px){
            return false;
        }
        var _intpx = _px.split('px');
        return _intpx[0];
    }


})(Zepto);