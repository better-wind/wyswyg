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
        },
        initMenu:function(){
            var self = this;
            self.J_menuContain = document.querySelector('#menuContain');
            self.J_menuItems = document.querySelectorAll('#menuContain div');
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
                    console.log(this.innerText);
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
                },5000)
        },
        fixCanvas:function(_i,_j){
            var self = this,
                clientHeight = document.documentElement.clientHeight,
                fixCanvas = document.querySelector('#fixCanvas'),
                ctx = fixCanvas.getContext('2d'),
                style_color='#FFFFFF',
                _style = Math.ceil(Math.random()*10);
            console.log(_i+','+_j+','+_style);
            fixCanvas.width = 80;
            fixCanvas.height = clientHeight;
            for(var i=0;i<80/_style;i++){
                for(var j=0;j<clientHeight/_style;j++){
                    if((j%10 + i%10) == _i || (j%10 + i%10) == _j ){
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
    }
    Curriculum.init();
})()