const modal = document.getElementById('promo-modal');
const acceptBtn = document.getElementById('accept-modal');
const closeBtn = document.getElementById('close-modal');
const timerDisplay = document.getElementById('modal-timer');

// cerrar ventana //
function cerrarModal() {
  modal.classList.add('hidden');
}

acceptBtn.addEventListener('click', cerrarModal);
closeBtn.addEventListener('click', cerrarModal);