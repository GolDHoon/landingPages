window.onload = function() {
    const swiper = new Swiper('.swiper_01', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 1000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        //
        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
};