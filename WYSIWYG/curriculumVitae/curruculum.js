/**
 * Created by wjf55 on 2016/8/13.
 */
(function(){
    var Curriculum = {
        init:function(){
            var self = this;
            self.helloWord();
            self.loopCanvas();
            self.initClock();
            self.initMenu();
            self.initConsole();
            self.initRandomBackgroundFontColor();

        },
        initRandomBackgroundFontColor:function(){
            var self = this;
            self.J_random_bg = document.querySelectorAll('.J_random_bg');
            self.J_random_color = document.querySelectorAll('.J_random_color');
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
            self.J_menuContain = document.querySelector('#menuContain');
            self.J_menuItems = document.querySelectorAll('#menuContain div');
            self.J_msg_title = document.querySelectorAll('.J_msg_title');
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
                    console.log(self.J_msg_title[index].offsetTop);
                    _height = self.J_msg_title[index].offsetTop;
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
            self.J_clock = document.querySelector('.J_clock');
            self.J_sec = document.querySelector('.J_sec');
            self.J_min = document.querySelector('.J_min');
            self.J_hour = document.querySelector('.J_hour');
            self.J_sec.style.transform = 'rotate('+_sdeg+'deg)';
            self.J_min.style.transform = 'rotate('+_mdeg+'deg)';
            self.J_hour.style.transform = 'rotate('+_hdeg+'deg)';
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
        scrollAnimate:function(h,t){
            var count = 100,
                time = t,scroll_height = '',count_time ='',count_height='',i = 1;
            if(h == 'last'){
                scroll_height = document.body.scrollHeight-document.body.scrollTop;
            }else{
                scroll_height = h-document.body.scrollTop;
            }
            count_time = time /count;
            count_height = scroll_height/count;
            var scroll = setInterval(function(){
                if(i>=100){
                    clearInterval(scroll);
                }else{
                    document.body.scrollTop += count_height;
                    i++;
                }

            },count_time);

        },
    }
    Curriculum.init();
})()