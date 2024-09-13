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

    let name = document.querySelector("#name");
    let phone = document.querySelectorAll(".phone");
    let company_name = document.querySelector("#company_name");
    let checked_company_type = document.querySelector('input[name="company_type"]:checked');
    let checked_counsel_type = Array.from(document.querySelectorAll('.counsel_type[type="checkbox"]')).filter(checkbox => checkbox.checked);

});
window.onload = () => {

};

