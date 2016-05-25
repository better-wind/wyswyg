/**
 * Created by wjf55 on 2016/5/25.
 */
///<reference path="touch.js">
/**
 * �ֲ��л�JS
 * author:zhaoyifeng
 * ����:touch.js֧��
 */
(function (_, _fn) {
    if (_["define"] != undefined && typeof define === "function" && define.amd) {
        define(_fn);
    } else if (typeof exports === "object") {
        module.exports = _fn();
    } else {
        _.touchBanner = _fn();
    }
}(this, function () {
    var $fn, $utils;
    $utils = {
        //removeClass: function (_e, _className) {
        //
        //},
        //addClass: function (_e, _className) {
        //
        //},
        getXY: function (_e) {
            //������չJQ�Ĵ����¼�
            var $x, $y;
            if (_e.originalEvent && _e.originalEvent.changedTouches) {
                $x = _e.originalEvent.changedTouches[0].pageX;
                $y = _e.originalEvent.changedTouches[0].pageY;
            } else if (_e.changedTouches) {
                $x = _e.changedTouches[0].pageX;
                $y = _e.changedTouches[0].pageY;
            }
            else {
                $x = _e.pageX;
                $y = _e.pageY;
            }
            return {x: $x, y: $y};
        },
        setCSS: function (_e, _key, _s) {
            _e.style["-webkit-" + _key] = _s;
            _e.style["-moz-" + _key] = _s;
            _e.style["-ms-" + _key] = _s;
            _e.style["-o-" + _key] = _s;
            _e.style[_key] = _s;
        }
    };
    $fn = function (_opt) {
        var /*��������*/$opt = {},
        /*��ʾ�Ƿ��Ѿ�����TOUCH*/$isStart = false,
        /*��ʾtouch����λ��*/$mouse = {};
        var $html = [], $i, /*��¼��ǰBANNER��λ��*/$bgX, $bgTransform;
        var /*��Ļ���*/$Width = Math.min(document.documentElement.clientWidth,window.innerWidth);
        var $touchEvent;
        if (typeof _opt === "string") {
            $opt.id = _opt;
            $opt.obj = document.querySelector($opt.id);
        }
        //��ǰ��ʾ�����
        $opt.index = 1;
        $opt.ele = {};
        //��ʼ���ڵ�
        $opt.ele.bg = $opt.obj.querySelector(".bg");
        $opt.ele.bgMove= $opt.obj.querySelector(".bgMove");
        $opt.ele.bgNode = $opt.obj.querySelectorAll(".bgNode");
        for(var i= 0,item;item=$opt.ele.bgNode[i++];){
            item.style.width=$Width +"px";
        }
        //��ʼ��Բ��
        $i = $opt.ele.bgNode.length;
        for (var i = 0; i < $i; i++) {
            $html.push('<i class="dot"></i>');
        }
        $opt.obj.querySelector('.dots').innerHTML = $html.join('');
        $opt.ele.dots = $opt.obj.querySelectorAll(".dot");
        $opt.ele.dots[0].className="dot active";

        //setTimeout(function(){
        //    $utils.setCSS($opt.ele.bg,"transition-duration",".5");
        //},1);
        //��¡��һ��
        //��¡���һ��
        var $firstNode=$opt.ele.bgNode[0].cloneNode(true);
        var $lastNode=$opt.ele.bgNode[$i-1].cloneNode(true);
        $opt.ele.bg.appendChild($firstNode);
        $opt.ele.bg.insertBefore($lastNode,$opt.ele.bgNode[0]);
        $i+=2;
        //��ʼ����ʾ
        //���2����Ϊ��Ҫǰ��ҽ�һ�� ʵ���޷��л�
        $opt.ele.bg.style.width = ($i + 2) * $Width + "px";
        //$opt.ele.bgMove.style.width = ($i + 2) * $Width + "px";
        $opt.ele.bg.style.transform = "translateX(" + (-$Width) + "px)";

        //�ҽ��Զ�
        var touchobj = new touch($opt.obj);
        touchobj.start = function (e) {
            //��ֹ�¼�ð��
            e.stopPropagation();
            $isStart = true;
            $mouse = $utils.getXY(e);
            $bgX = $opt.ele.bg.style.transform.slice(11, $opt.ele.bg.style.transform.length - 3) * 1;
        };
        $touchEvent=function(){
            $utils.setCSS($opt.ele.bg,"transition-duration",".5s");
            if($opt.index<0) $opt.index=0;
            if($opt.index>($i-1)) $opt.index=$i-1;
            $opt.ele.bg.style.transform = "translateX(" + (-$opt.index*$Width) + "px)";
            //�ж��Ƿ�����ͷ�� ���� ��β��
            if($opt.index==0||$opt.index==$i-1){
                $opt.index=($opt.index==0?($i-2):1);
                setTimeout(function(){
                    $utils.setCSS($opt.ele.bg,"transition-duration","0s");
                    $opt.ele.bg.style.transform = "translateX(" + (-$opt.index*$Width) + "px)";
                },500);
            }
            //��������
            for(var i=0;i<$i-2;i++){
                $opt.ele.dots[i].className="dot";
            }
            $opt.ele.dots[$opt.index-1].className="dot active";

        };
        touchobj.end = function (e) {
            //e.stopPropagation();
            $isStart = false;
            var $nowMouse = $utils.getXY(e);
            var $direction = $nowMouse.x - $mouse.x;
            var $directionLeft = $direction < 0;
            var $directionResult = Math.abs($direction) * 5 >= $Width;
            if ($directionResult) {
                if ($directionLeft) {
                    $opt.index++;
                } else {
                    $opt.index--;
                }
                $touchEvent();
            }
            else{
                //���ڸ�ԭ
                $opt.ele.bg.style.transform = "translateX(" + (-$opt.index*$Width) + "px)";
            }
            $mouse = null;
        };
        touchobj.move = function (e) {
            e.preventDefault();
            if ($isStart && $mouse) {
                $utils.setCSS($opt.ele.bg,"transition-duration","0s");
                var $nowMouse = $utils.getXY(e);
                var $isleft = ($nowMouse.x - $mouse.x) < 0;
                var $deviation = $nowMouse.x - $mouse.x;
                $opt.ele.bg.style.transform = "translateX(" + ($bgX + $deviation) + "px)";
            }
        };
        touchobj.resize = function (e) {
            e.preventDefault();

        };
        touchobj.cancel = function (e) {
            e.preventDefault();
        };

        //�Զ��ֲ�
        /*setInterval(function(){
         if(!$isStart){
         $opt.index++;
         $touchEvent();
         }
         },5000);*/

    };

    return $fn;
}));