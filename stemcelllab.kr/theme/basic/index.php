<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>


<div class="wrap02">
	<div class="p_0" style="padding:0 auto; margin:0 auto;"><img src=images/1.gif"></div>
	<div class="p_0" style="padding:0 auto; margin:0 auto;"><img src="images/2.png"></div>
	<div class="p_0"><img src="images/3.png"></div>
	<div class="p_0"><img src="images/4.gif"></div>
	<div class="p_0"><img src="images/5.png"></div>
	<div class="p_0"><img src="images/6.gif"></div>
	<div class="p_0"><img src="images/7.png"></div>
	<div class="p_0"><img src="images/8.gif"></div>
	<div class="p_0"><img src="images/9.png"></div>
</div>


<div class="wrap03" id="f1">
	<div class="con_form">
		<div class="p_0"><img src="images/10.gif"></div>
		<div class="contact_bg" style="margin-top:5%">
			<iframe src="/stemcelllab/bbs/write.php?bo_table=free" width="100%" height="700"  scrolling="no" frameborder="0" id="iframe_01"></iframe>
		</div>
	</div>
</div>






<!-- 아이프레임 높이 시작-->
  {
<script>
$('#iframe_01').load(function() {
 $(this).height($(this).contents().find('body')[0].scrollHeight+30);
});


</script>
<!--} 아이프레임 높이 끝  -->




<?php
include_once(G5_THEME_PATH.'/tail.php');