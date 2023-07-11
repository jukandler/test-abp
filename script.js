console.log("Hallo Welt!");

document.getElementById("conf").onclick = function () {
    let result = confirm("Bitte bestätigen oder canceln");
    if (result === true) {
        console.log("Wurde bestätigt");
    } else {
        console.log("Wurde abgelehnt");
    }
}

document.getElementById("action").onclick = function () {
  let paint = document.getElementById("paint");
  paint.innerHTML = "Jetzt in Rot!";
  paint.setAttribute("style","color: red");
}
