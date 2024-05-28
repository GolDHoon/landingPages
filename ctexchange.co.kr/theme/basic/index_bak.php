<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>



<!-- 메인슬라이드 시작 { -->



<div class="wrap02">

	<div class="p_0"><img src="images/img01.gif" alt="캐쉬트리 신규고객 이벤트"></div>
	<div class="p_0"><img src="images/img02.gif" alt="추석맞이 빅 이벤트"></div>
	<div class="p_0"><img src="images/img03.jpg" alt="왜 캐쉬트리여야 할까요?"></div>
</div>



<div class="wrap02">
	<div class="con04">
		<div class="p_0"><img src="images/con04_img01.png" alt="수익인증"></div>
		<div class="p_t3"><?php include_once(G5_PATH."/review01.php");?></div>
	</div>
</div>



<div class="wrap02" id="f1">
	<div class="con05">
		<div class="p_0"><img src="images/con05_img01.png" alt="100% 합법 거래소 캐쉬트리"></div>
		<div class="p_0"><img src="images/con05_img02.png" alt="무료체험신청" class="pulse"></div>

		<div class="contact_bg">
			<iframe src="/ctexchange/bbs/write.php?bo_table=free" width="100%" height="400"  scrolling="no" frameborder="0" id="iframe_01"></iframe>
		</div>
	</div>
</div>






<!-- 아이프레임 높이 시작 { -->
<script>
$('#iframe_01').load(function() {
 $(this).height($(this).contents().find('body')[0].scrollHeight+30);
});


</script> 
<!--} 아이프레임 높이 끝  -->




<?php
include_once(G5_THEME_PATH.'/tail.php');