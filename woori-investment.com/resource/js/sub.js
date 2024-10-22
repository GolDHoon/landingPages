// main.js에서 설정한 전역 변수 사용
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function goInputForm() {
    document.querySelector("#footer").scrollIntoView({ behavior: 'smooth' });
}

// main.js의 dbInput 함수를 사용할 수 있음
function onCLickDBInput() {
    const agree = document.querySelector("#agree");
    const name = document.querySelector("#name");
    const phone2 = document.querySelector("#phone2");
    const phone3 = document.querySelector("#phone3");

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


        window.input_data = [
            { "key": "성함", "value": name.value },
            { "key": "번호", "value": "010" + phone2.value + phone3.value }
        ];

        window.duplChecker = false;

        try {
            for(var i = 0; i < window.duplRmList.data.length; i++) {
                for(var j = 0; j < window.duplRmList.data[i].row.length; j++) {
                    for(var k = 0; k < window.duplRmList.data[i].columns.length; k++) {
                        for(var l = 0; l < window.input_data.length; l++) {
                            if(window.input_data[l].key === window.duplRmList.data[i].columns[k]){
                                if(window.duplRmList.data[i].row[j][window.duplRmList.data[i].columns[k]] === window.input_data[l].value){
                                    window.duplChecker = true;
                                }
                            }
                        }
                    }
                }
            }
        }catch (e){
        }finally {
            window.input_allow = true;
            if(window.duplChecker){
                alert("이미 신청되었습니다.")
            }else{
                dbInput();
                window.duplChecker = true;
            }
        }
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

document.getElementById('agree_modal_on').addEventListener('click', function () {
    const myModal = new bootstrap.Modal(document.getElementById('policyModal'));
    myModal.show();
});

// document.addEventListener('DOMContentLoaded', () => {
//     const rightNavFixed = document.getElementById('right_nav_fixed');
//     const targetElement = document.getElementById('con06_wrapper');

//     const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 1.0
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 rightNavFixed.classList.remove('fade-in');
//                 rightNavFixed.classList.add('fade-out');
//             } else {
//                 rightNavFixed.classList.remove('fade-out');
//                 rightNavFixed.classList.add('fade-in');
//             }
//         });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     observer.observe(targetElement);
// });