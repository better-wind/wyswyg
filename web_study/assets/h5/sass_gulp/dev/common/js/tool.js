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
            },
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

            },
        }
        FhTool.fn.init.prototype = FhTool.fn;
        FhTool.prototype.Add= function(_str){
            return _str+'bc';
        }
        FhTool.prototype.Alert= function(_str){
            alert(_str)
        }
        FhTool.prototype.Val = function(){
            var self = this;
            if(self.now_selector.type == 'id'){
                var val = document.getElementById(self.now_selector.content).innerHTML;
                return val;
            }
            if(self.now_selector.type == 'class'){
                var class_arr = document.getElementsByClassName(self.now_selector.content);
                for(var i =0 ;i<class_arr.length;i++){
                    return class_arr[i].innerHTML;
                }
            }


        }

        return FhTool;
    }

    window.FhTool = FhTool();

})(window)