///**
// * Created by �ѷ� on 2016/3/2.
// */
//(function($){
//    var Rem ={
//        init:function(){
//            var self = this;
//            console.log('js is ready');
//        }
//    }
//    $(function(){
//        Rem.init();
//    })
//
//})(Zepto);
/**
 * Created by wjf55 on 2016/8/13.
 */
(function(){
    var Curriculum = {
        init:function(){
            var self = this;
            self.J_body = document.querySelector('body');
            //��ȡ��Ҫ����ı䱳����ɫ��������ɫ��Ԫ��
            self.J_random_bg = document.querySelectorAll('.J_random_bg');
            self.J_random_color = document.querySelectorAll('.J_random_color');
            self.J_random_border = document.querySelectorAll('.J_random_border');

            self.J_menuContain = document.querySelector('#menuContain');
            self.J_menuItems = document.querySelectorAll('#menuContain div');
            self.J_msg_wrap = document.querySelectorAll('.J_msg_wrap');

            //��ȡʱ����
            self.J_clock = document.querySelector('.J_clock');
            self.J_sec = document.querySelector('.J_sec');
            self.J_min = document.querySelector('.J_min');
            self.J_hour = document.querySelector('.J_hour');


            self.J_msg_title = document.querySelectorAll('.J_msg_title');

            /*
             * self.J_Menu_click_move��־�Ƿ��ǵ��css3����������
             * true ������ȫ������
             * false ����
             * */
            self.J_Menu_click_move = false;

            self.eventHanding();
            self.helloWord(); //����������ʾ
            //self.loopCanvas(); //�����
            //self.initClock(); //ʱ�ӳ�ʼ��
            self.initMenu(); //�˵���ʼ��
            self.initConsole(); //console hello
            self.initRandomBackgroundFontColor(); //���������ɫ��������ɫ
            self.initMenuView(); //������Ϣ����ʼ��

        },
        eventHanding:function(){
            var self = this,
                _current_top,
                _next_top,
                _current;
            /*
             * ȫ�ֹ������� ÿ�ι��������� ��Ϊ0
             * ÿ�ι���ʱ ��++ ��ȡ 0 �� 1 ״̬�е�scrollTopֵ�����ж������Ϲ��������¹� ����ʵ��ȫ������
             * */
            self.J_count = 0;
            window.addEventListener('scroll',function(){
                if(self.J_count == 0){
                    _current = self.returnMenuCurrent();
                    _current_top = document.body.scrollTop;
                }
                if(self.J_count == 1){
                    if(!self.J_Menu_click_move){
                        _next_top = document.body.scrollTop;
                        self.J_body.style.overflow = 'hidden';
                        self.initMenuMove(_current_top-_next_top,_current);
                    }
                }
                self.J_count++;
            })

        },
        /*
         * ��ʼ�� �����˵�ҳ��߶�Ϊ��ǰ��������߶ȼ�ȫ��
         * */
        initMenuView:function(){
            var self = this;
            for(var i=0;i<self.J_msg_wrap.length;i++){
                self.J_msg_wrap[i].style.height = document.documentElement.clientHeight+'px';
            }
        },
        /*
         * ʵ�ֲ˵�ҳȫ������
         * _num �����жϹ������� _num >0 ����  _num <0 ����
         * _index ��ǰ ���������� �˵�ҳ�б��±�
         * */

        initMenuMove:function(_num,_index){
            var self = this;
            self.J_body.style.overflow = 'auto';
            if(_num<0){
                if(_index == self.J_msg_wrap.length-1){
                    self.J_count = 0;
                    return false;
                }
                else{
                    self.scrollAnimate(self.J_msg_wrap[_index+1].offsetTop,400,function(){
                        self.J_count = 0;
                    })
                }
            }
            else if(_num > 0){
                if(_index == 0){
                    self.J_count = 0;
                    return false;
                }
                else{
                    self.scrollAnimate(self.J_msg_wrap[_index-1].offsetTop,400,function(){
                        self.J_count = 0;
                    })
                }
            }
            else{
                self.J_count = 0;
            }
        },

        /*
         * ��ȡ��ǰ�Ǹ��˵�Ҳ������Ļ����������
         * */
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

        /*
         * �������������ɫ
         * */
        initRandomBackgroundFontColor:function(){
            var self = this;
            for(var i = 0,j=self.J_random_bg.length;i<j;i++){
                self.J_random_bg[i].style.backgroundImage = '-webkit-linear-gradient('+Math.ceil(Math.random()*90)+'deg,'+self.randomColor()+' '+Math.random()*10+'%,transparent '+(10+Math.random()*30)+'%)'
            }
            for(var n = 0,m=self.J_random_color.length;n<m;n++){
                self.J_random_color[n].style.color = self.randomColor();
            }
            for(var p = 0,q=self.J_random_border.length;p<q;p++){
                self.J_random_border[p].style.borderColor = self.randomColor();
            }

        },

        /*
         * ����console
         * */
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

        /*
         * css3�˵������ת
         * �����Ӧ���ȡ�±�������Ӧ�Ĳ˵�
         * mouseoverʱcss3����ֹͣ
         * mouseleaveʱcss��ʼ
         * */
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
                    self.J_Menu_click_move = true;
                    index = this.getAttribute('data-menu');
                    _height = self.J_msg_wrap[index].offsetTop;
                    self.scrollAnimate(_height,400,function(){
                        self.J_Menu_click_move = false;
                        self.J_count = 0;
                    })
                })
            }
        },

        /*
         * ʱ�ӳ�ʼ��
         * ��ȡ��ǰʱ���� ת���ɶ�Ӧ�ĽǶ�ֵ
         * s 60 ��Ӧ 360
         * m 60 ��Ӧ 360
         * h 24 ��Ӧ 360
         * �趨��ʱ s++ ʱ����ʱ�Ӷ�Ӧת����Ӧ�Ƕ�
         * */
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

        /*
         * ʱ�ӽǶȸ�ֵ
         * _sdeg �����Ƕ�
         * _mdeg ���ӽǶ�
         * _hdeg ʱ�ӽǶ�
         * */
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

        /*
         * �����canvas��ʱ
         * 3000ms ִ��һ��
         * */
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

        /*
         * ����򻨳�ʼ��
         * _i,_j 0~10 ������� �����������ʾ��ʽ
         * */
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

        /*
         * �������16������ɫֵ
         * */
        randomColor:function(){
            return '#' + ('00000' + ((Math.random()+1) * 0xAAAAAA << 0).toString(16)).slice(-6);
        },

        /*
         * ������ʾ
         * */
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

        /*
         * ������ʾ����
         * h ��Ҫ��������ֵ
         * t ������ʱ��
         * callback ������ɺ�Ļص�
         * �˷��� ����Ҫ�����ĸ߶�h��ʱ��t������һ������n��������Ϊ100�� �趨һ����ʱ ÿ t/n ʱ��ִ��һ�Σ�ÿ�ι��� h/n�ĸ߶�
         * ��Ҫע�� h/n ����С������ document.body.scrollTop ��С����ֵ ��Ĭ��ȥ�� ��Ҫ��С�����⴦��
         * */
        scrollAnimate:function(h,t,callack){
            var count = 100,//ѭ������
                time = t,
                scroll_height = '',//�ƶ�����
                count_time ='', //ÿ��ѭ��ʱ��
                count_height='',//ÿ��ѭ���ƶ�����
                i = 1,  //ѭ��
                mod_count,//С��ѭ������
                mod_height, //С��ÿ��ѭ������
                mod_count_height='';//С����Ҫ�ƶ�����
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