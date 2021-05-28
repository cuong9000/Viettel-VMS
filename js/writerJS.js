$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 39) {
			$("body").addClass("topNav");
		} else {
			$("body").removeClass("topNav");
		}
	});
	
	$(document).ready(function(){
		$(".ico_chatbox").click(function(){
			$(this).parent().addClass("open_chat");
		});
		$(".hide_box").click(function(){
			$(this).parent().parent().parent().removeClass("open_chat");
		});
	});