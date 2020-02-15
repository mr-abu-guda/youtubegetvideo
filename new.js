
var endpoint = "https://www.jsonstore.io/057659a9d963b284e9e6258299d237690c41e9731613c173213ac53166a526d6";

function fetchJSON(a) {
    var b = new XMLHttpRequest();
    b.open("GET", a, false);
    b.send(null);
    return b.responseText;
}

function isURL(a) {
    var b = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (b.test(a)) {
        console.log(b.test(a));
        return true;
    } else {
        console.log(b.test(a));
        return false;
    }
}

var hashh = window.location.hash.substr(1);

if ("000" != window.location.hash) {
    var res = JSON.parse(fetchJSON(endpoint + "/" + hashh));
    var data = res.result;
    if (null != data) if (isURL(data)) window.location.href = data;
}
