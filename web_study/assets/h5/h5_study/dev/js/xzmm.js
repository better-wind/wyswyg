(function($){
   var xzmm = {
        init:function(){
            var self = this;
            self.J_li = $('.wrap ul li');
            self.eventing();


        },
       eventing:function(){
           LR();
       },
       left_li:function(){
           var self = this;
            alert('left');
       },
       right_li:function(){
            alert('right');
       },
       li_nth:function(){

       }
    }
    $(function(){
        xzmm.init();
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

                xzmm.right_li();
             }
             if(start_X - end_X > 50){

                xzmm.left_li();
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

        var wrap = document.getElementById('J_wrap');
        wrap.addEventListener('touchstart', eventDown);
        wrap.addEventListener('touchend', eventUp);
        wrap.addEventListener('touchmove', eventMove);
    }
})(Zepto)