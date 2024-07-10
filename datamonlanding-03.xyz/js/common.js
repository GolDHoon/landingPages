window.onload = function () {
    var width = window.innerWidth;

    var imgElems = document.querySelectorAll('[alt="콘텐츠01"]');
    imgElems.forEach(function(imgElem) {
        if (width <= 768) {
            imgElem.src = './image/01_m.png';
        } else {
            imgElem.src = './image/01.png';
        }
    });

    alert("imgElems : " + imgElems);

    let contentboxList = document.querySelectorAll(".content-box");

    for(var i = 0; i <contentboxList.length; i++){
        contentboxList[i].style.height = contentboxList[i].offsetHeight - 4 + "px";
    }

    if(detectDevice() === "Mobile"){
        var imgElems = document.querySelectorAll('[alt="콘텐츠01"]');
        imgElem.src = './image/01_m.png';
    }

    window.onresize = bodyResize;
    bodyResize();
}

function bodyResize(){
    // let contentboxList = document.querySelectorAll(".content-box");
    //
    //
    // for(var i = 0; i < contentboxList.length; i++){
    //     contentboxList[i].style.height = contentboxList[i].offsetHeight - 4 + "px";
    // }

    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var imgElems = document.querySelectorAll('[alt="콘텐츠01"]');
    imgElems.forEach(function(imgElem) {
        if (width <= 768) {
            imgElem.src = './image/01_m.png';
        } else {
            imgElem.src = './image/01.png';
        }
    });
}

function detectDevice() {
    const userAgent = navigator.userAgent;

    if (/Mobi|Android/i.test(userAgent)) {
        return "Mobile";
    }
    return "PC";
}