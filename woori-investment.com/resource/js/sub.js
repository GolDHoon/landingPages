const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function goInputForm(){
    document.querySelector("#con06_wrapper").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('agree_modal_on').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('policyModal'));
    myModal.show();
});