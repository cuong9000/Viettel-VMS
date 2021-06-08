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

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Xem thêm";
    var lesstext = "Thu gọn";


    $('.answer_txt').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ ' </span><span class="morecontent"><span>' + h + '</span>  <a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
