window.onload = function() {
    console.log('페이지 로드가 완료되었습니다!');
    
    let scComponent = {
        "domain" : window.location.hostname,
        "path" : window.location.pathname,
        "ip1" : "",
        "ip2" : "",
        "ip3" : "",
        "ip4" : "",
        "mode" : ""
    }
    
    if(window.location.hostname.includes("localhost")){
        scComponent.mode = "local"
        console.log("로컬환경");
    }

    fetch('https://datamonserver-001.xyz/landingpage/getIp')
        .then(res => {
            debugger;
        })
};