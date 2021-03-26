const currentHostname = window.location.hostname;
const gladysUrl = "http://" + currentHostname + "/signup";

function detectGladysContainer() {
  fetch(gladysUrl).then(function (response) {
    if (response.status == "200") {
      window.location.replace(gladysUrl);
    }
  });
}

detectGladysContainer();
setInterval(detectGladysContainer, 5000);
