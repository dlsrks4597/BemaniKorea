//check browser
var isie=(/msie/i).test(navigator.userAgent); //ie
var isie6=(/msie 6/i).test(navigator.userAgent); //ie 6
var isie7=(/msie 7/i).test(navigator.userAgent); //ie 7
var isie8=(/msie 8/i).test(navigator.userAgent); //ie 8
var isie9=(/msie 9/i).test(navigator.userAgent); //ie 9
var isie10=(/msie 10/i).test(navigator.userAgent); //ie 9
var isfirefox=(/firefox/i).test(navigator.userAgent); //firefox
var isapple=(/applewebkit/i).test(navigator.userAgent); //safari,chrome
var isopera=(/opera/i).test(navigator.userAgent); //opera
var isios=(/(ipod|iphone|ipad)/i).test(navigator.userAgent);//ios
var isipad=(/(ipad)/i).test(navigator.userAgent);//ipad
var isandroid=(/android/i).test(navigator.userAgent);//android
var device;
var isieLw;
if(isie6 || isie7 || isie8){ isieLw=true;}
//if(isie9){ isie=false;}
//if(isapple || isios || isipad || isandroid){}else{}


function go_to_top(){
	$("html, body").stop().animate({scrollTop:0},600);
}

$(function(){
	$(".tab_wrap li a").click(function(){
		$(".tab_wrap li").removeClass("on");
		$(this).parent().addClass("on");
	});
	$(".pagenation .num").click(function(){
		$(".pagenation .num").removeClass("on");
		$(this).addClass("on");
	});
});
