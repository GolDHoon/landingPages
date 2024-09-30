function dbInput(event){
    const agree = document.querySelector("#agree");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");

    if (window.blockedKeyword) {
        var blockK = window.blockedKeyword.data;
        var isBreak = false;

        blockK.forEach(function (word) {
            if (name.value.includes(word)) {
                isBreak = true;
                alert('차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name.value + ')');
                name.focus();
            }
        });

        if (isBreak === true) {
            return false;
        }
    }

    if (name.value === '' || name.value === 'undefined') {
        alert('이름을 입력해주세요.');
        name.focus();
        return false;
    } else {
        var cho_sung_result = /^[ㄱ-ㅎ]/.test(name.value);
        if (!cho_sung_result) {
            if (!/^[가-힣]{2,7}$/.test(name.value)) {
                alert('초성을 제외한 한글 2~7글자를 입력해주세요.');
                name.focus();
                return false;
            }
        } else {
            alert('초성을 제거해주세요.');
            name.focus();
            return false;
        }
    }

    if(phone.value === ''){
        alert('휴대폰 번호를 입력해주세요.');
        phone.focus();
        return false;
    }

    if (20000000 >= Number(phone.value) || phone.value.length !== 8) {
        alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
        phone.focus();
        return false;
    }

    if (!agree.checked) {
        alert('개인정보처리방침에 동의해주세요.');
        agree.focus();
        return false;
    }

    var formData = [
        {"key": "이름", "value": name.value},
        {"key": "번호", "value": "010"+phone.value}
    ];

    submit(formData).then(r => {});
}

async function submit(formData) {
    var variable = window.consultingResult = await window.inputCustData(formData),
        getStatus = variable.status;

    if (getStatus === 200) {
        window.dataLayer.push({
            event: "DB_input"
        });
        alert('상담신청이 완료되었습니다.');
    } else if (getStatus === 403) alert('비정상적인 접근입니다. 다시 시도해 주세요.');
    else if (getStatus === 500) alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}