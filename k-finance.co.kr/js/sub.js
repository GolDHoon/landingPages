// 인풋폼 이동 함수
function toInputForm (event) {
    document.querySelector('.section-07').scrollIntoView({
        behavior: 'smooth' // 스크롤을 부드럽게 이동하게 설정
    });
}

// 전화번호 발리데이션
function phoneValidation(event){
    if(event.target.value.length > 7){
        event.target.value = previousValue;
    }else {
        previousValue = event.target.value;
    }
}


window.addEventListener("load", function() {
    let ul = document.querySelector('.banner_ul');

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // getMonth() is zero-based
    var day = ("0" + currentDate.getDate()).slice(-2);

    for(var i = 0; i < 100; i++){
        const swiperSlide = document.createElement('div');

        swiperSlide.className = 'swiper-slide';
        swiperSlide.style.display = 'flex';
        // swiperSlide.style.alignItems = 'center';
        swiperSlide.style.justifyContent = 'space-around';
        swiperSlide.role = 'group'
        swiperSlide.ariaLabel = (i + 1).toString() + ' / 100'

        var itemDateDiv = document.createElement('div');
        itemDateDiv.className = 'vertical-banner-item item-date';
        itemDateDiv.textContent = `${year}-${month}-${day}`;
        swiperSlide.appendChild(itemDateDiv);

        var itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'vertical-banner-item item-name';
        itemNameDiv.textContent = nameCreate();
        swiperSlide.appendChild(itemNameDiv);

        var itemPhoneDiv = document.createElement('div');
        itemPhoneDiv.className = 'vertical-banner-item item-phone';
        itemPhoneDiv.textContent = numberCreate();
        swiperSlide.appendChild(itemPhoneDiv);


        const swiperWrapper = document.querySelector('.slide_custom_list');
        swiperWrapper.appendChild(swiperSlide);

        swiperWrapper.parentNode.replaceChild(document.querySelector('.slide_custom_list'), swiperWrapper);
    }

    const swiper = new Swiper('.mySwiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        speed: 400,
        slidesPerView: 5,
        autoplay: {
            delay: 1000, // 슬라이드가 자동으로 넘어가는 시간 간격 (ms)
            disableOnInteraction: true, // 상호작용 후에도 autoplay 유지
        },
    });
});
//이름생성기
function nameCreate() {
    var familyNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임'];
    var givenNames = ['성', '하', '훈', '진', '우', '은', '규', '현', '수', '민', '진', '림', '영', '혁'];
    var singleCharacterPer = 0.1

    var randomFamilyName = familyNames[Math.floor(Math.random() * familyNames.length)];
    var randomGivenName = Math.floor(Math.random() * 10) > 1 ? givenNames[Math.floor(Math.random() * givenNames.length)] : "";

    return randomFamilyName + '*' + randomGivenName;
}


//전화번호 생성기
function numberCreate() {
    return "010-" + Math.floor(2000 + Math.random() * 8000).toString() + "-****";
}

