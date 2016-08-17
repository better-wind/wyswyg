/**
 * Created by wjf55 on 2016/5/25.
 */
/*http://tuangou.mdscj.com/spreadArticle/index.html?channel=cdl
 * ����봥���¼�����
 * author:zhaoyifeng
 * date:2015-4-24
 * demo:
 *       var touchobj=new touch(); Ĭ��Ϊbody�������ɴ��ݽ�֧��addEventListener�Ķ���
 *       touchobj.start() ������ʼ ���� ��갴��
 *               .move()  �ƶ�
 *               .end     �����뿪������굯��
 *      ָ�������¼�
 *      touchobj.start=function(e){
 *          //��ֹ�¼�ð��
 *          e.preventDefault();
 *          ָ�������¼�
 *      }
 * �ӿ�:
 * start    ������ʼ
 * end      ��������
 * move     ��ס�ƶ�
 * cancel   ȡ������
 * resize   ���ڸı��С
 * */
(function() {
    "use strict";
    var $that=this,
        $d,
        $b;
    //$lock;
    var $hasTouch="ontouchstart" in $that;
    var $eventStart = $hasTouch?"touchstart"        :   "mousedown",
        $eventEnd   = $hasTouch?"touchend"          :   "mouseup",
        $eventMove  = $hasTouch?"touchmove"         :   "mousemove",
        $eventResize= $hasTouch?"orientationchange" :   "resize",
        $eventcancel= $hasTouch?"touchcancel"       :   "mouseup";
    var $touch;
    var $obj=null;

    $touch=function(element){
        $d=$that.document;
        $b=$d.body;
        if(element==undefined){
            $obj=$b;
        }
        else{
            $obj=element;
        }
        $obj.addEventListener($eventStart,function(e){
            $touch.start(e);
        });

        $obj.addEventListener($eventEnd,function(e){
            $touch.end(e);
        });

        $obj.addEventListener($eventMove,function(e){
            $touch.move(e);
        });
        window.addEventListener($eventResize,function(e){
            $touch.resize(e);
        });

        $obj.addEventListener($eventcancel,function(e){

            $touch.cancel(e);
        });
        return $touch;
    };

    $touch.start=function(e){

    };
    $touch.end=function(e){

    };
    $touch.move=function(e){

    };
    $touch.resize=function(e){

    };
    $touch.cancel=function(e){
    };
    $that.touch=$touch;
}).call(this,document);