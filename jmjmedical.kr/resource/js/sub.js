document.getElementById('modal-open').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('policyModal'));
    myModal.show();
});

// main.js의 dbInput 함수를 사용할 수 있음
function onCLickDBInput() {
    const agree = document.querySelector("#agree");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");

    // if (!!window.blockedKeyword) {
    //     const blockK = window.blockedKeyword.data;
    //     let isBreak = false;
    //
    //     blockK.forEach(function (word) {
    //         if (name.value.includes(word)) {
    //             isBreak = true;
    //             window.input_disable_message = '차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name.value + ')';
    //             name.focus();
    //         }
    //     });
    //
    //     if (isBreak === true) {
    //         return validationBreakerResult(true);
    //     }
    // }

    if (name.value === '' || name.value === 'undefined') {
        window.input_disable_message = '이름을 입력해주세요.';
        name.focus();
        return validationBreakerResult(true);
    } else {
        const cho_sung_result = /^[ㄱ-ㅎ]/.test(name.value);
        if (!cho_sung_result) {
            if (!/^[가-힣]{2,7}$/.test(name.value)) {
                window.input_disable_message = '초성을 제외한 한글 2~7글자를 입력해주세요.';
                name.focus();
                return validationBreakerResult(true);
            }
        } else {
            window.input_disable_message = '초성을 제거해주세요.';
            name.focus();
            return validationBreakerResult(true);
        }
    }

    if (1020000000 > Number(phone.value) || phone.value.length !== 11) {
        window.input_disable_message = '010을 제외한 휴대폰 번호를 정확히 입력해주세요.';
        phone.focus();
        return validationBreakerResult(true);
    }

    if (!agree.checked) {
        window.input_disable_message = '개인정보처리방침에 동의해주세요.';
        agree.focus();
        return validationBreakerResult(true);
    }

    validationBreakerResult(false);
}

function validationBreakerResult(bool) {
    if (bool) {
        window.input_allow = false;
        dbInput();
        return false;
    } else {
        const name = document.querySelector("#name");
        const phone = document.querySelector("#phone");

        window.input_data = [
            { "key": "성함", "value": name.value },
            { "key": "연락처", "value": phone.value }
        ];
        window.input_allow = true;
        dbInput();
        location.reload(true);
        return true;
    }
}

function inputOnKeyDownValidation(event) {
    if (
        event.target.value.length >= 11 &&
        event.key !== 'Backspace' && event.key !== 'Delete' &&
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' &&
        event.key !== 'Tab'
    ) {
        event.preventDefault();
    }
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown'){
        event.preventDefault();
    }

    if(event.target.value.length === 3 &&
        (event.key === 'Backspace' || event.key === 'Delete')){
        event.preventDefault();
    }
}

function inputOnKeyUpValidation(event){
    if(event.target.value.length < 3){
        event.target.value = '010';
    }else{
        if(event.target.value.substring(0,3) !== '010'){
            event.target.value = '010';
        }
    }
}
