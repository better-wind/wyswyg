/**
 * Created by wjf55 on 2016/8/13.
 */
(function(){
    var Curriculum = {
        init:function(){
            var self = this;
            self.J_body = document.querySelector('body');
            self.J_random_bg = document.querySelectorAll('.J_random_bg');
            self.J_random_color = document.querySelectorAll('.J_random_color');

            self.J_menuContain = document.querySelector('#menuContain');
            self.J_menuItems = document.querySelectorAll('#menuContain div');
            self.J_msg_wrap = document.querySelectorAll('.J_msg_wrap');

            self.J_clock = document.querySelector('.J_clock');
            self.J_sec = document.querySelector('.J_sec');
            self.J_min = document.querySelector('.J_min');
            self.J_hour = document.querySelector('.J_hour');

            self.J_msg_title = document.querySelectorAll('.J_msg_title');

            self.eventHanding();
            self.helloWord();
            self.loopCanvas();
            self.initClock();
            self.initMenu();
            self.initConsole();
            self.initRandomBackgroundFontColor();
            self.initMenuView();
            self.returnMenuCurrent();

        },
        eventHanding:function(){
            var self = this,
                _current_top,
                _next_top,
                _current;
            self.J_count = 0;
            window.addEventListener('scroll',function(){
                if(self.J_count == 0){
                    _current = self.returnMenuCurrent();
                    _current_top = document.body.scrollTop;
                }
                if(self.J_count == 1){
                    _next_top = document.body.scrollTop;
                    self.J_body.style.overflow = 'hidden';
                    self.initMenuMove(_current_top-_next_top,_current);
                }
                self.J_count++;
            })

        },
        initMenuView:function(){
            var self = this;
            for(var i=0;i<self.J_msg_wrap.length;i++){
                self.J_msg_wrap[i].style.height = document.documentElement.clientHeight+'px';
            }


        },
        initMenuMove:function(_num,_index){
            var self = this;
            self.J_body.style.overflow = 'auto';
            if(_num<0){
                if(_index == self.J_msg_wrap.length-1){
                    self.J_count = 0;
                    return false;
                }
                else{
                    self.scrollAnimate(self.J_msg_wrap[_index+1].offsetTop,800,function(){
                        self.J_count = 0;
                    })
                }
            }
            if(_num > 0){
                if(_index == 0){
                    self.J_count = 0;
                    return false;
                }
                else{
                    self.scrollAnimate(self.J_msg_wrap[_index-1].offsetTop,800,function(){
                        self.J_count = 0;
                    })
                }
            }
        },
        returnMenuCurrent:function(){
            var self = this,_current,_offsetTop;
            for(var i =0;i<self.J_msg_title.length;i++){
                _offsetTop = self.J_msg_title[i].offsetTop;
                if((_offsetTop > document.body.scrollTop) && (_offsetTop < (document.body.scrollTop +document.documentElement.clientHeight))){
                    _current = i;
                }
            }
            return _current;
        },
        initRandomBackgroundFontColor:function(){
            var self = this;
            for(var i = 0,j=self.J_random_bg.length;i<j;i++){
                self.J_random_bg[i].style.backgroundImage = '-webkit-linear-gradient('+Math.ceil(Math.random()*90)+'deg,'+self.randomColor()+' '+Math.random()*10+'%,transparent '+(60+Math.random()*30)+'%)'
            }
            for(var n = 0,m=self.J_random_bg.length;n<m;n++){
                self.J_random_color[n].style.color = self.randomColor();
            }

        },
        initConsole:function(){
            console.log('%c       ---      ---      --- --------      ---               ---               --- ---- ---','background: #222; color: #bada55;');
            console.log('%c      ---      ---      --- --------      ---               ---               --- ---- --- ','background: #222; color: #bada55');
            console.log('%c     ---      ---      ---               ---               ---               ---      ---  ','background: #222; color: #bada55');
            console.log('%c    --- ---- ---      --- --------      ---               ---               ---      ---   ','background: #222; color: #bada55');
            console.log('%c   --- ---- ---      --- --------      ---               ---               ---      ---    ','background: #222; color: #bada55');
            console.log('%c  ---      ---      ---               ---               ---               ---      ---     ','background: #222; color: #bada55');
            console.log('%c ---      ---      --- --------      --- --------      --- --------      --- ---- ---      ','background: #222; color: #bada55');
            console.log('%c---      ---      --- --------      --- --------      --- --------      --- ---- ---       ','background: #222; color: #bada55');
        },
        initMenu:function(){
            var self = this,index,_height;
            self.J_menuContain.addEventListener('mouseover',function(){
                this.style.animationPlayState = 'paused';
            })
            self.J_menuContain.addEventListener('mouseleave',function(){
                this.style.animationPlayState = 'running';
            })
            for(var i = 0,j=self.J_menuItems.length;i<j;i++){
                self.J_menuItems[i].style.borderColor = self.randomColor();
                self.J_menuItems[i].style.color = self.randomColor();
                self.J_menuItems[i].addEventListener('click',function(){
                    index = this.getAttribute('data-menu');
                    _height = self.J_msg_wrap[index].offsetTop;
                    self.scrollAnimate(_height,800)
                })
            }
        },
        initClock:function(){
            var self = this,
                _date = new Date(),
                _h = _date.getHours(),
                _m = _date.getMinutes(),
                _s = _date.getSeconds(),
                _deg = _s,
                _sdeg = 0,
                _mdeg = 0,
                _hdeg = 0,
                setClockInterval;
            self.setClockTime(_s*6,_m*6,_h*30);
            self.J_clock.style.borderColor = self.randomColor();
            self.J_sec.style.backgroundColor = self.randomColor();
            self.J_min.style.backgroundColor = self.randomColor();
            self.J_hour.style.backgroundColor = self.randomColor();
            setClockInterval = setInterval(function(){
                _s++;
                _deg++;
                if(_s > 59){
                    _s = 0;
                    _m++;
                    if(_m > 59){
                        _m = 0;
                        _h++;
                    }
                }
                _sdeg = _deg * 6;
                _mdeg = _m * 6 +_s/60*6;
                _hdeg = _h * 30 + _s/3600*30;
                self.setClockTime(_sdeg,_mdeg,_hdeg);
            },1000)
        },
        setClockTime:function(_sdeg,_mdeg,_hdeg){
            var self = this;
            self.J_sec.style.transform = 'rotate('+_sdeg+'deg)';
            self.J_min.style.transform = 'rotate('+_mdeg+'deg)';
            self.J_hour.style.transform = 'rotate('+_hdeg+'deg)';
            self.J_sec.style.webkitTransform = 'rotate('+_sdeg+'deg)';
            self.J_min.style.webkitTransform = 'rotate('+_mdeg+'deg)';
            self.J_hour.style.webkitTransform = 'rotate('+_hdeg+'deg)';
            //self.J_clock.style.borderColor = self.randomColor();
            self.J_sec.style.backgroundColor = self.randomColor();
            //self.J_min.style.backgroundColor = self.randomColor();
            //self.J_hour.style.backgroundColor = self.randomColor();
        },
        loopCanvas:function(){
            var self = this,
                i= 0,
                j= 0,
                setCanvasinterval;
            self.fixCanvas(i,j);
            setCanvasinterval = setInterval(function(){
                i = Math.floor(Math.random()*10);
                j = Math.floor(Math.random()*10)
                self.fixCanvas(i,j);
            },3000)
        },
        fixCanvas:function(_i,_j){
            var self = this,
                clientHeight = document.documentElement.clientHeight,
                fixCanvas = document.querySelector('#fixCanvas'),
                ctx = fixCanvas.getContext('2d'),
                style_color='#FFFFFF',
                _width = 80,
                _style = Math.ceil(Math.random()*10);
            //console.log(_i+','+_j+','+_style);
            //8,2,2
            //123
            //463
            //712
            //_i = 7;
            //_j = 1;
            _style = 1;
            fixCanvas.width = _width;
            fixCanvas.height = clientHeight;
            for(var i=0;i<_width/_style;i++){
                for(var j=0;j<clientHeight/_style;j++){
                    if((j%10 + i%10) == _i || (j%10 - i%10) == _i || (i%10 - j%10) == _i || (j%10 + i%10) == _j || (j%10 - i%10) == _j || (i%10 - j%10) == _j){
                        style_color='#FFFFFF';
                    }else{
                        style_color=self.randomColor();
                    }
                    ctx.fillStyle = style_color;
                    ctx.fillRect(i*_style,j*_style,1*_style,1*_style);
                }
            }
        },
        randomColor:function(){
            return '#' + ('00000' + ((Math.random()+1) * 0xAAAAAA << 0).toString(16)).slice(-6);
        },
        helloWord:function(){
            var self = this,
                hour = new Date().getHours(),
                J_HelloWord = document.querySelector('#HelloWord'),
                str = (hour<12&&hour>=6 ? 'Hello! Good morning!' : (hour<18 && hour>=12 ? 'Hello! Good afternoom!' : 'Hello! Good evening!')),
                i= 0,
                setTime = setInterval(function(){
                    if(i>=str.length){
                        J_HelloWord.innerHTML = str.slice(0,i)
                        clearInterval(setTime)
                    }else{
                        J_HelloWord.innerHTML = str.slice(0,i)
                        i++;
                    }
                },150)
        },
        scrollAnimate:function(h,t,callack){
            var count = 100,//循环次数
                time = t,
                scroll_height = '',//移动距离
                count_time ='', //每次循环时间
                count_height='',//每次循环移动距离
                i = 1,  //循环
                mod_count,//小数循环次数
                mod_height, //小数每次循环距离
                mod_count_height='';//小数需要移动距离
            if(h == 'last'){
                scroll_height = document.body.scrollHeight-document.body.scrollTop;
            }else{
                scroll_height = h-document.body.scrollTop;
            }
            count_time = time /count;
            count_height = parseInt(scroll_height/count);
            mod_count_height = scroll_height%100;
            mod_count = parseInt(mod_count_height / count_height)
            mod_height = mod_count_height % count_height;
            var scroll = setInterval(function(){
                if(i>count){
                    if(i>(count+mod_count)){
                        document.body.scrollTop += mod_height;
                        if(callack){
                            callack();
                        }
                        clearInterval(scroll);

                    }
                    else{
                        document.body.scrollTop += count_height;
                        i++;
                    }

                }else{
                    document.body.scrollTop += count_height;
                    i++;
                }

            },count_time);

        },
    }
    Curriculum.init();
})()