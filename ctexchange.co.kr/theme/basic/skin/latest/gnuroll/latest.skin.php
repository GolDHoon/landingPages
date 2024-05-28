<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once(G5_LIB_PATH.'/thumbnail.lib.php'); // 탭라이브러리

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);
크기
?>

<!-- 목록 카우셀 { -->					 
<div class="bo_lst_casel shadow bo_lst_cont">
	<!-- 카우셀 { -->				 
		
		<div class="bo_lst_casel_in">
        	<?php for ($i=0; $i<count($list); $i++) {  ?>
            <ul class="bo_lst_in_casel" id="nowin_<?=$i?>">
           <li class='casel_date'><span><? $today = date("Y-m-d"); echo $today;?></span></li>
			<?php
	
			echo "<li class='casel_name'>".$list[$i]['wr_1']."</li>";
    		echo "<li class='casel_pd'>".$list[$i]['wr_2']."</li>";

             ?>
				 
             </ul>
            <?php }  ?>
  </div>
</div>

<script type="text/javascript" src="https://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>    

<script>
var casel_auto = true;
var casel_speed = 3000; // 기본 3초설정
var casel_time;

function runNowTimer() {
	casel_time = setInterval(showSlideUp, casel_speed);
	casel_auto = true;	
}

function showSlideUp() {

	var index = 0;
	var html = $(".bo_lst_in_casel:eq(" +index+ ")").html();
	var id = $(".bo_lst_in_casel:eq(" +index+ ")").attr("id");

	/*
	$(".bo_lst_in_casel:eq(" +index+ ")").slideUp(300, function(){
		$(".bo_lst_in_casel:eq(" +index+ ")").remove();
	});
	*/
	$(".bo_lst_in_casel:eq("+(index+1)+")").animate({bottom:60},300);
	$(".bo_lst_in_casel:eq("+(index+2)+")").animate({bottom:60},300);
	$(".bo_lst_in_casel:eq("+(index+3)+")").animate({bottom:60},300);
	$(".bo_lst_in_casel:eq("+(index+4)+")").animate({bottom:60},300);
	$(".bo_lst_in_casel:eq(" +index+ ")").hide('slide',{direction:'up'},300,function(){
		$(".bo_lst_in_casel:eq(" +index+ ")").remove();
		$(".bo_lst_in_casel:eq("+index+")").css("bottom","0");
		$(".bo_lst_in_casel:eq("+(index+1)+")").css("bottom","0");
		$(".bo_lst_in_casel:eq("+(index+2)+")").css("bottom","0");
		$(".bo_lst_in_casel:eq("+(index+3)+")").css("bottom","0");
	});



	$(".bo_lst_casel_in").append("<ul id='" +id+ "' class='bo_lst_in_casel'>" + html + "</ul>");

}

function showNowNext() {

	var index = 0;
	var html = $(".bo_lst_in_casel:eq(" +index+ ")").html();
	var id = $(".bo_lst_in_casel:eq(" +index+ ")").attr("id");

	/*
	$(".bo_lst_in_casel:eq(" +index+ ")").slideUp(0, function(){
		$(".bo_lst_in_casel:eq(" +index+ ")").remove();
	});
	*/
	
	$(".bo_lst_in_casel:eq(" +index+ ")").hide('slide',{direction:'up'},0,function(){
		$(".bo_lst_in_casel:eq(" +index+ ")").remove();
	});


	$(".bo_lst_casel_in").append("<ul id='" +id+ "' class='bo_lst_in_casel'>" + html + "</ul>");

}

$(".casel_control span").click(function(){

	if($(this).index() == 0)
	{
		var index = $(".bo_lst_in_casel").length - 1;
		var html = $(".bo_lst_in_casel:eq(" +index+ ")").html();

		$(".bo_lst_in_casel:eq(" +index+ ")").slideDown(100, function(){
			$(".bo_lst_in_casel:eq(" +index+ ")").remove();
		});

		$(".bo_lst_in_casel:eq(0)").before("<ul class='bo_lst_in_casel'>" + html + "</ul>");
	}
	else
	{
		showNowNext();
	}

});

$(".bo_lst_cont").mouseenter(function(){
	if(!casel_auto) return false;
	clearInterval(casel_time);
	casel_auto = false;
});

$(".bo_lst_cont").mouseleave(function(){
	runNowTimer();
});

$(function(){
});
window.onload=function(){
		runNowTimer();

};
</script>
