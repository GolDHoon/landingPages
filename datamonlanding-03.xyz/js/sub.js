// 인풋폼 이동 함수
function toInputForm (event) {
    document.querySelector('.section-04').scrollIntoView({
        behavior: 'smooth' // 스크롤을 부드럽게 이동하게 설정
    });
}

// 전화번호 발리데이션
function phoneValidation(event){
    if(event.target.value.length > 7){
        event.target.value = previousValue;
    }else {
        previousValue = event.target.value;
    }
}


