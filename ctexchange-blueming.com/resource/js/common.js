
function consultingButton () {
    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone1").value + document.querySelector("#phone2").value + document.querySelector("#phone3").value;
    let phone2 = document.querySelector("#phone2").value;
    let phone3 = document.querySelector("#phone3").value;
    let agree = true;

    if (window.blockedKeyword) {
        var blockK = window.blockedKeyword.data;
        var isBreak = false;

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
        document.querySelector("#name").focus();
        return false;
    } else {
        var cho_sung_result = /^[ㄱ-ㅎ]/.test(name);
        if (!cho_sung_result) {
            if (!/^[가-힣]{2,7}$/.test(name)) {
                alert('초성을 제외한 한글 2~7글자를 입력해주세요.');
                document.querySelector("#name").focus();
                return false;
            }
        } else {
            alert('초성을 제거해주세요.');
            document.querySelector("#name").focus();
            return false;
        }
    }

    if(phone2 === ''){
        alert('휴대폰 번호를 입력해주세요.');
        document.querySelector("#phone2").focus();
        return false;
    }

    if(phone3 === ''){
        alert('휴대폰 번호를 입력해주세요.');
        document.querySelector("#phone3").focus();
        return false;
    }

    if (2000 >= Number(phone2) || phone2.length !== 4) {
        alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
        document.querySelector("#phone2").focus();
        return false;
    }

    if (phone3.length !== 4) {
        alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
        document.querySelector("#phone3").focus();
        return false;
    }

    if (!document.querySelector('.agreeCheckBox').checked) {
        alert('개인정보처리방침에 동의해주세요.');
        document.querySelector('.agreeCheckBox').focus();
        return false;
    }

    var formData = [
        {"key": "이름", "value": name},
        {"key": "번호", "value": phone}
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

document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

