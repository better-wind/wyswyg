/**
 * 
 */
(function($){
           var content_help = {
              init:function(){
                 var self = this;
                 self.J_out = $('.sub_second_sub');
                 self.event();
              },
              event:function(){
                 var self = this;
                 self.J_out.click(function(){
                   var _url = $(this).attr('date-click');
                   window.open(_url);
                 });
              }
           };
           $(function(){
               content_help.init();
           });
        
        })(jQuery)