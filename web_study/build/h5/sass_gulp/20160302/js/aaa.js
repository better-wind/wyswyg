//(function(){
//    var _url = location.href;
//    if(_url.indexOf('addressId=') >-1 ){
//        var _addressId = _url.split('addressId=')[1];
//        var setTime = setInterval(function(){
//            var li_list = $('.J_checkAdd');
//            if(li_list.length>0){
//                clearInterval(setTime)
//                var address_list = $('.J_editAddress');
//                for(var i=0;i<address_list.length;i++){
//                    if(address_list.eq(i).attr('data-addressid') == _addressId){
//                        li_list.removeClass('active');
//                        var current_li = address_list.eq(i).parent('li');
//                        current_li.addClass('active');
//                        $('#addressId').val(_addressId);
//                        var _pcd ='';
//                        var J_span =  current_li.find('.address span');
//                        for(var j = 0,len = J_span.length; j< len; j++ ){
//                            _pcd += J_span.eq(j).html();
//                        }
//                        var _strAddress = _pcd + current_li.find('.address .street').html(),
//                            _strName = current_li.find('.name').attr('data-name') + ' ' + current_li.find('.tel').html();
//                        $('.J_addressObj').find('.address-cont em').html(_strAddress);
//                        $('.J_addressObj').find('.receive em').html(_strName);
//                        $('#id-cart').find('#addressId').val(current_li.find('.J_editAddress').attr('data-addressid'));
//                    }
//                }
//            }
//        },100)
//
//    }
//})()
(function(){
    var d = $(".J_myAddressBox");
    d.on("click", ".J_checkAdd", function(e){
        var d, s = location.href,
            a = $(this).find(".J_editAddress").attr("data-addressid");
        d = s.indexOf("addressId=") > -1 ? s.split("addressId=")[0] + "addressId=" + a : s + "&addressId=" + a, location.href = d
    })
    d.on("click", ".J_editAddress", function(e) {
        e.stopPropagation();
    })
})();

