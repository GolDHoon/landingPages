<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>
<style>
.form_bg {position:relative; width:100%; height:auto;}

.form_bg .con_t {position:relative; width:100%; height:80px; margin-bottom:10px;}
.form_bg .con_t label {font-size:20px; text-align:left;width:20%; line-height:70px; color:#fff;}

.form_bg .con_t input{font-size:20px; color:#000; float:right; width:80%; margin-left:20px;  border:1px solid #fff;  background:#fff; height:80px; border-radius:10px;}
.form_bg .con_t input::placeholder{font-size:20px; color:#000; height:80px; }
.form_bg .con_t select{font-size:20px; color:#000; float:right; width:80%; margin-left:20px;  border:1px solid #fff;  background:#fff; height:80px; border-radius:10px;}



.form_bg .con_t02 {position:relative; text-align:left; margin-bottom:10px; height:30px;color:#fff; }
.form_bg .con_t02 label{color:#fff; font-size:12px; height:30px;}
.form_bg .con_t02 a{color:#fff; font-size:12px; height:30px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 button{width:100%; margin-top:20px; border:none;}
.form_bg .con_t02 button img{width:100%;border:none;}


/* 테블렛 */
@media (max-width:1200px) and (min-width:620px){
.form_bg {position:relative; width:100%; height:auto;}

.form_bg .con_t {position:relative; width:100%; height:80px; margin-bottom:10px;}
.form_bg .con_t label {font-size:20px; text-align:left;width:20%; line-height:70px; color:#fff;}

.form_bg .con_t input{font-size:20px; color:#000; float:right; width:80%; margin-left:20px;  border:1px solid #fff;  background:#fff; height:80px; border-radius:10px;}
.form_bg .con_t input::placeholder{font-size:20px; color:#000; height:80px; }
.form_bg .con_t select{font-size:20px; color:#000; float:right; width:80%; margin-left:20px;  border:1px solid #fff;  background:#fff; height:80px; border-radius:10px;}



.form_bg .con_t02 {position:relative; text-align:left; margin-bottom:10px; height:30px;color:#fff; }
.form_bg .con_t02 label{color:#fff; font-size:12px; height:30px;}
.form_bg .con_t02 a{color:#fff; font-size:12px; height:30px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 button{width:100%; margin-top:20px;border:none;}
.form_bg .con_t02 button img{width:100%;border:none;}

}



/* 모바일 */
@media (max-width:620px){
.form_bg {position:relative; width:100%; height:100%;}

.form_bg .con_t {position:relative; width:100%; height:130px; margin-bottom:0px; }
.form_bg .con_t label {font-size:20px; text-align:left; width:100%; line-height:0px; color:#fff; height:10px;}

.form_bg .con_t input{font-size:20px; color:#000; float:left; margin-top:10px; margin-bottom:10px; width:100%; margin-left:0px;background:#fff; height:80px; border-radius:10px;}
.form_bg .con_t input::placeholder{font-size:20px; color:#000; height:80px; }
.form_bg .con_t select{font-size:20px; color:#000; float:right; margin-top:10px; margin-bottom:10px; width:100%; margin-left:0px;  border:1px solid #fff;  background:#fff; height:80px; border-radius:10px;}

.form_bg .con_t option{border:1px solid #000;}


.form_bg .con_t02 {position:relative; text-align:left; width:100%; margin-bottom:0px; height:10px;color:#fff; }
.form_bg .con_t02 label{color:#fff; font-size:12px; height:30px; padding:10px 0px;}
.form_bg .con_t02 a{color:#fff; font-size:12px; height:30px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 button{width:100%; margin-top:20px;border:none;}
.form_bg .con_t02 button img{width:100%;border:none;}




}




</style>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>




<section id="bo_w">
    <h2 class="sound_only"><?php echo $g5['title'] ?></h2>

    <!-- 게시물 작성/수정 시작 { -->
    <form name="fwrite" id="fwrite" action="<?php echo $action_url ?>" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off" style="width:<?php echo $width; ?>">
    <input type="hidden" name="uid" value="<?php echo get_uniqid(); ?>">
    <input type="hidden" name="w" value="<?php echo $w ?>">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
    <input type="hidden" name="wr_id" value="<?php echo $wr_id ?>">
    <input type="hidden" name="sca" value="<?php echo $sca ?>">
    <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
    <input type="hidden" name="stx" value="<?php echo $stx ?>">
    <input type="hidden" name="spt" value="<?php echo $spt ?>">
    <input type="hidden" name="sst" value="<?php echo $sst ?>">
    <input type="hidden" name="sod" value="<?php echo $sod ?>">
    <input type="hidden" name="page" value="<?php echo $page ?>">
	<input type="hidden" name="wr_subject" value="고객님의 문의내용">
	<input type="hidden" name="wr_content" value="고객님의 문의내용">
    <?php
    $option = '';
    $option_hidden = '';
    if ($is_notice || $is_html || $is_secret || $is_mail) { 
        $option = '';
        if ($is_notice) {
            $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="notice" name="notice"  class="selec_chk" value="1" '.$notice_checked.'>'.PHP_EOL.'<label for="notice"><span></span>공지</label></li>';
        }
        if ($is_html) {
            if ($is_dhtml_editor) {
                $option_hidden .= '<input type="hidden" value="html1" name="html">';
            } else {
                $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="html" name="html" onclick="html_auto_br(this);" class="selec_chk" value="'.$html_value.'" '.$html_checked.'>'.PHP_EOL.'<label for="html"><span></span>html</label></li>';
            }
        }
        if ($is_secret) {
            if ($is_admin || $is_secret==1) {
                $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="secret" name="secret"  class="selec_chk" value="secret" '.$secret_checked.'>'.PHP_EOL.'<label for="secret"><span></span>비밀글</label></li>';
            } else {
                $option_hidden .= '<input type="hidden" name="secret" value="secret">';
            }
        }
        if ($is_mail) {
            $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="mail" name="mail"  class="selec_chk" value="mail" '.$recv_email_checked.'>'.PHP_EOL.'<label for="mail"><span></span>답변메일받기</label></li>';
        }
    }
    echo $option_hidden;
    ?>

   	<div class="bo_w_info write_div">

		<div class="form_bg">

			
			<div class="con_t">
				<label for="wr_name">성함</label>
				<input type="text" name="wr_name" value="<?php echo $name ?>" class="required" id="wr_name" required placeholder="성함을 입력하세요">
			</div>

			
			<div class="con_t">
				<label for="wr_1">연락처</label>
				<input type="text" name="wr_1" value="<?php echo $wr_1 ?>" class="required" id="wr_1" required  placeholder="숫자만 입력하세요" onkeydown="this.value=this.value.replace(/[^0-9]/g,'')" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" onblur="this.value=this.value.replace(/[^0-9]/g,'')">
			</div>
			

			<div class="con_t">
				<label for="wr_2">나이</label>
				<input type="text" name="wr_2" value="<?php echo $wr_2 ?>" class="required" id="wr_2" required  placeholder="나이를 입력하세요" >
			</div>
			

			<div class="con_t02">
				
				<input type="checkbox" name="wr_9" value="" id="wr_9"  required checked="checked" value="<? if($write[wr_9]=="정보이용동의")echo"checked"; ?>"  class="checkbox_pay"/>
				<label for="wr_9">개인정보처리방침에 동의합니다.</label>
				<a href="#" class="modalbutton" style="color:#fff; padding-right:20px;"><u> [보기]</u></a>
				
			</div>


			<div class="con_t02">
				<button type="image"><img src="/stemcelllab/images/11.gif" alt="Submit"></button>
			</div>

		</div>
	</div>
    </form>

 <script>
	$(document).ready(function(){
		$("#dialogLayout").dialog({
			title : "개인정보취급방침",
			autoOpen : false,
			width : 300,
			height :300,
			modal: true,
			button : [{
				text : "확인",
				click:function(){
					$(this).dialog("close");
				}
			},{
				text : "취소",
				click:function(){
					$(this).dialog("close");
				}    
			}]
		});
						
		$(".modalbutton").click(function(e){
			$("#dialogLayout").dialog("open");
			e.preventDefault();
		})
	});


</script>
<style>
	.ui-dialog-title { line-height:25px; }
	.ui-dialog-titlebar-close { outline : 0px !important};

</style>
<div id="dialogLayout" title="개인정보취급방침" style="word-break:break-all; line-height:12px;font-size:10px;">
	<pre>
1. 개인정보 수집 및 이용 목적
전화,SMS를 통한 상담 및 안내

2. 수집하는 개인정보 항목
이름, 연락처, 나이

3. 보유 및 이용기간
수집이용 동의일로부터 수집이용 목적을 달성할 때까지
	</pre>
</div>


    <script>
    <?php if($write_min || $write_max) { ?>
    // 글자수 제한
    var char_min = parseInt(<?php echo $write_min; ?>); // 최소
    var char_max = parseInt(<?php echo $write_max; ?>); // 최대
    check_byte("wr_content", "char_count");

    $(function() {
        $("#wr_content").on("keyup", function() {
            check_byte("wr_content", "char_count");
        });
    });

    <?php } ?>
    function html_auto_br(obj)
    {
        if (obj.checked) {
            result = confirm("자동 줄바꿈을 하시겠습니까?\n\n자동 줄바꿈은 게시물 내용중 줄바뀐 곳을<br>태그로 변환하는 기능입니다.");
            if (result)
                obj.value = "html2";
            else
                obj.value = "html1";
        }
        else
            obj.value = "";
    }

    function fwrite_submit(f)
    {
        <?php echo $editor_js; // 에디터 사용시 자바스크립트에서 내용을 폼필드로 넣어주며 내용이 입력되었는지 검사함   ?>

        var subject = "";
        var content = "";
        $.ajax({
            url: g5_bbs_url+"/ajax.filter.php",
            type: "POST",
            data: {
                "subject": f.wr_subject.value,
                "content": f.wr_content.value
            },
            dataType: "json",
            async: false,
            cache: false,
            success: function(data, textStatus) {
                subject = data.subject;
                content = data.content;
            }
        });

        if (subject) {
            alert("제목에 금지단어('"+subject+"')가 포함되어있습니다");
            f.wr_subject.focus();
            return false;
        }

        if (content) {
            alert("내용에 금지단어('"+content+"')가 포함되어있습니다");
            if (typeof(ed_wr_content) != "undefined")
                ed_wr_content.returnFalse();
            else
                f.wr_content.focus();
            return false;
        }

        if (document.getElementById("char_count")) {
            if (char_min > 0 || char_max > 0) {
                var cnt = parseInt(check_byte("wr_content", "char_count"));
                if (char_min > 0 && char_min > cnt) {
                    alert("내용은 "+char_min+"글자 이상 쓰셔야 합니다.");
                    return false;
                }
                else if (char_max > 0 && char_max < cnt) {
                    alert("내용은 "+char_max+"글자 이하로 쓰셔야 합니다.");
                    return false;
                }
            }
        }

        <?php echo $captcha_js; // 캡챠 사용시 자바스크립트에서 입력된 캡챠를 검사함  ?>

        document.getElementById("btn_submit").disabled = "disabled";

        return true;
    }
    </script>
</section>
<!-- } 게시물 작성/수정 끝 -->