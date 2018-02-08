function checkHaveApp(){
    console.log(navigator.userAgent)
    /******android*****/
    if (navigator.userAgent.match(/android/i) ){
        var nowTime = new Date().valueOf();
        setTimeout(function(){
            var launchTime = new Date().valueOf() - nowTime;
            if(launchTime < 28){     //28是调试估算出来的打开本地app基本需要的时间
                window.location = "/phone/forward/app_download_redirect"; //下载app页面
            }
        },25);
        window.location="mysppscheme://";//自己定义的scheme协议
    }
    /*******iPhone*******/
    if (navigator.userAgent.match(/iPhone/i) ){
        var nowTime = new Date().valueOf();
        setTimeout(function(){
            var launchTime = new Date().valueOf() - nowTime;
            if(launchTime < 28){     //28是调试估算出来的打开本地app基本需要的时间
                window.location = "/phone/forward/app_download_redirect"; //下载app页面
            }
        },25);
        window.location="mysppscheme://";//自己定义的scheme协议
    }
    /**********winxin***********/
    if (navigator.userAgent.match(/MicroMessenger/ig) ){
        location.url = '';
    }
}