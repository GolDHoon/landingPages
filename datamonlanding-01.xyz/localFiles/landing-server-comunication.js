window.onload = function() {
    window.blockedKeyword = {};
    window.lpgeCode = {};
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

    if(scComponent.domain.includes('local') || scComponent.domain.includes('datamon')){
        url = 'http://localhost:8080';
        scComponent.mode = "local";
        // if( scComponent.domain.includes('datamon')){
        //     scComponent.mode = "dev";
        //     url = 'https://datamonserver-002.xyz';
        // }
    } else{
        url = 'https://datamonserver-001.xyz'
        scComponent.mode = "prod";
    }

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

    window.inputLanding = async function inputLanding(createId, password, companyId, mode, pageDescription) {
        var result = {};
        await fetch(url + '/landingPage/inputLanding', {
            method: 'POST', // 본문 데이터를 통한 요청 방법을 지정합니다.
            headers: {
                'Content-Type': 'application/json' // 보낼 내용의 종류를 지정합니다.
            },
            body: JSON.stringify({
                "createId":createId,
                "password" : password,
                "userId": companyId,
                "mode": scComponent.mode,
                "inputMode": mode,
                "domain": window.location.hostname,
                "pageDescription": pageDescription})
        })
            .then(response => {XMLDocument
                result.status = response.status
                return response.json()
            })
            .then(response => {
                result.data = response.result;
            })
            .catch((error) => {
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
            });

        return result;
    }

    async function getInitialData(url) {
        fetch(url +'/landingPage/getInitialData?domain='+window.location.hostname+window.location.pathname, {
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

    getInitialData(url).then(r => {}).catch();
};