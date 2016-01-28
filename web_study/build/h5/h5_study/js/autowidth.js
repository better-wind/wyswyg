/**
 * Created by �ѷ� on 2015/11/30.
 */
(function($){
    var AW = {
        init:function(){
            var self = this;
            self.J_li = $('.J_ul li');
            self.J_ul = $('.J_ul');
            self.eventing();


        },
        eventing:function(){
            var self = this;
            self.getwidth(1,20/640,20/640);

        },
        getwidth:function(n_V,n_pb,n_mg){
            var self = this;
            self.width = $('body').width();
            self.ul_width = (1-2*n_pb)*100+'%';
            self.J_ul.css({width:self.ul_width});
            self.li_width = (1-(n_V-1)*n_mg)/n_V*100+'%';
            self.li_margin = n_mg * 100 +'%';
            self.J_li.css({width:self.li_width,marginLeft:self.li_margin});
            for(var i = 0 ;i<self.J_li.length;i++){
                if(i%n_V == 0){
                    self.J_li.eq(i).css({width:self.li_width,marginLeft:0});
                }
            }
        }
    }
    $(function(){
        AW.init();
    })
})(Zepto)