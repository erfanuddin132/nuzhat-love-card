document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('surpriseBtn');
  const message = document.getElementById('hiddenMessage');

  btn.addEventListener('click', function() {
    message.classList.toggle('show');
    
    if (message.classList.contains('show')) {
      btn.innerText = "Close Surprise 💖";
    } else {
      btn.innerText = "Click for a Surprise ✨";
    }
  });
});