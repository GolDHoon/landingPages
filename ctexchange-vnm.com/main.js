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
        alert('Ứng dụng Tư vấn đã hoàn tất.');
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
        window.input_disable_message = 'Vui lòng đồng ý với Chính sách bảo mật';
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
                alert("이미 신청되었습니다.");
                location.reload();
            }else{
                dbInput();
                window.duplChecker = true;
            }
        }
        return true;
    }
}