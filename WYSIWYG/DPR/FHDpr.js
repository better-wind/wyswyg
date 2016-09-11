(function(){
    function RemInit(){
        var dpr, rem, scale;
        var docEl = window.document.documentElement;
        var bodyEl = window.document.body;
        var metaEl = window.document.querySelector('meta[name="viewport"]');
        var psdWidth = 640/100;
        var isAndroid = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
        dpr = window.devicePixelRatio || 1;
        dpr = 1;
        if(navigator.userAgent.indexOf('xiangqu')>-1 && navigator.userAgent.indexOf('Android')>-1){
            var setWidthTime = setInterval(function(){
                if(docEl.clientWidth>0){
                    clearInterval(setWidthTime);
                }
            },100)
        }
        rem = docEl.clientWidth * dpr / psdWidth;
        docEl.style.fontSize = rem +'px'
        docEl.setAttribute('data-dpr', dpr);
        scale = 1 / dpr;
        metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
        window.dpr = dpr;
        window.rem = rem;
        window.addEventListener('resize',function(){
            rem = docEl.clientWidth * dpr / psdWidth;
            docEl.style.fontSize = rem +'px'
        })
    }
    RemInit();
})()/**
 * Created by wjf55 on 2016/9/10.
 */
