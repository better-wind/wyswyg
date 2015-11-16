    $.getJSON("/common/getWxJsConfig", {url:location.href}, function(data) {
        if (data && data.code==200) {
        obj = data.data;
        wx.config({
        debug : obj.debug,
        appId : obj.appId,
        timestamp : obj.timestamp,
        nonceStr : obj.nonceStr,
        signature : obj.signature,
        jsApiList : obj.jsApiList.split(',')
        });


        wx.ready(function(){
        wx.onMenuShareTimeline({
        title: '一分钱体验手制香囊的乐趣！',
        link: 'http://www.xiangqu.com/activity/view/6',
        imgUrl: 'http://xqproduct.xiangqu.com/FsyE6WoZffeuxOd3j8xwkufskIHB',
        success: function () {
        //alert('succ');
        },
        cancel: function () {
        //alert('cancel');
        }
        });

        wx.onMenuShareAppMessage({
        title: '一分钱体验手制香囊的乐趣！',
        link: 'http://www.xiangqu.com/activity/view/6',
        imgUrl: 'http://xqproduct.xiangqu.com/FsyE6WoZffeuxOd3j8xwkufskIHB',
        desc: '免费体验古人手制香囊的乐趣，还能送TA一个自己制作的古方香囊哦！',
        success: function () {
        //alert('succ');
        },
        cancel: function () {
        //alert('cancel');
        }
        });
        });
        }
        });
