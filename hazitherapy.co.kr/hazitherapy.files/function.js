console.log('js is load👍');

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
function checkboxFrom(){
  var name = $('#name').val(),
      phone = $('#phone').val(),
      checkbox = $('#checkbox'),
      insur = "";

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
      insur = "N";
      return false;
  } else insur = "Y";

  var formData =  [
    {"key": "이름", "value":name},
    {"key": "번호", "value":phone},
    {"key": "실비", "value":insur}
  ]

  console.log(formData);
  return;

  sendToServer(formData);
}
function sendToServer(formData) {
  $.ajax({
    url: '',
    method: 'post',
    data : formData,
    dataType : 'string',
    success: function (data, status, xhr) {
      console.log("data : : " + JSON.stringify(data));
      $("#search_result").empty();
      $("#search_result").replaceWith(data);
    },
    error: function (data, status, err) {
      return;
    },
    complete: function () {
      var total = $("#dataCount").val();
      $("#totalCount").text(addComma(total));
    }
  });
}
