const radio = document.getElementById("radio");
let activated = false;

function playRadio() {
  if (!activated) {
    radio.src = "https://servidorrprivado.com/mp3/creciend/";
    radio.load();
    activated = true;
  }

  radio.muted = false;

  radio.play()
    .then(() => {
      console.log("Audio activado correctamente");
    })
    .catch(err => {
      alert("Toca el botón otra vez para activar el audio");
      console.error(err);
    });
}

function stopRadio() {
  radio.pause();
}

