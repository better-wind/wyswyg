/**
 * Created by ¼Ñ·é on 2015/11/13.
 */
(function($){
    var xzmm = {
        init:function(){
          var deg = -40 , i = 1;
          $("#container").click(function ()
           {
             transform($(this)[0], "rotateY(" + (deg * i++) + "deg)")
           });

        }
    }
    var transform = function (element, value, key)
    {
        key = key || "Transform";
        ["Moz", "O", "Ms", "Webkit", ""].forEach(function (prefix)
        {
            element.style[prefix + key] = value;
        });

        return element;
    }

    $(function(){
        xzmm.init();
    });
})(jQuery)