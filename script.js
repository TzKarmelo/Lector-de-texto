// Función para iniciar la síntesis de voz
function hablar() {
  const texto = document.getElementById('texto').value;
  if (texto !== '') {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(texto);
      const volumen = parseFloat(document.getElementById('volumen').value);
      utterance.volume = volumen;
      synth.speak(utterance);
  }
}

document.getElementById('hablar').addEventListener('click', hablar);
