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




<!-- 상단 시작 { -->
  <?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
    ?>



<!-- 본문가리지 않는 플로팅배너 모듈 {-->

<div class="fbpc">
<div id="navigation" style="z-index:9990;">
<A style="POSITION: fixed; bottom:0%; right:0%; z-index:9999;">

	<table>
		<tr>
			<td>
				<a href="#f1"><img src="images/fb.png" style="width:400px; height:auto" class="floater"></a>
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
<A style="POSITION: fixed; bottom:0%; RIGHT:0%; z-index:9999;">
<table cellpadding="0" cellspacing="0" style="width:100%;">
	<tr>
		<td width="65%"></td>
		<td width="35%"><a href="#f1"><img src="images/fb.png" style="width:100%; height:auto" class="floater"></a></td>
	</tr>
</table>
</A>
</div>
</div>
<!-- }모듈 끝 -->
