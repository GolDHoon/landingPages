<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}
?>






<div class="copy01bg">
<div class="wraptail">
	
	<div class="copy01">
	
		<span>상호명</span>파인투자<span>대표자</span>김형택<span>사업자번호</span>243-69-00619<br>
		<span>주소</span>서울특별시 강서구 공항대로 213, 303-19호(마곡동, 보타닉파크타워2)<br>
		<p>Copyright ⓒ 파인투자. ALL RIGHTS RESERVED.</p></div>

	</div>
	
</div>
</div>



<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");