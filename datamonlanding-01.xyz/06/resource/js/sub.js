window.silby = null;

window.addEventListener('load', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth()는 0부터 11까지 반환하므로 +1을 해야 합니다.

    switch (currentMonth){
        case 1: {
            document.querySelectorAll(".month01").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 2: {
            document.querySelectorAll(".month02").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 3: {
            document.querySelectorAll(".month03").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 4: {
            document.querySelectorAll(".month04").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 5: {
            document.querySelectorAll(".month05").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 6: {
            document.querySelectorAll(".month06").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 7: {
            document.querySelectorAll(".month07").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 8: {
            document.querySelectorAll(".month08").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 9: {
            document.querySelectorAll(".month09").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 10: {
            document.querySelectorAll(".month10").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 11: {
            document.querySelectorAll(".month11").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        case 12: {
            document.querySelectorAll(".month12").forEach(element => {
                element.style.display= "block"
            })
            break;
        }
        default: break;
    }

    document.querySelector('.silby_label>span').addEventListener('click', function () {
        const myModal = new bootstrap.Modal(document.getElementById('policyModal'));
        myModal.show();
    });
});

function silbyData(event){
    document.querySelectorAll(".silby_btn").forEach(element => {
        if (element.classList.contains('silby_active')) {
            element.classList.replace('silby_active', 'silby_no_active');
        }
    })

    event.target.classList.replace('silby_no_active', 'silby_active');
    if (event.target.classList.contains('silby_y_btn')) {
        window.silby='Y'
    }else{
        window.silby='N'
    }
}

function phone2OnKeyDownValidation(event){
    const inputElement = event.target;

    // 현재 값을 저장합니다.
    const currentValue = inputElement.value;

    // 처음 입력인 경우 이전 값을 저장하지 않습니다.
    if (currentValue.length === 0) {
        inputElement.dataset.previousValue = currentValue;
        return;
    }

    if(currentValue.length > 0){
        if(event.target.value.charAt(0) === "1"){
            inputElement.value = inputElement.dataset.previousValue;
        }else{
            inputElement.dataset.previousValue = currentValue;
        }
    }

    if(currentValue.length === 4){
        document.querySelector("#phone3").value="";
        document.querySelector("#phone3").focus();
    }
}

function phone3OnKeyDownValidation(event) {
    const inputElement = event.target;

    // 현재 값을 저장합니다.
    const currentValue = inputElement.value;

    // 이전 값을 저장합니다.
    if (currentValue.length === 0) {
        inputElement.dataset.previousValue = currentValue;
    }

    // 4글자가 넘어갈 때 값이 변경되지 않도록 합니다.
    if (currentValue.length >= 4 && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        return;
    }

    // 숫자, 백스페이스 및 네비게이션 키 이외의 입력을 무시합니다.
    if (!/^\d$/.test(event.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        return;
    }

    // 현재 값을 이전 값으로 갱신합니다.
    inputElement.dataset.previousValue = inputElement.value;
}


function onCLickDBInput() {
    var name = document.querySelector("#name");
    var phone2 = document.querySelector("#phone2");
    var phone3 = document.querySelector("#phone3");
    var agree = document.querySelector("#agree");

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
    
    if(window.silby === null){
        window.input_disable_message = '실비보험 여부를 선택해주세요.';
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
            { "key": "번호", "value": "010" + phone2.value + phone3.value },
            { "key": "실비여부", "value": window.silby }
        ];

        window.input_allow = true;
        dbInput();
        location.reload();

        return true;
    }
}