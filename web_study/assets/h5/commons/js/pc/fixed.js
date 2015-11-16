/**
 * position:fixed
 * 
 * @Author:Fly Mirage
 * @Date:2012-01-17
 * @Version:1.1
 *
 * @History:
 * ----------------------------------------------
 * v1.0		2012-01-17
 * # Create it
 * 
 */
(function($){
var isIE = !!window.ActiveXObject;var isIE6 = isIE && !window.XMLHttpRequest;var isIE8 = isIE && !!document.documentMode && (document.documentMode == 8);var isIE7 = isIE && !isIE6 && !isIE8;
if (isIE6 || isIE7) { //ie6 | ie7 | ie8 not in standards mode
	$().ready(function(){
		var body = document.body;
		var BLANK_GIF;
		if (body.currentStyle.backgroundAttachment != "fixed") {
			if (body.currentStyle.backgroundImage == "none") {
				body.runtimeStyle.backgroundImage = "url("+BLANK_GIF+")"; // dummy
				body.runtimeStyle.backgroundAttachment = "fixed";
			}
		}
	});
}
$.fn.extend({toFixed:function(position){
var isIE = !!window.ActiveXObject;var isIE6 = isIE && !window.XMLHttpRequest;var isIE8 = isIE && !!document.documentMode && (document.documentMode == 8);var isIE7 = isIE && !isIE6 && !isIE8;
if (isIE6 || isIE7){} else {return this;}
return this.each(function(){
	var t = $(this);
	var id = t.get(0).id || 'fixed_'+parseInt(Math.rand()*10000);
	var rect = {w:t.width(),h:t.height(),l:t.css('left'),r:t.css('right'),'t':t.css('top'),b:t.css('bottom')};
	if (rect.l != 'auto') rect.l = rect.l;if (rect.r != 'auto') rect.r = parseInt(rect.r);
	if (rect.t != 'auto') rect.t = parseInt(rect.t);if (rect.b != 'auto') rect.b = parseInt(rect.b);
	var _pos = {left:rect.l,right:rect.r,top:rect.t,bottom:rect.b};
	_pos = $.extend(_pos,position);
	var css  = '<style type="text/css">.'+id+'-fixed {position:absolute;bottom:auto;right:auto;clear:both;';
	if(rect.l != 'auto' && rect.r != 'auto')//width auto change by clientwidth
		css += 'width:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.clientWidth  - '+ rect.l +' - ' + rect.r +' : document.body.clientWidth  - '+ rect.l +' - ' + rect.r +' );';
	if(rect.l == 'auto' && rect.r != 'auto')
		css += 'left:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.scrollLeft + (documentElement.clientWidth-this.clientWidth - ' + rect.r + ') : document.body.scrollLeft +(document.body.clientWidth-this.clientWidth - ' + rect.r + '));';
	else
		css += 'left:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.scrollLeft + ' + rect.l + ' : document.body.scrollLeft + ' + rect.l + ');';
	if(rect.t == 'auto' && rect.b != 'auto')
		css += 'top:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.scrollTop + (documentElement.clientHeight-this.clientHeight - ' + rect.b + ') : document.body.scrollTop +(document.body.clientHeight-this.clientHeight - ' + rect.b + '));';
	else
		css += 'top:expression(eval(document.compatMode && document.compatMode==\'CSS1Compat\') ? documentElement.scrollTop + ' + rect.t + ' : document.body.scrollTop + ' + rect.t + ');';
	css += '}</style>';
	$(css).appendTo('head');
	t.addClass(id+'-fixed');
//return t;
});


}});
})(jQuery);/*  |xGv00|3974707e03ca6d8101e82fd1addffffb */