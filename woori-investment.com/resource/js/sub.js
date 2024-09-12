const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
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
    document.querySelector("#footer").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('agree_modal_on').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('policyModal'));
    myModal.show();
});

document.addEventListener('DOMContentLoaded', () => {
    const rightNavFixed = document.getElementById('right_nav_fixed');
    const targetElement = document.getElementById('con06_wrapper');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0 // Adjust as needed for when you want to trigger the effect
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rightNavFixed.classList.remove('fade-in');
                rightNavFixed.classList.add('fade-out');
            } else {
                rightNavFixed.classList.remove('fade-out');
                rightNavFixed.classList.add('fade-in');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(targetElement);
});