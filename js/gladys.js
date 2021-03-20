setInterval(detectGladysContainer, 30000);

var currentHostname = window.location.hostname;
var gladysUrl = 'http://' + currentHostname + '/signup';

function detectGladysContainer() {
    var myRequest = new Request(gladysUrl);
    fetch(myRequest).then(function (response) {
        if (response.status == '200') {
            window.location.replace(gladysUrl);
        }
    });
};

detectGladysContainer();