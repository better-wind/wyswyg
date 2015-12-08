(function($){
    var MoveTab = {
        init:function(){
            var self = this;
            self.J_nav = $('.J_nav_wrap');
            self.J_nav_height =self.J_nav.position().top;
            self.J_nav_li = $('.J_nav_wrap ul li');
            self.J_menu_tab = $('.J_menu_wrap section.tab');
            self.J_add_next = 0;
            self.eventing();
            self.tab_init();
        },
        eventing:function(){
            var self = this;
            self.change_tab();
            self.nav_fix();


        },
        nav_fix:function(){
            var self = this;
            $(window).on('scroll',function(){
                var _scrollheight = document.body.scrollTop;
                console.log(_scrollheight+','+self.J_nav_height);
                if(_scrollheight >= self.J_nav_height){
                    self.J_nav.addClass('fix_nav');
                }
                else{
                    self.J_nav.removeClass('fix_nav');
                }

            })

        },
        change_tab:function(){
            var self = this;
            self.J_nav_li.on('click',function(){
                self.J_nav_li.removeClass('click');
                $(this).addClass('click');
                if(document.body.scrollTop>self.J_nav_height){
                document.body.scrollTop = self.J_nav_height-50;
                }
                var _next = $(this).index();
                var _pre = self.li_nth();
                if(_next == _pre){
                }
                if(_next >_pre){
                    self.J_menu_tab.removeClass('right_show right_hide left_show left_hide show');
                    self.J_menu_tab.eq(_pre).addClass('left_hide');
                    self.J_menu_tab.eq(_next).addClass('left_show show');
                }
                if(_pre>_next){
                    self.J_menu_tab.removeClass('right_show right_hide left_show left_hide show');
                    self.J_menu_tab.eq(_pre).addClass('right_hide');
                    self.J_menu_tab.eq(_next).addClass('right_show show');
                }
                self.J_add_next = _next;
                self.tab_init();

            });
        },
        tab_init:function(){
            var self = this;
            self.prehtml ='';
            for(var _j = 0;_j<16;_j++){
                self.prehtml +='<li>0</li>'
            }
            self.J_menu_tab.not(self.J_add_next).find('ul').html('').append(self.prehtml);

            self.text =self.J_add_next+1;
            self.html = '';
            self.size = 0;
            for(var _i = 0;_i<16;_i++){
                self.html +='<li>'+self.text+'</li>'
                self.size++;
            }
            self.J_menu_tab.eq(self.J_add_next).find('ul').html('').append(self.html);
            $(window).on('scroll',function(e){
                if(self.size > 32){
                    return false;
                }
                if (document.body.scrollTop + $(window).height() >= $(document).height() - 250){

                    for(var _i = 0;_i<16;_i++){
                        self.html +='<li>'+self.text+'</li>'
                        self.size++
                    }
                    self.J_menu_tab.eq(self.J_add_next).find('ul').append(self.html);

                    }

            });

        },
        li_nth:function(){
            var self = this;
            var i=0;
            for(var _i =0;_i<self.J_menu_tab.length;_i++){
                if(self.J_menu_tab.eq(_i).hasClass('show')){
                    i=_i;
                }

            }
            return i;
        }
    }
    $(function(){
        MoveTab.init();
    })
})(Zepto)