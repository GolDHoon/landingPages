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


<div class="con00">
	<div class="wrap">
		<div class="p_0"><img src="images/top_pc.jpg" id="con_pc"></div>
		<div class="p_0"><img src="images/top_mo.jpg" id="con_mo"></div>
	</div>
</div>

<div class="con01">
	<div class="wrap">
		<div class="p_0"><img src="images/con01_img01.png" class="floater"></div>
		<div class="p_t2"><img src="images/con01_img02.png" ></div>
	</div>
</div>
<div class="con02">
	<div class="wrap">
		<div class="p_0"><img src="images/con02_img01.gif"></div>
		<div class="p_t2"><img src="images/con02_img02.jpg" ></div>
	</div>
</div>
<div class="con03">
	<div class="wrap">
		<div class="p_0"><img src="images/con03_img01.gif"></div>
		<div class="p_t2"><img src="images/con03_img02.jpg" ></div>
	</div>
</div>
<div class="con04">
	<div class="wrap">
		<div class="p_0"><img src="images/con04_img01.gif"></div>
		<div class="p_t2"><img src="images/con04_img02.jpg" ></div>
	</div>
</div>

<div class="con05">
	<div class="wrap">
		<div class="p_0"><img src="images/con05_img01.png" class="floater"></div>
		<div class="p_t2"><img src="images/con05_img02.png" ></div>
	</div>
	<div class="wrap02">
		<div class="contact_bg">
			<?=latest('theme/gnuroll','free02', "14", "30"); ?></iframe>
		</div>
	</div>
</div>
<div class="con06">
	<div class="wrap">
		<div class="p_0"><img src="images/con06_img01.gif"></div>
		<div class="p_t2"><img src="images/con06_img02.jpg" ></div>
	</div>
</div>

<div id="f1"></div>

<div class="con07">
	<div class="wrap">
		<div class="p_0"><img src="images/con07_img01.png" class="pulse"></div>
	</div>

	<div class="wrap02">
		<div class="contact_bg">
			<iframe src="/ctexchange/bbs/write.php?bo_table=free" width="100%" height="400"  scrolling="no" frameborder="0" id="iframe_01"></iframe>
		</div>
	</div>
	<div class="wrap">
		<div class="p_t2"><img src="images/con07_img02.png"></div>
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