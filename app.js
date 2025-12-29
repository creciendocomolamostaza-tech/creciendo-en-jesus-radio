alert("JavaScript cargado correctamente");
const radio = document.getElementById("radio");

function playRadio() {
  radio.play();
}

function stopRadio() {
  radio.pause();
  radio.currentTime = 0;

}
