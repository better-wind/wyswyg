function shareContent(obj){
    if(obj){
    obj = obj
    }else{
    obj = {
    "imgUrl":"http://www.xiangqu.com/images/core/logo.png",
    "title":"想去网-买的起的好设计！",
    "content":"想去-买的起的好设计！",
    "targetUrl":"wwww.xiangqu.com"
    }
    }

    window._bd_share_config={
    "common":{
    "bdSnsKey":{},
    "bdText":obj.title,
    "bdDesc":obj.content,
    "bdUrl":obj.targetUrl,
    "bdPic":obj.imgUrl,
    "bdStyle":"0",
    "bdSize":"32",
    "bdCustomStyle":" "
    },
    "share":{},
    "image":{"viewList": ['sqq','weixin','tsina','qzone'],"viewText":"分享到：","viewSize":"32"},
    "selectShare":{"bdContainerClass":null,"bdSelectMiniList":["sqq","weixin","tsina","qzone"]}}
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
    }

var _shareData = {
    "imgUrl":"http://xqproduct.xiangqu.com/FsyE6WoZffeuxOd3j8xwkufskIHB",
    "title":"免费体验古人手制香囊的乐趣，还能送TA一个自己制作的古方香囊哦！",
    "content":"免费体验古人手制香囊的乐趣，还能送TA一个自己制作的古方香囊哦！",
    "targetUrl":"http://"+window.location.host+"/activity/view/6"
    }


shareContent(_shareData);
//app 端代码
function getShareContent() {
    window.ShareObj.sendShareContent(JSON.stringify(_shareData));
    }
//ios 端代码
function iosShareContent(){
    return JSON.stringify(_shareData);
    }