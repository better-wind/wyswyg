/**
 * Created by wjf55 on 2016/9/10.
 */
(() => {
    let dpr, rem, scale;
    let [docEl,metaEl,psdWidth,isAndroid] = [window.document.documentElement,window.document.querySelector('meta[name="viewport"]'),640/100,navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)];
    dpr = window.devicePixelRatio || 1;
    if(isAndroid){
        dpr = 1;
    }
    rem = docEl.clientWidth * dpr / psdWidth;
    docEl.style.fontSize = rem +'px'
    docEl.setAttribute('data-dpr', dpr);
    scale = 1 / dpr;
    metaEl.setAttribute('content', `width= ${dpr * docEl.clientWidth},initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale},user-scalable=no`);
    window.dpr = dpr;
    window.rem = rem;
    window.addEventListener('resize',() => {
        rem = docEl.clientWidth * dpr / psdWidth;
        docEl.style.fontSize = rem +'px'
    })
})();


