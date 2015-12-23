/**
 * Created by �ѷ� on 2015/12/21.
 */
(function($){
    var Drop_drap = {
        init:function(){
            var self = this;
            self.eventing();
        },
        eventing:function(){
            var self = this;
            self.drop();
        },
        drop:function(){
            $("#dragEle")[0].ondragstart = function (event){
                event.dataTransfer.setData("Text", event.target.id);
            };
            $("#dropEle")[0].ondrop = function (event) {
                var id = event.dataTransfer.getData("Text");
                $(this).append($("#" + id).clone().text('45'));
                event.preventDefault();
            };
            $("#dropEle")[0].ondragover = function (event) {
                event.preventDefault();
            }
        }
    }
    $(function(){
        Drop_drap.init();
    })
})(jQuery)
//function allowDrop(ev)
//{
//    ev.preventDefault();
//}
//
//function drag(ev)
//{
//    ev.dataTransfer.setData("Text",ev.target.id);
//}
//
//function drop(ev)
//{
//    ev.preventDefault();
//    var data=ev.dataTransfer.getData("Text");
//    //ev.target.appendChild(document.getElementById(data));
//    alert(data);
//    ev.target.appendChild($('#'+data));
//}
