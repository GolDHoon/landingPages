//설명 닫기 버튼 클릭
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

document.addEventListener("DOMContentLoaded", () => {

})