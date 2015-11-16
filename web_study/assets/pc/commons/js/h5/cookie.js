function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie = c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if(cookieStartIndex == -1) {
        return null;
    }
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
    if(cookieEndIndex == -1) {
        cookieEndIndex = document.cookie.length
    }
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie(name, path, domain) {
    if(getCookie(name)) {
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
    }
}

function fixDate(date) {
    var base = new Date(0)
    var skew = base.getTime()
    if(skew > 0) date.setTime(date.getTime() - skew)
}
var now = new Date()
fixDate(now)
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)


function qcck(){
    setCookie('isclicked',isclicked,-1);
    alert("cookie已清除");
}
function cookieclick(){
    isclicked=getCookie('isclicked');
    var _str = $('.get-discount-a').attr('data-spm');
    if(isclicked=='true'){
        alert('已经领取过，不能再领了哦～～');
    }else{
        detect(_str);
        alert("领取成功！");
//            $('.getMB').fadeIn(200);
//            $('.window1').show(200);
        isclicked='true';
    }
    setCookie('isclicked',isclicked,30)
}