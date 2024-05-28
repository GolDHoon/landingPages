<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

if(G5_COMMUNITY_USE === false) {
    define('G5_IS_COMMUNITY_PAGE', true);
    include_once(G5_THEME_SHOP_PATH.'/shop.head.php');
    return;
}
include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>



	<style type="text/css">
		body {margin:0; padding:0}
		#navigation {position:fixed}
		#f1 {height:100%;}
		#f2 {height:100%;}
		#f3 {height:100%;}
	</style>
	<script>
		var winHeight;
		var minWindowWidth = 1000;
		var minWindowHeight = 920;
		var param = getParameter("sectio");

		$(document).ready(function(){
 //mainResize();
 //scrollEvent();
 //overview();
 //activate();

 //Moving
			var navi = $("#navigation>ul").children("li");

			$(navi).click(function(e){
				var anchorObj = $(this).children("a").attr("href");
				var y = $(anchorObj).offset().top;

				$("html, body").stop().animate(
					{scrollTop: y}, {duration: 1500, easing:"easeInOutExpo", complete: function(){

					}
				});

				e.preventDefault();

			});

 //rollover on
			$(".quickLink a").mouseenter(function(){
				var idx = $(this).parents("li").index();
				$(".quickOn .on").addClass("base");
				$(".quickOn li").eq(idx).addClass("on");
			});

 //rollover off
			$(".quickLink a").mouseleave(function(){
				var idx = $(this).parents("li").index();
				$(".quickOn li").eq(idx).removeClass("on");
				$(".quickOn .base").addClass("on");
			});
		});

		$(window).scroll(function() {
			scrollEvent();
		});

		$(window).resize(function() {
			mainResize();
			scrollEvent();
		});

		function quick(n){
			$(".quickOn li").removeClass("on").removeClass("base");
			$(".quickOn li").eq(n-1).addClass("on");
		}

		function activate(){
			$(".quickOn li").removeClass("on").removeClass("base");
			if (param > 0) {
				$(".quickOn li").eq(param-1).addClass("on");
			} else {
				$(".quickOn li").eq(0).addClass("on");
			}
		}

		function scrollEvent() {
/* var locate = $(window).scrollTop();

 if( locate == 0) {
  quick(1);
 }else if( locate >= winHeight && locate < winHeight*2) {
  quick(2);
 }else if( locate >= winHeight*2 && locate < winHeight*3) {
  quick(3);
 }else if( locate >= winHeight*3 && locate < winHeight*4) {
  quick(4);
 }else if( locate >= winHeight*4 && locate < winHeight*5) {
  quick(5);
 }else if( locate >= winHeight*5 && locate < winHeight*6) {
  quick(6);

 }*/
		}

		function mainResize(){
			if ($(window).width() > minWindowWidth){
				$(".container").width($(window).width());
			}else{
				$(".container").width(minWindowWidth);
			}

			if ($(window).height() > minWindowHeight){
				winHeight = $(window).height();
			}else{
				winHeight = minWindowHeight;
			}

			$(".container").height(winHeight);
		}

		function overview(){

			$(".overview").mouseleave(function(){
				overviewDefault();
			});
		}




		function getParameter(name) {
			var rtnval = '';
			var nowAddress = unescape(location.href);
			var parameters = (nowAddress.slice(nowAddress.indexOf('#')+1,nowAddress.length)).split('&');
			for(var i = 0 ; i < parameters.length ; i++) {
				var varName = parameters[i].split('n')[0];
				if(varName.toUpperCase() == name.toUpperCase()) {
					rtnval = parameters[i].split('n')[1];
					break;
				}
			}
			return rtnval;
		};
	</script>





<!-- 본문가리지 않는 플로팅배너 모듈 {-->

    <div class="fbpc">
<div id="navigation" style="z-index:9990;">
<A style="POSITION: fixed; bottom:5%; right:2%; z-index:9999;">

	<table>
		<tr>
			<td>
				<a href="#f1"><img src="images/fb01.png" style="width:220px; height:auto" class="floater"></a>
			</td>
		</tr>
	</table>

</A>
</div>
</div>

<!-- }모듈 끝 -->

<!-- 본문가리지 않는 플로팅배너 모듈 {-->




<!-- 본문가리지 않는 플로팅배너 모듈 {-->
<div class="fbmo">
<div id="navigation" style=" z-index:9990;">
<A style="POSITION: fixed; bottom:1%; RIGHT:0%; z-index:9999;">
<table cellpadding="0" cellspacing="0" style="width:100%;">
	<tr>
        <td width="70%"></td>
		<td width="30%"><a href="#f1"><img src="images/fb01.png" style="width:100%; height:auto" class="floater"></a></td>
	</tr>
</table>
</A>
</div>
</div>
<!-- }모듈 끝 -->
