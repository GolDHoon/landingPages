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
        alert('상담신청이 완료되었습니다.');
        location.reload(true);
    } else if (getStatus === 403) alert('비정상적인 접근입니다. 다시 시도해 주세요.');
    else if (getStatus === 500) alert('서버 내부 오류입니다. 다시 시도해 주세요.');
}

function goInputForm(){
    document.querySelector("#input_form_contents_wrapper").scrollIntoView({ behavior: 'smooth' });
}

function conversionCompanyType(event){
    document.querySelectorAll('.radio_label').forEach(node => {
        node.classList.remove('checked');
    });
    document.querySelector("#"+event.target.getAttribute('for')).checked = true;
    event.target.classList.add('checked');
}

function conversionCounselType(event) {
    event.preventDefault();
    const checkboxId = event.target.getAttribute('for');
    const checkbox = document.getElementById(checkboxId);

    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }

    if(checkbox.checked){
        event.target.classList.add('checked');
    }else{
        event.target.classList.remove('checked');
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

function hideSideButton(){
    const inputFormWrapper = document.getElementById('input_form_contents_wrapper');
    const rightWrapper = document.querySelectorAll('.right_wrapper')[0];

    if (!inputFormWrapper) {
        return;
    }

    if (!rightWrapper) {
        return;
    }

    const isInView = isInViewport(inputFormWrapper);

    if (isInView) {
        rightWrapper.classList.add('hidden');
    } else {
        rightWrapper.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function (){

    window.addEventListener('scroll', hideSideButton);
    window.addEventListener('resize', hideSideButton);
    hideSideButton();

});
window.onload = () => {

};

