(function($){
    var myGift = {
        init:function(){
            var self = this;
            self.tabLeft = true;
            self.leftPage = 0;
            self.rightPage = 0;
            self.dataSpm='';
            self.leftOver = false;
            self.rightOver = false;
            self.leftLast = false;
            self.rightLast = false;
            self.type = "LASTEST";
            self.J_returnTop = $('.J_returnTop');
            self.imgLoad();
            self.eventHanding();
            if(self.tabLeft){
                self.getList(self.leftLast,self.leftOver,self.leftPage);
            } else {
                self.getList(self.rightLast,self.rightOver,self.rightPage);
            }
        },
        getList:function(sign,over,page){
            var self = this;
            var bot =$('.J_ProductList li').eq(1).height()*1;
            //if(!sign){
                $(window).bind('scroll',function(){
                    if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
                        if(!over){
                            over = true;
                            self.beginAjax(self.tabLeft,self.type,page + 1);
                        } else {
                            //$(window).unbind('scroll');
                        }
                    }
                });
        },
        imgLoad:function(){
            var self = this ,imgSrcArray = [] ,j = 0;
            var firstLoadImgLength = $('.J_ProductList li').length;
            //console.log(firstLoadImgLength);
            var aImg = $('.J_ProductList li .imgWrap').find('img');
            aImg.each(function(index,ele){
                imgSrcArray.push($(ele).attr('data-src')) ;
            });
            //console.log(imgSrcArray.length);
            $.each(imgSrcArray,function(i){
                var newImg=new Image();
                newImg.onload=function(){// 逐一创建 img来加载图片
                    var c=this.src;
                    aImg.eq(i).attr('src',c);
                    j++;
                    if(j>=4){
                       $('.loadBg').hide();
                    }
                };
                newImg.src=imgSrcArray[i];// load图片 src赋值
            })
        },
        beginAjax:function(direct,type,page){//a为self.tabLeft
            var self = this;
            if(direct){
                if(!self.leftOver){
                    self.leftOver = true;
                    $.ajax({
                        url:"/m/gift/list/ajax",
                        type:"post",
                        data:{
                            page:page,
                            size:6,
                            type:type
                        },
                        dataType:"json",
                        beforeSend:function(){
                            $('.loadImg').show();
                            $('.loadText').show();
                            $('.loadOver').hide();
                        },
                        success:function(data){
                            $('.loadImg').hide();
                            $('.loadText').hide();
                            $('.loadOver').hide();
                            self.leftPage = page;
                            var AjaxJson = data.data.list;
                            var jsonLength = AjaxJson.length;
                            if(jsonLength == 6){
                                self.liAppend(jsonLength,self.leftPage,self.type,AjaxJson,".J_ajaxLiLastest");
                                self.leftOver=false;
                                self.getList(self.leftLast,self.leftOver,self.leftPage);
                            } else if(jsonLength<6 && jsonLength>0){
                                self.leftLast = true;
                                self.getList(self.leftLast,self.leftOver,self.leftPage);
                                self.liAppend(jsonLength,self.leftPage,self.type,AjaxJson,".J_ajaxLiLastest");
                                $('.loadImg').hide();
                                $('.loadText').hide();
                                $('.loadOver').show();
                            } else {
                                console.log("xia");
                                self.leftLast = true;
                                self.getList(self.leftLast,self.leftOver,self.leftPage);
                            }
                        },
                        complete:function(){
                            $('.loadImg').hide();
                            $('.loadText').hide();
                            $('.loadOver').hide();
                            if(self.leftLast){
                                $('.loadImg').hide();
                                $('.loadText').hide();
                                $('.loadOver').show();
                            }


                            //var a = setTimeout(function(){
                            //    $('.loadImg').hide();
                            //    $('.loadText').hide();
                            //    $('.loadOver').hide();
                            //},3000);

                        }
                    })
                }
            } else {
                if(!self.rightOver){
                    self.rightOver = true;
                    $.ajax({
                        url:"/m/gift/list/ajax",
                        type:"post",
                        data:{
                            page:page,
                            size:6,
                            type:type
                        },
                        dataType:"json",
                        beforeSend:function(){
                            $('.loadImg').show();
                            $('.loadText').show();
                            $('.loadOver').hide();
                        },
                        success:function(data){
                            $('.loadImg').hide();
                            $('.loadText').hide();
                            $('.loadOver').hide();
                            self.rightPage = page;
                            var AjaxJson = data.data.list;
                            var jsonLength = AjaxJson.length;
                            if(jsonLength == 6){
                                self.liAppend(jsonLength,self.rightPage,self.type,AjaxJson,".J_ajaxLiHotest");
                                self.rightOver=false;
                                self.getList(self.rightLast,self.rightOver,self.rightPage);
                            } else if(jsonLength<6 && jsonLength>0){
                                self.rightLast = true;
                                self.getList(self.rightLast,self.rightOver,self.rightPage);
                                self.liAppend(jsonLength,self.rightPage,self.type,AjaxJson,".J_ajaxLiHotest");
                                $('.loadImg').hide();
                                $('.loadText').hide();
                                $('.loadOver').show();
                            } else {
                                self.rightLast = true;
                                self.getList(self.rightLast,self.rightOver,self.rightPage);
                            }
                        },
                        complete:function(){
                            $('.loadImg').hide();
                            $('.loadText').hide();
                            $('.loadOver').hide();
                            if(self.rightLast){
                                $('.loadImg').hide();
                                $('.loadText').hide();
                                $('.loadOver').show();
                            }
                            //var a = setTimeout(function(){
                            //    $('.loadImg').hide();
                            //    $('.loadText').hide();
                            //    $('.loadOver').hide();
                            //},3000);
                        }
                    })
                }
            }
        },
        liAppend:function(liLength ,page ,type ,data ,appendUL){
            var self = this ,_html = '';
            for (var i = 0; i < liLength; i++) {
                self.content = data[i].content ? data[i].content : ' ';
                self.urlBack = self.imgChange(data[i].image);
                if(type=="LASTEST"){
                    self.dataSpm =  "m20.1."+eval(6*page+i+1)+".0";
                } else {
                    self.dataSpm =  "m20.2."+eval(6*page+i+1)+".0";
                }
                _html += '<li class="respl-item '+type+'"><a class="unit" href="'+data[i].url+'?spm='+self.dataSpm+'&sourceId='+eval(6*page+i+1)+'"><div class="imgWrap1"><div class="imgWrap"><img src="'+self.urlBack+'"> </div></div><div class="imgText"><h2>'+data[i].title+'</h2><span class="arrangeOrder">Vol.<i>'+eval(6*page+i+1)+'</i></span><span class="text2">'+self.content+'</span></div><img class="shadow" src="http://xqproduct.xiangqu.com/FlqZowXqLknw2jKkVU6f4PsdXSfq"/></a></li>';
            }
            $(appendUL).show().append(_html);
        },
        imgChange:function(img){
            var self = this,
            startString = img.indexOf("|" , img.indexOf("|")+1),
            endString = img.indexOf("|",startString+1),
            totalString = img.substring(startString+1,endString);
            return "http://xqproduct.xiangqu.com/" + totalString + "?imageView2/2/w/450/q/90/format/jpg"
        },
        eventHanding:function(){
            var self = this;
            $(window).on('scroll',function(){
                //显示返回顶部
                if($(window).scrollTop() > 370){
                    self.J_returnTop.show();
                }else{
                    self.J_returnTop.hide();
                }
            });
            //返回顶部
            self.J_returnTop.on('click',function(e){
                e.preventDefault();
                self.scrollTop('0',200);

            });
            $('.tabSelect li').each(function(index,ele){
                $(ele).click(function(){
                    if(index == 0){
                        self.tabLeft = true;
                        self.type = "LASTEST";
                        $('.J_commonUL').hide().filter('.J_ajaxLiLastest').show();
                    } else {
                        self.tabLeft = false;
                        self.type = "HOTEST";
                        $('.HOTEST').show();
                        $('.J_commonUL').hide().filter('.J_ajaxLiHotest').show();
                        self.getList(self.rightLast,self.rightOver,self.rightPage);
                    }
                })
            })
        },
        scrollTop:function(scrollTo,time){
            var self = this;
            var scrollFrom = parseInt(document.body.scrollTop),
                i = 0,
                runEvery = 5;
            scrollTo = parseInt(scrollTo);
            time /= runEvery;

            var interval = setInterval(function(){
                i++;
                document.body.scrollTop = (scrollTo - scrollFrom)/time * i + scrollFrom;
                if(i >= time){
                    clearInterval(interval);
                }
            },runEvery);
        }
    };
    $(function(){
        myGift.init();
    })
})(jQuery);
