resize()

document.body.onresize = function() {
    resize()
}

let ul = document.querySelector('.banner_ul');

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // getMonth() is zero-based
var day = ("0" + currentDate.getDate()).slice(-2);

for(var i = 0; i < 100; i++){
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // 새로운 div 요소를 생성합니다
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide swiper-custom-item-wrapper';
    swiperSlide.style.display = 'flex';
    swiperSlide.style.justifyContent = 'space-around';
    swiperSlide.style.alignItems = 'center';
    swiperSlide.role = 'group'
    swiperSlide.ariaLabel = (i + 1).toString() + ' / 100'

    // 각 하위 요소를 생성하고 텍스트를 설정합니다
    const dateDiv = document.createElement('div');
    dateDiv.className = 'swiper-custom-item-date';
    dateDiv.textContent = `${year}-${month}-${day}`;

    const nameDiv = document.createElement('div');
    nameDiv.className = 'swiper-custom-item-name';
    nameDiv.textContent = nameCreate();

    const numberDiv = document.createElement('div');
    numberDiv.className = 'swiper-custom-item-number';
    numberDiv.textContent = numberCreate();

    // 하위 요소들을 부모 요소에 추가합니다
    swiperSlide.appendChild(dateDiv);
    swiperSlide.appendChild(nameDiv);
    swiperSlide.appendChild(numberDiv);

    // 최종적으로 swiper-wrapper에 새로운 요소를 추가합니다
    swiperWrapper.appendChild(swiperSlide);

}

function resize(){
    if(document.body.offsetWidth < 768){
        document.querySelector("#top_img").src = document.querySelector("#top_img").src.substring(0, document.querySelector("#top_img").src.indexOf("/resource/image/") + "/resource/image/".length) + "top_mo.png"
        document.querySelector("#custDBForm_button").style.width = (((315/560) * document.querySelector("#content04").offsetWidth) * 0.8).toString() + 'px';
    }else{
        document.querySelector("#top_img").src = document.querySelector("#top_img").src.substring(0, document.querySelector("#top_img").src.indexOf("/resource/image/") + "/resource/image/".length) + "top.png"
        document.querySelector("#custDBForm_button").style.width = (((315/560) * document.querySelector("#content04").offsetWidth) * 0.5).toString() + 'px';
    }


    document.querySelector("#space-top").style.height = document.querySelector("#top_img").offsetHeight.toString()+'px';
    document.querySelector("#content01").style.minHeight = ((4679/1920) * document.querySelector("#content01").offsetWidth).toString() + 'px';
    document.querySelector("#content02").style.minHeight = ((1328/1920) * document.querySelector("#content02").offsetWidth).toString() + 'px';
    document.querySelector("#content02-01").style.width = ((428/920) * document.querySelector("#content02").offsetWidth).toString() + 'px';
    document.querySelector("#content03").style.minHeight = ((567/1920) * document.querySelector("#content03").offsetWidth).toString() + 'px';
    document.querySelector(".contents03-wrapper").style.minHeight = document.querySelector("#content03").style.minHeight
    document.querySelector("#content03-01").style.width = ((335/1920) * document.querySelector("#content03").offsetWidth).toString() + 'px';
    document.querySelector("#youtube").style.width = (((315/560) * document.querySelector("#content03").offsetWidth) * 0.7).toString() + 'px';
    document.querySelector("#youtube").style.height = ((315/560) *  Number(document.querySelector("#youtube").style.width.replace('px', ''))) + 'px';
    document.querySelector("#content04").style.minHeight = ((1100/1920) * document.querySelector("#content04").offsetWidth).toString() + 'px';
    document.querySelector("#content04-01").style.width = (((315/560) * document.querySelector("#content04").offsetWidth) * 0.5).toString() + 'px';
    document.querySelector(".swiper").style.height = ((Number(document.querySelector("#content02").style.minHeight.replace("px","")) - Number(document.querySelector("#content03-01").style.height.replace("px","")))*0.5).toString() + "px"
}

function topperOnClick() {
    // window.scrollTo(0, document.body.scrollHeight);
    document.querySelector("#content04").scrollIntoView();
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

function modalView(){
    document.getElementById('myModal').style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
function modalClose() {
    document.getElementById('myModal').style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}

function phone2OnChange(event) {
    if(!(event.key === 'Backspace' || event.key === 'Delete')) {
        if(event.target.value.length === 4){
            document.querySelector("#phone3").focus();
        }
    }
}

function phone3OnChange(event) {
    if(!(event.key === 'Backspace' || event.key === 'Delete')) {
        if(event.target.value.length >= 4){
            document.querySelector("#phone3").value = event.target.value.toString().substring(0, 3);
        }
    }
}
function nameMoOnChange(event) {
    document.querySelector("#name").value = event.target.value
}

function phone2MoOnKeyDown(event) {
    if(!(event.key === 'Backspace' || event.key === 'Delete')) {
        if(event.target.value.length >= 8){
            document.querySelector("#phone2_mo").value = event.target.value.toString().substring(0, 7);
        }
    }
}

function phone2MoOnChange(event) {
    document.querySelector("#phone2").value = event.target.value.substring(0,4);
    document.querySelector("#phone3").value = event.target.value.substring(4,8);
}

function moAgreeButtonOnClick(event) {
    modalView();
    if(window.isAgree === 0){
        document.querySelector("#mo_agree_button").classList.remove('agree_n');
        document.querySelector("#mo_agree_button").classList.add('agree_y');
        window.isAgree = 1;
        document.querySelector("#mo_agree_button").innerText = '개인정보 수집거부';
        alert("개인정보 수집을 동의하셨습니다.");
    }else{
        document.querySelector("#mo_agree_button").classList.remove('agree_y');
        document.querySelector("#mo_agree_button").classList.add('agree_n');
        window.isAgree = 0;
        document.querySelector("#mo_agree_button").innerText = '개인정보 수집동의';
        alert("개인정보 수집을 거부하셨습니다.");
    }
}