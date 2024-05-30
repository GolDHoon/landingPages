window.onload = function() {
    console.log('페이지 로드가 완료되었습니다!');

    let scComponent = {
        "domain" : window.location.hostname,
        "path" : window.location.pathname,
        "mode" : ""
    }

    if(scComponent.domain.includes('local')){
        scComponent.mode == "local";
    } else{
        scComponent.mode == "prod";
    }

    function getLocalIP() {
        fetch('https://datamonserver-001.xyz/landingpage/getIp')
            .then(response => response.json())
            .then(res => {
                debugger;
            })
            .catch(error => {
                alert("서버장애")
            })
    }

    // companyId : 마스터유저의 ID
    // inputMode : 생성 - C, 추가 - A
    function inputLanding(companyId, inputMode) {
        fetch('https://datamonserver-001.xyz/landingpage/inputLaning', {
            method: 'POST', // 본문 데이터를 통한 요청 방법을 지정합니다.
            headers: {
                'Content-Type': 'application/json' // 보낼 내용의 종류를 지정합니다.
            },
            body: JSON.stringify({userId: companyId, inputMode: inputMode})
        })
        .then(response => response.json())
        .then(res => {
            debugger;
        })
        .catch(error => {
            alert("서버장애")
        })
    }

    function getBlockedKeywordList(){

    }

    getLocalIP(ip => console.log('My public IP is: ', ip));
    
    if(window.location.hostname.includes("localhost")){
        scComponent.mode = "local"
        console.log("로컬환경");
    }


};