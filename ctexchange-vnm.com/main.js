window.input = {};
window.input.data = [];

function dbInput() {
    if (window.input_allow) {
        submit(window.input_data).then(r => {});
    } else {
        alert(window.input_disable_message);
    }
}

async function submit(formData) {
    var variable = window.consultingResult = await window.inputCustData(formData),
        getStatus = variable.status;

    if (getStatus === 200) {
        window.dataLayer.push({
            event: "DB_input"
        });
        alert('상담신청이 완료되었습니다.');
        location.reload(true);
    } else if (getStatus === 403) alert('비정상적인 접근입니다. 다시 시도해 주세요.');
    else if (getStatus === 500) alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}

document.addEventListener("DOMContentLoaded", () => {
})

// ---- sub.js
// main.js의 dbInput 함수를 사용할 수 있음
function onCLickDBInput() {
    const agree = document.querySelector("#agree");
    const name = document.querySelector("#name");

    if (!!window.blockedKeyword) {
        const blockK = window.blockedKeyword.data;
        let isBreak = false;

        blockK.forEach(function (word) {
            if (name.value.includes(word)) {
                isBreak = true;
                window.input_disable_message = '차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name.value + ')';
                name.focus();
            }
        });

        if (isBreak === true) {
            return validationBreakerResult(true);
        }
    }
    
    if (!agree.checked) {
        window.input_disable_message = '개인정보처리방침에 동의해주세요.';
        agree.focus();
        return validationBreakerResult(true);
    }
    validationBreakerResult(false);
}

function validationBreakerResult(bool) {
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");

    if (bool) {
        window.input_allow = false;
        dbInput();
        return false;
    } else {

        window.input_data = [
            { "key": "성함", "value": name.value },
            { "key": "번호", "value": phone.value }
        ];
        window.input_allow = true;
        dbInput();
        return true;
    }
}