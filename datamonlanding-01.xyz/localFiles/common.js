console.log('js is load👍');

async function checkFormData() {
    var formData =  [
        {"key": "이름", "value":document.querySelector("#name").value},
        {"key": "번호", "value":"010"+document.querySelector("#phone").value},
        {"key": "실비", "value":document.querySelector('input[name="silby"]:checked').value},
        {"key": "거주지", "value":document.querySelector("#local").value}
    ];

    var variable = window.consultingResult = await inputCustData(formData),
        getStatus = variable.status;

    if(getStatus == '200') {
        window.dataLayer.push({
            event: "DB_input"
        });
        alert('상담신청이 완료되었습니다.');
    } else if (getStatus == '403') alert('비정상적인 접근입니다. 다시 시도해 주세요.');
    else if (getStatus == '500') alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}