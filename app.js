const radio = document.getElementById("radio");

function playRadio() {
  radio.load();        // fuerza carga del stream
  radio.play()
    .then(() => {
      console.log("Radio reproduciendo");
    })
    .catch(err => {
      alert("Toca el botón otra vez para activar el audio");
      console.error(err);
    });
}

function stopRadio() {
  radio.pause();
}
