'use strict';

/**
 * Created by wjf55 on 2016/9/10.
 */
(function () {
    var dpr = void 0,
        rem = void 0,
        scale = void 0;
    var docEl = window.document.documentElement;
    var metaEl = window.document.querySelector('meta[name="viewport"]');
    var psdWidth = 640 / 100;
    var isAndroid = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);

    dpr = window.devicePixelRatio || 1;
    if (isAndroid) {
        dpr = 1;
    }
    rem = docEl.clientWidth * dpr / psdWidth;
    docEl.style.fontSize = rem + 'px';
    docEl.setAttribute('data-dpr', dpr);
    scale = 1 / dpr;
    metaEl.setAttribute('content', 'width= ' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
    window.dpr = dpr;
    window.rem = rem;
    window.addEventListener('resize', function () {
        rem = docEl.clientWidth * dpr / psdWidth;
        docEl.style.fontSize = rem + 'px';
    });
})();