(function($){
   var xzmm = {
        init:function(){
          var self = this;
          self.J_li = $('.wrap ul li');
          self.eventing();
          self.li_nth();

        },
       eventing:function(){
           LR();
       },
       left_li:function(){
           var self = this;
           var _i = self.li_nth();
           console.log(_i);
           self.J_li.removeClass('show show_left show_right hide_left hide_right');
           self.J_li.eq(_i).addClass('hide_left');
           self.J_li.eq(_i+1).addClass('show show_left');
           if(_i > 10){
               self.J_li.eq(0).addClass('show show_left');
           }
           else{
               self.J_li.eq(_i+1).addClass('show show_left');
           }
       },
       right_li:function(){
           var self = this;
           var _i = self.li_nth();
           console.log(_i);
           self.J_li.removeClass('show show_left show_right hide_left hide_right');
           self.J_li.eq(_i).addClass('hide_right');
           self.J_li.eq(_i-1).addClass('show show_right');
           if(_i < 1){
               self.J_li.eq(11).addClass('show show_right');
           }
           else{
               self.J_li.eq(_i-1).addClass('show show_right');
           }
       },
       li_nth:function(){
           var self = this;
           var i=0;
           for(var _i =0;_i<self.J_li.length;_i++){
               if(self.J_li.eq(_i).hasClass('show')){
                   i=_i;
               }

           }
           return i;
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