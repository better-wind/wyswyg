/**
 * Created by �ѷ� on 2016/1/20.
 */
(function($){
    var HugLight = {
        init:function(){
            var self = this;
            self.eventing();
        },
        eventing:function(){
            var self = this;
            console.log('js is already');
        }
    }
    $(function(){
        HugLight.init();
    })
})(jQuery)
