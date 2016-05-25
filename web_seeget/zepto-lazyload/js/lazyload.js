/**
 * Created by wjf55 on 2016/5/25.
 */
/**
 * ͼƬ�ӳټ���
 *
 * <img data-src="��Ҫ���ص�ͼƬURL" src="ռλͼƬ"/>
 * �����Ҫ����ʾ ��Ҫ��������CSS
 * �����Ҫ����ʾ ��Ҫ��������CSS
 *
 opacity: 0;
 transform: translateZ(0);
 -webkit-transition-duration: .5s;
 -moz-transition-duration: .5s;
 -o-transition-duration: .5s;
 transition-duration: .5s;
 */
function onlazyImg(){
    (function () {
        var $imgs = document.querySelectorAll("img[data-src]");
        var $length=$imgs.length;
        var $layzImgTimeout,t;
        var $winHeight = window.innerHeight;
        window.onscroll = function () {
            t = document.documentElement.scrollTop || document.body.scrollTop;
            clearTimeout($layzImgTimeout);
            t += $winHeight;
            $layzImgTimeout = setTimeout(function () {
                for (var i = 0;i<$length;i++) {
                    var $top;
                    if($imgs[i].dataset.top==undefined){
                        $top = $imgs[i].offsetTop;
                        var $p = $imgs[i].offsetParent;
                        while ($p.tagName != "BODY") {
                            $top += $p.offsetTop;
                            $p = $p.offsetParent;
                        }
                        $imgs[i].dataset.top=$top;
                    }
                    $top=$imgs[i].dataset.top;
                    if ($top >= (t - $winHeight * 1.5) && $top <= t&&!$imgs[i].dataset.isload) {
                        $imgs[i].src = $imgs[i].dataset.src;
                        $imgs[i].dataset.isload = true;
                        $imgs[i].onload = function () {
                            this.style.opacity = "1.0";
                            this.onload=null;
                        };
                    }
                }
            }, 100);
        };
    }());
    window.onscroll();
}