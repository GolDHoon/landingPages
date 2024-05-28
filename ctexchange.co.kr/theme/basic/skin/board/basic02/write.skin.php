<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>
<style>
.form_bg {position:relative; width:100%; height:auto;}
.form_bg .con_t {position:relative; text-align:left;  font-size:22px; margin-bottom:10px; background:#f2f2f2; height:80px; padding:10px 50px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t span{color:#000; font-size:22px; height:60px; line-height:60px;}
.form_bg .con_t input{font-size:22px; color:#000; float:right; background:#f2f2f2; width:80%; margin-left:50px; border:none; height:60px;}
.form_bg .con_t input::placeholder{font-size:22px; color:#b8b8b8;}
.form_bg .con_t select{font-size:18px; height:50px; line-height:50px;color:#000;  background:#f2f2f2; width:100%; border:none; }



.form_bg .con_t02 {position:relative; text-align:left;  font-size:22px; margin-bottom:10px; background:#fff; height:30px; padding:10px;}
.form_bg .con_t02 span{color:#000; font-size:16px; height:30px;}
.form_bg .con_t02 a{color:#000; font-size:16px; height:30px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 input::placeholder{font-size:22px; color:#b8b8b8;}

.form_bg .con_t03 {position:relative; text-align:left;  font-size:22px; margin:20px 0px; background:#f2f2f2; height:100%; padding:10px 50px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t03 span{color:#000; font-size:22px; height:60px;}
.form_bg .con_t03 input{font-size:22px; color:#000; background:#f2f2f2; width:80%; margin-left:50px; border:none; height:60px;}
.form_bg .con_t03 input::placeholder{font-size:22px; color:#b8b8b8;}

#con_bt01 {position:relative;}


/* 테블렛 */
@media (max-width:1200px) and (min-width:620px){
.form_bg {position:relative; width:100%; height:auto;}
.form_bg .con_t {position:relative; text-align:left;  font-size:18px; margin-bottom:10px; background:#f2f2f2; height:60px; padding:5px 10px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t span{display:none;}
.form_bg .con_t input{font-size:18px; color:#000; float:right; background:#f2f2f2; width:100%; margin-left:50px; border:none; height:50px;}
.form_bg .con_t input::placeholder{font-size:18px; color:#000;}
.form_bg .con_t select{font-size:18px; height:40px; line-height:50px;color:#000;  background:#f2f2f2; width:100%; border:none; }


.form_bg .con_t02 {position:relative; text-align:left;  font-size:12px; margin-bottom:10px; background:#fff; height:30px; padding:10px;}
.form_bg .con_t02 span{color:#000; font-size:12px; height:10px;}
.form_bg .con_t02 a{color:#000; font-size:12px; height:10px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 input::placeholder{font-size:22px; color:#b8b8b8;}

.form_bg .con_t03 {position:relative; text-align:left;  font-size:18px; margin:20px 0px; background:#f2f2f2; height:100%; padding:5px 10px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t03 span{color:#000; font-size:18px; height:60px;}
.form_bg .con_t03 input{font-size:18px; color:#000; background:#f2f2f2; width:80%; margin-left:50px; border:none; height:60px;}
.form_bg .con_t03 input::placeholder{font-size:18px; color:#b8b8b8;}

#con_bt01 {position:relative; margin-right:25%; width:50%;}

}



/* 모바일 */
@media (max-width:620px){
.form_bg {position:relative; width:100%; height:auto;}
.form_bg .con_t {position:relative; text-align:left;  font-size:18px; margin-bottom:10px; background:#f2f2f2; height:60px; padding:5px 10px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t span{display:none;}
.form_bg .con_t input{font-size:18px; color:#000; float:right; background:#f2f2f2; width:100%; margin-left:50px; border:none; height:50px;}
.form_bg .con_t input::placeholder{font-size:18px; color:#000;}

.form_bg .con_t02 {position:relative; text-align:left;  font-size:12px; margin-bottom:10px; background:#fff; height:30px; padding:10px;}
.form_bg .con_t02 span{color:#000; font-size:12px; height:10px;}
.form_bg .con_t02 a{color:#000; font-size:12px; height:10px;}
.form_bg .con_t02 input{}
.form_bg .con_t02 input::placeholder{font-size:22px; color:#b8b8b8;}

.form_bg .con_t03 {position:relative; text-align:left;  font-size:18px; margin:20px 0px; background:#f2f2f2; height:100%; padding:5px 10px; border:1px solid #f2f2f2; border-radius:10px;}
.form_bg .con_t03 span{color:#000; font-size:18px; height:60px;}
.form_bg .con_t03 input{font-size:18px; color:#000; background:#f2f2f2; width:80%; margin-left:50px; border:none; height:60px;}
.form_bg .con_t03 input::placeholder{font-size:18px; color:#b8b8b8;}

#con_bt01 {position:relative; margin-right:10%; width:80%;}

}




</style>


<div class="wrap02">

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
	<input type="hidden" name="wr_subject" value="실시간 상담내용">
	<input type="hidden" name="wr_content" value="실시간 상담내용">
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
   <?php if ($is_category) { ?>
    <div class="bo_w_select write_div">
        <label for="ca_name" class="sound_only">분류<strong>필수</strong></label>
        <select name="ca_name" id="ca_name" required>
            <option value="">분류를 선택하세요</option>
            <?php echo $category_option ?>
        </select>
    </div>
    <?php } ?>
   	<div class="bo_w_info write_div">

		<div class="form_bg">


			<div class="con_t"><span>성함</span><input type="text" name="wr_1" value="<?php echo $wr_1 ?>" id="wr_1" required placeholder="성함을 입력하세요"></div>
			
			<div class="con_t"><span>연락처</span><input type="text" name="wr_2" value="<?php echo $wr_2 ?>" id="wr_2" required  placeholder="연락처를 입력하세요"></div>
			
			

			<div class="btn_confirm write_div">
				<a href="<?php echo get_pretty_url($bo_table); ?>" class="btn_cancel btn">취소</a>
				<button type="submit" id="btn_submit" accesskey="s" class="btn_submit btn">작성완료</button>
			</div>
		</div>

	</div>
    </form>

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