const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  const currentMode = body.classList.contains('dark-mode') ? 'Terang' : 'Gelap';
  toggleButton.textContent = `Mode ${currentMode}`;
});