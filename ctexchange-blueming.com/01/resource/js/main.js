document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.querySelector('.content04');
    var rightDiv = document.querySelector('.right');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                rightDiv.classList.add('hidden');
            } else {
                rightDiv.classList.remove('hidden');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(targetElement);
});

const modal = document.querySelector("#myModal");

function toInputForm (event) {
    document.querySelector('.content04').scrollIntoView({
        behavior: 'smooth' // 스크롤을 부드럽게 이동하게 설정
    });
}

function modalOpen (event) {
    modal.style.display = "block";
}

function modalClose (event) {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if("agreeView" !== event.target.id){
        modalClose(event);
    }
}

function dbInput(event){
    var name = document.querySelector("#nameInput");
    var phone = document.querySelector("#phoneInput");
    var phone2 = document.querySelector("#phoneInput2");
    var phone3 = document.querySelector("#phoneInput3");
    var agree = document.querySelector("#agree");

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

    if(phone2.value === ''){
        alert('휴대폰 번호를 입력해주세요.');
        phone2.focus();
        return false;
    }

    if(phone3.value === ''){
        alert('휴대폰 번호를 입력해주세요.');
        phone3.focus();
        return false;
    }

    if (2000 >= Number(phone2.value) || phone2.value.length !== 4) {
        alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
        phone2.focus();
        return false;
    }

    if (phone3.value.length !== 4) {
        alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
        phone3.focus();
        return false;
    }

    if (!agree.checked) {
        alert('개인정보처리방침에 동의해주세요.');
        agree.focus();
        return false;
    }

    var formData = [
        {"key": "이름", "value": name.value},
        {"key": "번호", "value": "010"+phone2.value+phone3.value}
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