function jsonp(url, callback, success) {
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = 'text/javascript';
    window[callback] = function (data) {
        success && success(data);
    }
    document.body.appendChild(script);
}