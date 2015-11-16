(function($){
    var pictest = {
        init:function(){
            var self = this;

            self.J_img_li = $('.J_img_ul li');
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.J_img_li.on('mouseover mouseleave',function(e){
                     if(e.type == 'mouseover'){
                         $(this).css('border-color','#EEE');
                     }
                     if(e.type == 'mouseleave'){
                         $(this).css('border-color','#FFF');
                     }
            });

        }


    }
     $(function(){
         pictest.init();

    });

})(jQuery)
