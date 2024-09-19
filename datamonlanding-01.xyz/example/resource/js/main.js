window.input = {};
window.input.data = [];

function closeExampleDescirption(){
    document.querySelectorAll(".example_description").forEach(node => {
        node.style.display = "none";
    })
}

// 주소복사기능
function addressCopy(text){
    // 클립보드에 복사하는 함수
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            alert('주소가 복사되었습니다.');
        }).catch(function(err) {
        });
    } else {
        // Clipboard API가 지원되지 않는 경우
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';  // 화면에서 이동되지 않게 고정
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
            document.execCommand('copy');
            alert('주소가 복사되었습니다.');
        } catch(err) {
        }
        document.body.removeChild(textarea);
    }
}

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