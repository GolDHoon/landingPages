window.onload = function() {
    window.blockedKeyword = {};
    window.lpgeCode = {};
    console.log('페이지 로드가 완료되었습니다!');
    /*
    상수 사용
    window.lpgeCode : 랜딩페이지 코드
    window.blockedKeyword : 차단키워드
    */

    let scComponent = {
        "domain" : window.location.hostname,
        "path" : window.location.pathname,
        "mode" : ""
    }

    let url;

    if(scComponent.domain.includes('local')){
        url = 'http://localhost:8080';
        scComponent.mode = "local";
        console.log("로컬환경");
    } else{
        url = 'https://datamonserver-001.xyz'
        scComponent.mode = "prod";
        console.log("운영환경");
    }

    async function getInitialData(url) {
        fetch(url + '/landingPage/getInitialData', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => {
                window.lpgeCode.status = response.status;
                return response.json()
            })
            .then(result => {
                window.lpgeCode.data = result.lpgeCode;

                fetch(url + '/landingPage/getBlockedKeyword?lpgeCode='+window.lpgeCode.data, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                })
                    .then(response => {
                        window.blockedKeyword.status = response.status;
                        return response.json()
                    })
                    .then(result2 => {
                        window.blockedKeyword.data = result2;
                    })
                    .then(() =>{
                        window.lpgeCode = Object.freeze(window.lpgeCode);
                        window.blockedKeyword = Object.freeze(window.blockedKeyword);
                    })
            })
            .catch(error => {
                return error;
            });
    }

    getInitialData(url);

    function getUTMParameters() {
        let urlParams = new URLSearchParams(window.location.search);
        let parameters = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

        let result = {};
        for(let param of parameters) {
            result[param] = urlParams.has(param) ? urlParams.get(param) : null;
        }

        return result;
    }

    window.utm = Object.freeze(getUTMParameters());

    // createId : 생성 유저의 Idx
    // password : 성성 유저의 password
    // companyId : 매핑할 유저의 Idx
    // pageDescription : 페이지 설명
    // 호출 : var variable = await inputLanding(3, "password", 2,"TEST")
    window.inputLanding = async function inputLanding(createId, password, companyId, pageDescription) {
        var result = {};
        await fetch(url + '/landingPage/inputLanding', {
            method: 'POST', // 본문 데이터를 통한 요청 방법을 지정합니다.
            headers: {
                'Content-Type': 'application/json' // 보낼 내용의 종류를 지정합니다.
            },
            body: JSON.stringify({"createId":createId, "password" : password, "userId": companyId, "inputMode": scComponent.mode, "pageDescription": pageDescription})
        })
        .then(response => {
            result.status = response.status
            return response.json()
        })
        .then(response => {
            result.data = response.result;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        return result;
    }

    window.inputCustData = async  function inputCustData(data){
        var result = {};
        await fetch(url + '/landingPage/inputCustData', {
            method: 'POST', // 본문 데이터를 통한 요청 방법을 지정합니다.
            headers: {
                'Content-Type': 'application/json' // 보낼 내용의 종류를 지정합니다.
            },
            body: JSON.stringify({
                "lpgeCode":window.lpgeCode.data,
                "utmSource" : window.utm.utm_source,
                "utmMedium" : window.utm.utm_medium,
                "utmCampaign" : window.utm.utm_campaign,
                "utmTerm" : window.utm.utm_term,
                "utmContent" : window.utm.utm_content,
                "data": data,
                "inputMode": scComponent.mode
            })
        })
            .then(response => {
                result.status = response.status
                return response.json()
            })
            .then(response => {
                result.data = response.result;
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        return result;
    }
};