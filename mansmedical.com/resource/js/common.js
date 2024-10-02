window.isAgree = 2
function consultingButton () {
    let name = document.querySelector("#wr_name").value;
    let phone = document.querySelector("#wr_1").value;
    let isAgree = document.querySelector("#wr_9").checked;

    if (window.blockedKeyword) {
        let blockK = window.blockedKeyword.data;
        let isBreak = false;

        blockK.forEach(function (word) {
            if (name.includes(word)) {
                isBreak = true;
                alert('차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name + ')');
                document.querySelector("#name").focus();
            }
        });

        if (isBreak === true) {
            return false;
        }
    }

    if (name === '' || name === 'undefined') {
        alert('이름을 입력해주세요.');
        document.querySelector("#wr_name").focus();
        return false;
    } else {
        let cho_sung_result = /^[ㄱ-ㅎ]/.test(name);
        if (!cho_sung_result) {
            if (!/^[가-힣]{2,7}$/.test(name)) {
                alert('초성을 제외한 한글 2~7글자를 입력해주세요.');
                document.querySelector("#wr_name").focus();
                return false;
            }
        } else {
            alert('초성을 제거해주세요.');
            document.querySelector("#wr_name").focus();
            return false;
        }
    }

    if(phone === ''){
        alert('휴대폰 번호를 입력해주세요.');
        document.querySelector("#wr_1").focus();
        return false;
    }

    if (20000000 >= Number(phone) || phone.length !== 8) {
        alert('휴대폰 번호를 정확히 입력해주세요.');
        document.querySelector("#wr_1").focus();
        return false;
    }

    // if (1020000000 > Number(phone.value) || phone.value.length !== 11) {
    //     window.input_disable_message = '010을 제외한 휴대폰 번호를 정확히 입력해주세요.';
    //     phone.focus();
    //     return validationBreakerResult(true);
    // }

    if(!isAgree){
        alert('개인정보처리방침에 동의해주세요.');
        document.querySelector('.wr_9').focus();
        return false;
    }

    let formData = [
        {"key": "이름", "value": name},
        {"key": "번호", "value": "010"+phone}
    ];

    submit(formData).then(() => {})
}

async function submit(formData) {
    let variable = window.consultingResult = await window.inputCustData(formData),
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

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.querySelector('#myModal');
    let span = document.querySelector("#modal_view");

    span.onclick = function() {
        modal.style.display = 'block';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
    document.querySelector(".close").onclick = function (evnet) {
        modal.style.display = 'none';
    }
});

// 24.10.2 추가 / 휴대폰번호 글자수 제한
function inputOnKeyDownValidation(event) {
    if (
        event.target.value.length >= 8 &&
        event.key !== 'Backspace' && event.key !== 'Delete' &&
        event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' &&
        event.key !== 'Tab'
    ) {
        event.preventDefault();
    }
    if(event.key === 'ArrowUp' || event.key === 'ArrowDown'){
        event.preventDefault();
    }
}
//end


