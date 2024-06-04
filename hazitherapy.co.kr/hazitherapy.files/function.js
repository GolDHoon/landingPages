console.log('js is load👍');

$(document).ready(function(){
  $('.popup_silby, html').addClass('active');
})

$(window).scroll(function(){
  var h = $(document).scrollTop();
  if(h > 900) $('.navi_btn').fadeOut();
  else $('.navi_btn').fadeIn();
});

function phoneNumberCheck(phone) {
  var result =  /^[0-9]{8}$/;
  return result.test(phone);
}
function isChosung(char) {
  var chosungRegExp = /^[ㄱ-ㅎ]/;
  return chosungRegExp.test(char);
}
function checkSpace(e) {
  var getValue = $(e).val();
  getValue = getValue.replace(/ /gi,"");
  $(e).val(getValue);
}
function checkLength(e) {
  var getLength = $(e).val().length+1,
      getValue = $(e).val(),
      maxLength = 8;

  $(e).val(getValue);
  if(getLength > maxLength) {
    getValue = getValue.substr(0, maxLength-1);
    $(e).val(getValue);
  }
}
function validateKoreanInput(input) {
  var koreanRegex = /^[가-힣]{2,4}$/;
  return koreanRegex.test(input);
}
async function checkboxFrom(){
  var name = $('#name').val(),
      phone = $('#phone').val(),
      checkbox = $('#checkbox');

  if (name === '' || name === 'undefined') {
    alert('이름을 입력해주세요.');
    $('#name').focus();
    return false;
  } else {
      var cho_sung_result = isChosung(name);
      if (!cho_sung_result) {
        if (!validateKoreanInput(name)) {
          alert('초성을 제외한 한글 2~4글자를 입력해주세요.');
          $('#name').focus();
          return false;
        }
      } else {
        alert('초성을 제거해주세요.');
        $('#name').focus();
        return false;
      }
  }

  if (phone === '' || phone === 'undefined') {
    alert('휴대폰 번호를 입력해주세요.');
    $('#phone').focus();
    return false;
  } else {
      phone = phone.replace(/-/g, "");
      var result = phoneNumberCheck(phone);
      if (!result) {
        alert('정확한 휴대폰 번호를 입력해주세요.');
        $('#phone').focus();
        return false;
      }
  }
  
  var getCheckd = checkbox.prop('checked');
  if (!getCheckd) {
      alert('개인정보처리방침에 동의해주세요.');
      $('#checkbox').focus();
      return false;
  }

  var formData =  [
    {"key": "이름", "value":name},
    {"key": "번호", "value":"010"+phone},
    {"key": "실비", "value":silby}
  ];

  var variable = window.consultingResult = await inputCustData(formData),
      getStatus = variable.status;
  

  if(getStatus == '200') {
    window.dataLayer.push({
      event: "DB_input"
  });
    alert('상담신청이 완료되었습니다.');
  } else if (getStatus == '403') alert('비정상적인 접근입니다. 다시 시도해 주세요.'); 
  else if (getStatus == '500') alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}

function showPopup(e) {
  if(e=="private") $('.popup_privacy, html').addClass('active');
  else $('.popup_silby, html').addClass('active');
}

var silby = "";
function closePopup01(e) {
  $('.popup_silby, html').removeClass('active');
  silby = e;
}

function closePopup02() {
  $('.popup_privacy, html').removeClass('active');
}
