/*埋点逻辑代码*/
function detect(str){
    var hold = new Date(),
        img = window[hold] = new Image;
    img.src = location.href  + "?t=" + Math.floor(Math.random()*10000000) + '&SPMFLag=zhudong' + '&spm=' + str;
    img.onload = (img.onerror = function(){
        window[hold] = null;
    });
    img = null;
}