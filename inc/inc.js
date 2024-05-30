// reg start
function serialize(obj) {
return Object
    .keys(obj)
    .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    })
    .join('&');
}

function phoneNumberCheck(phone) {
    let result =  /^[0-9]{8}$/;
    return result.test(phone);
}

function isChosung(char) {
    const chosungRegExp = /^[ㄱ-ㅎ]/;
    return chosungRegExp.test(char);
}

// e 인자값은 this로 받아올 것
function checkSpace(e) {
  var getValue = $(e).val();
  getValue = getValue.replace(/ /gi,"");
  $(e).val(getValue);
}

// e 인자값은 this로 받아올 것
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
  // 정규식: 2~4글자의 한글만 허용
  const koreanRegex = /^[가-힣]{2,4}$/;
  // 검증
  return koreanRegex.test(input);
}

// 선택자 구성에 따라 return; 혹 return false;
$('버튼 선택자').click(function(){
  var name = $('#wr_name').val(),
      phone = $('#wr_1').val(),
      checkbox = $('#wr_9'),
      mode = 1;

  if (name === '' || name === 'undefined') {
      alert('이름을 입력해주세요.');
      return false;
  } else {
      var cho_sung_result = isChosung(name);
      if (!cho_sung_result) {
          // 한글 2-4글자 제한
          if (!validateKoreanInput(name)) {
              alert('초성을 제외한 한글 2~4글자를 입력해주세요.');
              return false;
          }
      } else {
          alert('초성을 제거해주세요.');
          return false;
      }
  }

  if (phone === '' || phone === 'undefined') {
      alert('휴대폰 번호를 입력해주세요.');
      return false;
  } else {
      phone = phone.replace(/-/g, "");
      var result = phoneNumberCheck(phone);
      if (!result) {
          alert('정확한 휴대폰 번호를 입력해주세요.');
          return false;
      }
  }

  var checkbox = checkbox.prop('checked');
  if (!getCheckd) {
      alert('개인정보처리방침에 동의해주세요');
      return false;
  }
});
// reg end
