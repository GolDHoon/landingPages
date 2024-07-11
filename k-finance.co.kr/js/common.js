
window.onload = function () {
    let name = "";
    let phone = "";
    let agree = true;

    document.querySelector('.contents_img').addEventListener('click', function() {
        window.scrollTo(0,document.body.scrollHeight);
    });

    let nameInputElement = document.querySelectorAll('.nameInput');

    nameInputElement.forEach(element => {
        element.addEventListener('change', function() {
            name = element.value;

            nameInputElement.forEach(element2 => {
                element2.value = name;
            });
        });
    });

    let phoneInputElement = document.querySelectorAll('.phoneInput');

    phoneInputElement.forEach(element => {
        element.addEventListener('change', function() {
            phone = element.value;

            phoneInputElement.forEach(element2 => {
                element2.value = phone;
            });
        });
    });

    let agreeViewElement = document.querySelectorAll('.view');

    agreeViewElement.forEach(element => {
        element.addEventListener('click', function() {
            var modal = document.querySelector('.modal');
            modal.style.display = 'block';
        });
    })

    let agreeInputElement = document.querySelectorAll('.agreeInput');

    agreeInputElement.forEach(element => {
        element.addEventListener('change', function() {
            agree = element.checked;

            agreeInputElement.forEach(element2 => {
                element2.checked = agree;
            });
        });
    });


    let consultElement = document.querySelectorAll('.consult_button');

    consultElement.forEach(element => {
        element.addEventListener('click', function () {
            if (window.blockedKeyword) {
                var blockK = window.blockedKeyword.data;
                var isBreak = false;

                blockK.forEach(function (word) {
                    if (name.includes(word)) {  // checkName이 차단된 키워드를 포함하는지 확인
                        isBreak = true;
                        alert('차단된 키워드가 사용되었습니다. 다시 입력해 주세요. (' + name + ')');
                    }
                });

                if (isBreak === true) {
                    return false;
                }
            }

            if (name === '' || name === 'undefined') {
                alert('이름을 입력해주세요.');
                nameInputElement[0].focus();
                return false;
            } else {
                var cho_sung_result = /^[ㄱ-ㅎ]/.test(name);
                if (!cho_sung_result) {
                    if (!/^[가-힣]{2,7}$/.test(name)) {
                        alert('초성을 제외한 한글 2~7글자를 입력해주세요.');
                        nameInputElement[0].focus();
                        return false;
                    }
                } else {
                    alert('초성을 제거해주세요.');
                    nameInputElement[0].focus();
                    return false;
                }
            }

            if (phone === '' || phone === 'undefined') {
                alert('휴대폰 번호를 입력해주세요.');
                phoneInputElement[0].focus();
                return false;
            } else {
                phone = phone.replace(/-/g, "");
                if (!/^(?![01])\d{8}$/.test(phone)) {
                    alert('010을 제외한 휴대폰 번호를 정확히 입력해주세요.');
                    phoneInputElement[0].focus();
                    return false;
                }
            }

            if (!agree) {
                alert('개인정보처리방침에 동의해주세요.');
                agreeInputElement[0].focus();
                return false;
            }

            var formData = [
                {"key": "이름", "value": name},
                {"key": "번호", "value": "010" + phone}
            ];

            submit(formData);
        });
    })

    async function submit(formData) {
        var variable = window.consultingResult = await window.inputCustData(formData),
            getStatus = variable.status;

        if (getStatus == '200') {
            window.dataLayer.push({
                event: "DB_input"
            });
            alert('상담신청이 완료되었습니다.');
        } else if (getStatus == '403') alert('비정상적인 접근입니다. 다시 시도해 주세요.');
        else if (getStatus == '500') alert('서버 내부 오류입니다. 다시 시도해 주세요.');
    }

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
}

