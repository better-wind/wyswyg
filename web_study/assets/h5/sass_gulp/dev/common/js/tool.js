/**
 * Created by wjf55 on 2016/3/28.
 */
(function(win){
    var FhTool = function(sel){
        var windoc = win.document,
            docel = windoc.documentElement;
        var FhTool = function(sel){
            return new FhTool.fn.init(sel);
        }
        FhTool.fn = FhTool.prototype = {
            FhTool_version:'1.0.0',
            now_selector:{
                type:'',
                content:''
            },//选择器判断可以存在 this 对象里，也可以新建 一个属性存。
            regId:/^(#([\w+]*))$/,
            regClass:/^(\.([\w+]*))$/,
            init:function(sel){
                var self = this;
                if(self.regId.test(sel)){
                    var split_arr = sel.split('#');
                    self.now_selector.type = "id";
                    self.now_selector.content=split_arr[1];
                }
                if(self.regClass.test(sel)){
                    var split_arr = sel.split('.');
                    self.now_selector.type = "class";
                    self.now_selector.content=split_arr[1];
                }
                if(!self.regId.test(sel)&&!self.regClass.test(sel)){
                    self.now_selector.type = 'tag';
                    self.now_selector.content = sel;
                }

            },
        }
        FhTool.fn.init.prototype = FhTool.fn;

        FhTool.prototype.Val = function(){

            var self = this;
            if(self.now_selector.type == 'id'){
                var val = document.getElementById(self.now_selector.content).innerHTML;
                return val;
            }
            if(self.now_selector.type == 'class'){
                var class_arr = document.getElementsByClassName(self.now_selector.content);
                var content_arr = Array();
                for(var i =0 ;i<class_arr.length;i++){
                    content_arr[i]=class_arr[i].innerHTML;
                }
                return content_arr;
            }
            if(self.now_selector.type == 'tag'){
                var tag_arr = document.getElementsByTagName(self.now_selector.content);
                var content_arr = Array();
                for(var i=0;i<tag_arr.length;i++){
                    content_arr[i] = tag_arr[i].innerHTML;
                }
                return content_arr;
            }




        }
        //FhTool.extend=FhTool.fn.extend = function(){}
        //FhTool.fn.extend({
        //    HasClass:function(_str_class){
        //        var self = this;
        //        if(self.now_selector.type != 'class'){
        //            return false;
        //        }
        //        var class_arr = document.getElementsByClassName(self.now_selector.content);
        //        if(class_arr.length < 1){
        //            console.log('no have');
        //            return ;
        //        }
        //        if(class_arr.length >1){
        //            var back_arr = Array();
        //            for(var i = 0;i<class_arr.length;i++){
        //                var return_back = false;
        //                var pre_class = class_arr[i].getAttribute('class');
        //                var pre_class_arr = pre_class.split(' ');
        //                for(var _i =0;_i < pre_class_arr.length;_i++){
        //                    if(pre_class_arr[_i] == _str_class){
        //                        return_back = true;
        //                    }
        //                    back_arr[i] = return_back
        //                }
        //            }
        //            return back_arr;
        //        }
        //        else{
        //            var return_back = false;
        //            var pre_class = class_arr[0].getAttribute('class');
        //            var pre_class_arr = pre_class.split(' ');
        //            for(var _i =0;_i < pre_class_arr.length;_i++){
        //                if(pre_class_arr[_i] == _str_class){
        //                    return_back = true;
        //                }
        //            }
        //            return return_back;
        //        }
        //
        //
        //
        //
        //
        //
        //    },
        //    AddClass:function(_s){
        //        console.log(FhTool.prototype.AddClass.prototype);
        //        var self = this;
        //        if(self.now_selector.type != 'class'){
        //            return false;
        //        }
        //        var class_arr = document.getElementsByClassName(self.now_selector.content);
        //        if(class_arr.length>1){
        //            var add_class_arr = _s.split(' ');
        //            console.log(add_class_arr);
        //            for(var _i =0;_i<add_class_arr.length;_i++){
        //                var TF_arr = FhTool.prototype.HasClass(add_class_arr[_i]);
        //                for(var i =0;i<class_arr.length;i++){
        //                    var pre_class = class_arr[i].getAttribute('class');
        //                    if(!TF_arr[i]){
        //                        class_arr[i].setAttribute('class',pre_class+' '+add_class_arr[_i]);
        //                    }
        //                }
        //            }
        //
        //        }
        //        else{
        //            var add_class_arr = _s.split(' ');
        //            for(var i = 0;i<add_class_arr.length;i++){
        //                if(!FhTool.prototype.HasClass(add_class_arr[i])){
        //                    var pre_class = class_arr[0].getAttribute('class');
        //                    class_arr[0].setAttribute('class',pre_class+' '+add_class_arr[i]);
        //                }
        //            }
        //
        //
        //        }
        //
        //
        //    },
        //    RemoveClass:function(_s){
        //        var self = this;
        //        if(self.now_selector.type != 'class'){
        //            return false;
        //        }
        //        var class_arr = document.getElementsByClassName(self.now_selector.content);
        //        if(class_arr.length>1){
        //            var remove_class_arr = _s.split(' ');
        //            for(var j =0;j<remove_class_arr.length;j++){
        //                var TF_arr = FhTool.prototype.HasClass(remove_class_arr[j]);
        //                for(var i = 0;i<class_arr.length;i++){
        //                    if(TF_arr[i]){
        //                        var pre_class = class_arr[i].getAttribute('class');
        //                        var pre_class_arr = pre_class.split(' ');
        //                        var next_class = '';
        //                        for(var _i =0 ;_i<pre_class_arr.length;_i++){
        //                            if(pre_class_arr[_i] == remove_class_arr[j]){
        //                                pre_class_arr.splice(_i,1);
        //                            }
        //                        }
        //                        class_arr[i].setAttribute('class',pre_class_arr.join(' '));
        //                    }
        //                }
        //            }
        //
        //
        //        }
        //        else{
        //            var remove_class_arr = _s.split(' ');
        //            for(var _i = 0;_i<remove_class_arr.length;_i++){
        //                if(FhTool.prototype.HasClass(remove_class_arr[_i])){
        //                    var pre_class = class_arr[0].getAttribute('class');
        //                    var pre_class_arr = pre_class.split(' ');
        //                    var next_class = '';
        //                    for(var i =0;i<pre_class_arr.length;i++){
        //                        if(pre_class_arr[i] == remove_class_arr[_i]){
        //                            pre_class_arr.splice(i,1);
        //                        }
        //                    }
        //                    class_arr[0].setAttribute('class',pre_class_arr.join(' '));
        //
        //                }
        //            }
        //
        //        }
        //
        //
        //
        //    }
        //})
        FhTool.prototype.HasClass = function(_str_class){
            var self = this;
            if(self.now_selector.type != 'class'){
                return false;
            }
            var class_arr = document.getElementsByClassName(self.now_selector.content);
            if(class_arr.length < 1){
                console.log('no have');
                return ;
            }
            if(class_arr.length >1){
                var back_arr = Array();
                for(var i = 0;i<class_arr.length;i++){
                    var return_back = false;
                    var pre_class = class_arr[i].getAttribute('class');
                    var pre_class_arr = pre_class.split(' ');
                    for(var _i =0;_i < pre_class_arr.length;_i++){
                        if(pre_class_arr[_i] == _str_class){
                            return_back = true;
                        }
                        back_arr[i] = return_back
                    }
                }
                return back_arr;
            }
            else{
                var return_back = false;
                var pre_class = class_arr[0].getAttribute('class');
                var pre_class_arr = pre_class.split(' ');
                for(var _i =0;_i < pre_class_arr.length;_i++){
                    if(pre_class_arr[_i] == _str_class){
                        return_back = true;
                    }
                }
                return return_back;
            }






        }
        //遍历写法 添加class
        //FhTool.prototype.AddClass = function(_s){
        //    console.log(FhTool.prototype.AddClass.prototype);
        //    var self = this;
        //    if(self.now_selector.type != 'class'){
        //        return false;
        //    }
        //    var class_arr = document.getElementsByClassName(self.now_selector.content);
        //    if(class_arr.length>1){
        //        var add_class_arr = _s.split(' ');
        //        console.log(add_class_arr);
        //        for(var _i =0;_i<add_class_arr.length;_i++){
        //            var TF_arr = FhTool.prototype.HasClass(add_class_arr[_i]);
        //            for(var i =0;i<class_arr.length;i++){
        //                var pre_class = class_arr[i].getAttribute('class');
        //                if(!TF_arr[i]){
        //                    class_arr[i].setAttribute('class',pre_class+' '+add_class_arr[_i]);
        //                }
        //            }
        //        }
        //
        //    }
        //    else{
        //        var add_class_arr = _s.split(' ');
        //        for(var i = 0;i<add_class_arr.length;i++){
        //            if(!FhTool.prototype.HasClass(add_class_arr[i])){
        //                var pre_class = class_arr[0].getAttribute('class');
        //                class_arr[0].setAttribute('class',pre_class+' '+add_class_arr[i]);
        //            }
        //        }
        //
        //
        //    }
        //
        //
        //}
        //FhTool.prototype.RemoveClass = function(_s){
        //    var self = this;
        //    if(self.now_selector.type != 'class'){
        //        return false;
        //    }
        //    var class_arr = document.getElementsByClassName(self.now_selector.content);
        //    if(class_arr.length>1){
        //        var remove_class_arr = _s.split(' ');
        //        for(var j =0;j<remove_class_arr.length;j++){
        //            var TF_arr = FhTool.prototype.HasClass(remove_class_arr[j]);
        //            for(var i = 0;i<class_arr.length;i++){
        //                if(TF_arr[i]){
        //                    var pre_class = class_arr[i].getAttribute('class');
        //                    var pre_class_arr = pre_class.split(' ');
        //                    var next_class = '';
        //                    for(var _i =0 ;_i<pre_class_arr.length;_i++){
        //                        if(pre_class_arr[_i] == remove_class_arr[j]){
        //                            pre_class_arr.splice(_i,1);
        //                        }
        //                    }
        //                    class_arr[i].setAttribute('class',pre_class_arr.join(' '));
        //                }
        //            }
        //        }
        //
        //
        //    }
        //    else{
        //        var remove_class_arr = _s.split(' ');
        //        for(var _i = 0;_i<remove_class_arr.length;_i++){
        //            if(FhTool.prototype.HasClass(remove_class_arr[_i])){
        //                var pre_class = class_arr[0].getAttribute('class');
        //                var pre_class_arr = pre_class.split(' ');
        //                var next_class = '';
        //                for(var i =0;i<pre_class_arr.length;i++){
        //                    if(pre_class_arr[i] == remove_class_arr[_i]){
        //                        pre_class_arr.splice(i,1);
        //                    }
        //                }
        //                class_arr[0].setAttribute('class',pre_class_arr.join(' '));
        //
        //            }
        //        }
        //
        //    }
        //
        //
        //
        //}
        FhTool.prototype.AddClass = function(_s){
            var self = this;
            if(self.now_selector.type != 'class'){
                return false;
            }
            var class_arr = document.getElementsByClassName(self.now_selector.content);
            if(class_arr.length>1){
                var add_class_arr = _s.split(' ');
                for(var i =0;i<class_arr.length;i++){
                    var pre_class = class_arr[i].getAttribute('class');
                    var pre_class_arr = pre_class.split(' ');
                    pre_class_arr = FhTool.prototype.uniqueArr(pre_class_arr,add_class_arr);
                    class_arr[i].setAttribute('class',pre_class_arr.join(' '));
                }


            }
            else{
                var add_class_arr = _s.split(' ');
                var pre_class = class_arr[0].getAttribute('class');
                var pre_class_arr = pre_class.split(' ');
                pre_class_arr = FhTool.prototype.uniqueArr(pre_class_arr,add_class_arr);
                class_arr[0].setAttribute('class',pre_class_arr.join(' '));
            }


        }
        FhTool.prototype.RemoveClass = function(_s){
            var self = this;
            if(self.now_selector.type != 'class'){
                return false;
            }
            var class_arr = document.getElementsByClassName(self.now_selector.content);
            if(class_arr.length>1){
                var remove_class_arr = _s.split(' ');
                for(var i = 0;i<class_arr.length;i++){
                    var pre_class = class_arr[i].getAttribute('class');
                    var pre_class_arr = pre_class.split(' ');
                    pre_class_arr = FhTool.prototype.subarr(pre_class_arr,remove_class_arr);
                    class_arr[i].setAttribute('class',pre_class_arr.join(' '));
                }
            }
            else{
                var remove_class_arr = _s.split(' ');
                var pre_class = class_arr[0].getAttribute('class');
                var pre_class_arr = pre_class.split(' ');
                pre_class_arr = FhTool.prototype.subarr(pre_class_arr,remove_class_arr);
                class_arr[0].setAttribute('class',pre_class_arr.join(' '));
            }
        }
        FhTool.prototype.uniqueArr = function(arr_a,arr_b){
            var self = this;
            var ret =[];
            var hash ={};
            for(var i = 0;i<arr_b.length;i++){
                arr_a.push(arr_b[i]);
            }
            for(var _i = 0;_i<arr_a.length;_i++){
                var item = typeof(arr_a[_i])+arr_a[_i];
                if(!hash[item]){
                    ret.push(arr_a[_i]);
                    hash[item] = 1;
                }
            }
            return ret;

        }
        FhTool.prototype.subarr= function(arr_a,arr_b){
            var self = this;
            if(arr_b.length == 0){
                return arr_b;
            }
            var ret = [];
            var hash ={};
            for(var i =0;i<arr_b.length;i++){
                var item = typeof(arr_b[i])+arr_b[i];
                hash[item] = 1;
            }
            for(var _i = 0;_i<arr_a.length;_i++){
                var item = typeof(arr_a[_i])+arr_a[_i];
                if(!hash[item]){
                    ret.push(arr_a[_i]);
                }
            }
            return ret;


        }
        return FhTool;
    }

    window.$$ = window.FhTool = FhTool();

})(window)