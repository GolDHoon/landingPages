window.addEventListener('load', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth()는 0부터 11까지 반환하므로 +1을 해야 합니다.

    switch (currentMonth){
        case 1: {
            document.querySelectorAll(".month01").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 2: {
            document.querySelectorAll(".month02").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 3: {
            document.querySelectorAll(".month03").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 4: {
            document.querySelectorAll(".month04").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 5: {
            document.querySelectorAll(".month05").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 6: {
            document.querySelectorAll(".month06").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 7: {
            document.querySelectorAll(".month07").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 8: {
            document.querySelectorAll(".month08").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 9: {
            document.querySelectorAll(".month09").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 10: {
            document.querySelectorAll(".month10").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 11: {
            document.querySelectorAll(".month11").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        case 12: {
            document.querySelectorAll(".month12").forEach(elemnt => {
                elemnt.style.display= "block"
            })
            break;
        }
        default: break;
    }
});