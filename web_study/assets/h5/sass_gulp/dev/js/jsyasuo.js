(function(){
    var SHOWTOP = {
        init:function(){
            var self = this;
            self.topWarpAppend();
            self.J_ctw = document.querySelector('#J_ctw');
            self.J_close_ctw = document.querySelector('#J_close_ctw');
            self.J_login_ctw = document.querySelector('#J_login_ctw');
            self.eventHanding();
        },
        eventHanding:function(){
            var self = this;
            self.J_close_ctw.addEventListener('click',function(){
                self.J_ctw.style.display = 'none';
            })
            self.J_login_ctw.addEventListener('click',function(){
                var _url = 'http://'+location.host+'/login/wap/login.html?redirectUrl='+location.href;
                location.href = _url;
            })
        },
        topWarpAppend:function(){
            var self = this;
            console.log(1);
            var _html = '<section id="J_ctw" class="common-top-wrap"> <img src="http://xqproduct.xiangqu.com/FhKq67rSkt875SIlT_xpQyxltOTq?imageView2/2/w/750/q/90/format/jpg/750x100/"alt=""/> <div id="J_close_ctw" class="close-common-top-wrap"></div> <div id="J_login_ctw" class="login-common-top-wrap"></div> </section>'
            $('body').prepend(_html);
        }
    }
    $(function(){
        SHOWTOP.init();
    })
})(Zepto)