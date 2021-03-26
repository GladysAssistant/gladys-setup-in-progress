const currentHostname = window.location.hostname;
const gladysUrl = "http://" + currentHostname + "/signup";

function detectGladysContainer() {
  fetch(gladysUrl).then(function (response) {
    if (response.status == "200") {
      window.location.replace(gladysUrl);
    }
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  if (navigator.language && navigator.language.indexOf("fr") !== -1) {
    document.getElementById("description-text-fr").style.display = "block";
  } else {
    document.getElementById("description-text-en").style.display = "block";
  }
  detectGladysContainer();
  setInterval(detectGladysContainer, 5000);
});
