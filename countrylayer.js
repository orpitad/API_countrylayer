var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();

request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=b57bb340254fa9e5a31c3a523aa33cb4');

request.send();

request.onload = function() {
    var data =  JSON.parse(this.response);
    for(var i = 0;i< data.length; i++) {
        console.log(data[i].name);
    }
}