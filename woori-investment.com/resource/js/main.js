window.input_data = []
window.input_allow = false;
window.input_disable_message = "";

function closeExampleDescirption(){
    document.querySelectorAll(".example_description").forEach(node => {
        node.style.display = "none";
    })
}

function dbInput () {
    if(window.input_allow){
        submit(window.input_data).then(r => {});
    }else{
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
    } else if (getStatus === 403) alert('비정상적인 접근입니다. 다시 시도해 주세요.');
    else if (getStatus === 500) alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}

document.addEventListener("DOMContentLoaded", () => {

})