function closePopup(e) {
  $(".popup_" + e).fadeOut();
}

function phoneNumberCheck(phone) {
  let result = /^(01[016789]{1})?[1-9]{1}[0-9]{2,3}[0-9]{4}$/;
  return result.test(phone);
}

function isChosung(char) {
  const chosungRegExp = /^[ㄱ-ㅎ]/;
  return chosungRegExp.test(char);
}

function validateKoreanInput(input) {
  // 정규식: 2~4글자의 한글만 허용
  const koreanRegex = /^[가-힣]{2,4}$/;
  // 검증
  return koreanRegex.test(input);
}

console.log('js is working!');