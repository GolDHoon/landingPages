document.getElementById('agree_view').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('policyModal'));
    myModal.show();
});

// main.js의 dbInput 함수를 사용할 수 있음
function onCLickDBInput() {
    const agree = document.querySelector("#agree");
    const name = document.querySelector("#name");
    const phone2 = document.querySelector("#phone2");
    const phone3 = document.querySelector("#phone3");
    const company_name = document.querySelector("#company_name");
    const company_location = document.querySelector("#company_location");
    const company_kind = document.querySelector("#company_kind");
    const company_sales = document.querySelector("#company_sales");

    if (!!window.blockedKeyword) {
        const blockK = window.blockedKeyword.data;
        let isBreak = false;

        blockK.forEach(function (word) {
            if (name.value.includes(word)) {
                isBreak = true;
                window.input_disable_message = '차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name.value + ')';
                name.focus();
            }

            if (company_name.value.includes(word)) {
                isBreak = true;
                window.input_disable_message = '차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + company_name.value + ')';
                company_name.focus();
            }
        });

        if (isBreak === true) {
            return validationBreakerResult(true);
        }
    }

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

    if (2000 > Number(phone2.value) || phone2.value.length !== 4) {
        window.input_disable_message = '010을 제외한 휴대폰 번호를 정확히 입력해주세요.';
        phone2.focus();
        return validationBreakerResult(true);
    }

    if (phone3.value.length !== 4) {
        window.input_disable_message = '010을 제외한 휴대폰 번호를 정확히 입력해주세요.';
        phone3.focus();
        return validationBreakerResult(true);
    }

    if(company_name.value.length === 0){
        window.input_disable_message = '상호명을 입력해주세요.';
        company_name.focus();
        return validationBreakerResult(true);
    }

    if(company_location.value === 'notSelected'){
        window.input_disable_message = '소재지를 선택해주세요.';
        company_location.focus();
        return validationBreakerResult(true);
    }

    if(company_kind.value === 'notSelected'){
        window.input_disable_message = '업종을 선택해주세요.';
        company_kind.focus();
        return validationBreakerResult(true);
    }

    if(company_sales.value === 'notSelected'){
        window.input_disable_message = '매출을 선택해주세요.';
        company_kind.focus();
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
        const phone2 = document.querySelector("#phone2");
        const phone3 = document.querySelector("#phone3");
        const company_name = document.querySelector("#company_name");
        const company_location = document.querySelector("#company_location");
        const company_kind = document.querySelector("#company_kind");
        const company_sales = document.querySelector("#company_sales");
        const company_type = document.querySelector("[name='company_type']:checked");
        const counsel_type = Array.from(document.querySelectorAll(".counsel_type:checked")).map(item => item.value).join(', ');


        window.input_data = [
            { "key": "성함", "value": name.value },
            { "key": "번호", "value": "010" + phone2.value + phone3.value },
            { "key": "상호명", "value": company_name.value },
            { "key": "소재지", "value": company_location.value },
            { "key": "업종", "value": company_kind.value },
            { "key": "매출", "value": company_sales.value },
            { "key": "사업구분", "value": company_type.value },
            { "key": "문의종류", "value": counsel_type },
        ];
        window.input_allow = true;
        dbInput();
        return true;
    }
}

function inputValidation(event) {
    if (
        event.target.value.length >= 4 &&
        event.key !== 'Backspace' && event.key !== 'Delete' &&
        event.key !== 'ArrowUp' && event.key !== 'ArrowDown' &&
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' &&
        event.key !== 'Tab'
    ) {
        event.preventDefault();
    }
}