$(function() {
	$('thead input').click(function(evt) {
		var target = evt.currentTarget;
		var inputs = $('tbody').find('input[type="checkbox"]');
		inputs.each(function(index, input) {
			input.checked = target.checked;			
		});
	});
});


function checkdel(){
	var inputs = $('tbody').find('input[type="checkbox"]');
	var flag = false;
	inputs.each(function(index, input) {
		flag = flag || input.checked;
	});
	if (!flag) {
		alert('请选择至少一条数据进行操作!');
		return;
	}
	if(window.confirm("您确认删除该数据吗？")){
		document.chooseForm.submit();
	}
}

function formatText1(str, len) {
   var str_length = 0;
   var str_len = 0,
       str_cut = new String(),
       str_len = str.length;
   for(var i = 0;i<str_len;i++){
       a = str.charAt(i);
       str_length++;
       if(escape(a).length > 4) {
        str_length++;
       }
        str_cut = str_cut.concat(a);
       if(str_length>=len) {
            return str_cut + '...';
        }
    }
    if(str_length < len){
      return  str;
    }
}
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);


$(function(){
	//QQ在线客服
	var $qqServer = $('.qqserver');
	var $qqserverFold = $('.qqserver_fold');
	var $qqserverUnfold = $('.qqserver_arrow');
	$qqserverFold.click(function(){
		$qqserverFold.hide();
		$qqServer.addClass('unfold');
	});
	$qqserverUnfold.click(function(){
		$qqServer.removeClass('unfold');
		$qqserverFold.show();
	});
	//窗体宽度小鱼1024像素时不显示客服QQ
	function resizeQQserver(){
		$qqServer[document.documentElement.clientWidth < 1024 ? 'hide':'show']();
	}
	$(window).bind("load resize",function(){
		resizeQQserver();
	});
});

