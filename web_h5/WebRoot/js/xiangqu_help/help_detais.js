/**
 * 
 */
(function($){
           var content_help = {
              init:function(){
                 var self = this;
                 self.J_next = $('.next');
                 self.J_pre = $('.pre');
                 self.event();
              },
              event:function(){
              
                 var self = this;
                 self.J_next.click(function(){
                   var _url = $(this).attr('date-next');
                   window.open(_url);
                 });
                 
                 self.J_pre.click(function(){
                   var _url = $(this).attr('date-pre');
                   window.open(_url);
                 });
              }
           };
           $(function(){
           
               content_help.init();
           });
        
        })(jQuery)
          