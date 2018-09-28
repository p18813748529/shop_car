function sendAjax(url,options){
    var _default = {
        method:"GET",
        data:null
    };
    for(var i in options){
        _default[i] = options[i];
    }
    //如果是get请求就要进行url拼接，和解决缓存问题
    if(_default.method.toUpperCase() === "GET"){
        url = url.indexOf("?")>-1 ? url + "&" + Date.now() : url + "?" + Date.now();
        for(var j in _default.data){
            url += "&" + j + "=" + _default.data[j];
        }
        // 拼接完成后将data清空
        _default.data = null;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method,url,true);
    xhr.send(_default.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            if(typeof _default.callBack === "function"){
                var result = JSON.parse(xhr.response);
                _default.callBack(result);
            }
        }
    };
}