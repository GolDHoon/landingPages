const body = document.querySelector("body");
const contentsDiv = document.querySelectorAll(".content");
const topper = document.querySelector(".topper");
const topperImg = document.querySelector(".topper_img");
const rollers1 = document.querySelectorAll(".roll-banner");
// const content03 = document.querySelector(".content03");
// const content03Item = document.querySelectorAll(".content03_item");

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,

    // autoplay: {
    //     delay: 5000,
    // },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

});

swiper.on('slideChange', function() {
    document.querySelectorAll(".roll-banner-selector").forEach(element => {
        element.style.fontWeight= ''
        element.style.color="gray";
    })
    document.querySelectorAll(".roll-banner-selector")[swiper.realIndex].style.fontWeight= 'bold'
    document.querySelectorAll(".roll-banner-selector")[swiper.realIndex].style.color="white";
});

function contentsReSizing(excluded){
    contentsDiv.forEach((content, index) => {
        excluded = Array.isArray(excluded) ? excluded : [ ];

        let backgroundImage = window.getComputedStyle(content).backgroundImage;

        backgroundImage = backgroundImage.slice(4, -1);

        backgroundImage = backgroundImage.replace(/"/g, '');

        const img = new Image();
        img.src = backgroundImage;

        img.onload = function() {
            const { width, height } = this;

            return {width: width, height : height}
        };

        if(!excluded.includes(index)){
            content.style.height = `${((img.onload().height)*(content.offsetWidth / img.onload().width)-1)}px`;
        }

    })

    topperImg.style.width = `${topper.offsetWidth}px`
}


function rollerReSizing(rollers){
    rollers.forEach(roller => {
        roller.style.height = document.querySelector(".content01").offsetHeight +"px";
    })
}

function contentReSizing(content, contents){
    let backgroundImage = window.getComputedStyle(content).backgroundImage;

    backgroundImage = backgroundImage.slice(4, -1);

    backgroundImage = backgroundImage.replace(/"/g, '');

    const img = new Image();
    img.src = backgroundImage;

    img.onload = function() {
        const { width, height } = this;

        return {width: width, height : height}
    };

    contents.forEach(item => {
        item.style.height = item.offsetHeight * (content.offsetHeight / img.onload().height) + "px";
    })

}

function nameCreate() {
    var familyNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임'];
    var givenNames = ['성', '하', '훈', '진', '우', '은', '규', '현', '수', '민', '진', '림', '영', '혁'];
    var singleCharacterPer = 0.1

    var randomFamilyName = familyNames[Math.floor(Math.random() * familyNames.length)];
    var randomGivenName = Math.floor(Math.random() * 10) > 1 ? givenNames[Math.floor(Math.random() * givenNames.length)] : "";

    return randomFamilyName + '*' + randomGivenName;
}

function numberCreate() {
    return "010-" + Math.floor(2000 + Math.random() * 8000).toString() + "-****";
}

function imgReSetting() {
    let date = new Date();
    let topper_img = document.querySelector(".topper_img");
    let topper_img_src = topper_img.src.substring(0, topper_img.src.indexOf("/resource/img/") + "/resource/img/".length);
    let date_count_img = document.querySelector(".date_count_img");
    let date_count_img_src = date_count_img.src.substring(0, date_count_img.src.indexOf("/resource/img/") + "/resource/img/".length);
    alert(body.offsetWidth)
    if(body.offsetWidth > 767){
        switch (date.getDay()){
            case 0:
                topper_img_src = topper_img_src + "top_0.png"
                break;
            case 1:
                topper_img_src = topper_img_src + "top_6.png"
                break;
            case 2:
                topper_img_src = topper_img_src + "top_5.png"
                break;
            case 3:
                topper_img_src = topper_img_src + "top_4.png"
                break;
            case 4:
                topper_img_src = topper_img_src + "top_3.png"
                break;
            case 5:
                topper_img_src = topper_img_src + "top_2.png"
                break;
            case 6:
                topper_img_src = topper_img_src + "top_1.png"
                break;
            default:
                break;
        }

        date_count_img_src = date_count_img_src + "date_count_banner_1.png";

        document.querySelectorAll(".roll-banner").forEach((element, index) => {
            let rollBanner_src = element.src.substring(0, element.src.indexOf("/resource/img/") + "/resource/img/".length);
            element.src = rollBanner_src + "content_01-" + (index+1) + "_bg.png"
        });
    }else{
        switch (date.getDay()){
            case 0:
                date_count_img_src = date_count_img_src + "date_count_banner_0.png"
                break;
            case 1:
                date_count_img_src = date_count_img_src + "date_count_banner_6.png"
                break;
            case 2:
                date_count_img_src = date_count_img_src + "date_count_banner_5.png"
                break;
            case 3:
                date_count_img_src = date_count_img_src + "date_count_banner_4.png"
                break;
            case 4:
                date_count_img_src = date_count_img_src + "date_count_banner_3.png"
                break;
            case 5:
                date_count_img_src = date_count_img_src + "date_count_banner_2.png"
                break;
            case 6:
                date_count_img_src = date_count_img_src + "date_count_banner_1.png"
                break;
            default:
                break;
        }

        topper_img_src = topper_img_src + "top_mo.png"

        document.querySelectorAll(".roll-banner").forEach((element, index) => {
            let rollBanner_src = element.src.substring(0, element.src.indexOf("/resource/img/") + "/resource/img/".length);
            element.src = rollBanner_src + "content_01-" + (index+1) + "_bg_mo.png"
        });

    }

    topper_img.src = topper_img_src;
    date_count_img.src = date_count_img_src;
}

window.addEventListener("load", function() {
    imgReSetting()

    let ul = document.querySelector('.banner_ul');

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // getMonth() is zero-based
    var day = ("0" + currentDate.getDate()).slice(-2);

    for(var i = 0; i < 100; i++){
        var slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide vertical-banner-list';
        slideDiv.style.width = '90%';
        slideDiv.style.display = 'flex';
        slideDiv.style.justifyContent = 'space-between';
        slideDiv.style.alignItems = 'center';
        slideDiv.role = 'group'
        slideDiv.ariaLabel = (i + 1).toString() + ' / 100'

        var itemDateDiv = document.createElement('div');
        itemDateDiv.className = 'vertical-banner-item item-date';
        itemDateDiv.textContent = `${year}-${month}-${day}`;
        slideDiv.appendChild(itemDateDiv);

        var itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'vertical-banner-item item-name';
        itemNameDiv.textContent = nameCreate();
        slideDiv.appendChild(itemNameDiv);

        var itemPhoneDiv = document.createElement('div');
        itemPhoneDiv.className = 'vertical-banner-item item-phone';
        itemPhoneDiv.textContent = numberCreate();
        slideDiv.appendChild(itemPhoneDiv);

        var wrapperDiv = document.querySelector('.swiper-wrapper.vertical-banner');
        wrapperDiv.appendChild(slideDiv);
    }

    const swiper2 = new Swiper('.swiper2', {
        direction: 'vertical',
        loop: true,

        slidesPerView:5,

        autoplay: {
            delay: 1000,
        },

        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
});

document.addEventListener("DOMContentLoaded", function() {
    imgReSetting();
    rollerReSizing(rollers1);
    setTimeout(function() {
    }, 1000);
});

window.addEventListener("resize", function () {
    // imgReSetting();
    contentsReSizing([2])
    rollerReSizing(rollers1);
})

window.addEventListener("scroll", function () {
    rollerReSizing(rollers1);
});

window.onload = function () {
    contentsReSizing([2])
    contentsReSizing([2]);
}

function rollBannerSelectorClick(evnet, index){
    swiper.slideTo(index)
}