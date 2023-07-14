(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  const userInput = document.getElementById('user-input');
  const telefonoInput = document.getElementById('user-telefono');
  const emailInput = document.getElementById('user-email');
  const rect = document.querySelector('.rectangle-checkbox');
  const svg = document.querySelector('.checkbox-svg');

  userInput.addEventListener('focus', function() {
    const personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#2196F3';
  });

  userInput.addEventListener('blur', function() {
    const personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#757575';
  });

  telefonoInput.addEventListener('focus', function() {
    const telefonoIconElement = document.querySelector('.telefono');
    telefonoIconElement.style.fill = '#2196F3';
  });

  telefonoInput.addEventListener('blur', function() {
    const telefonoIconElement = document.querySelector('.telefono');
    telefonoIconElement.style.fill = '#757575';
  });

  emailInput.addEventListener('focus', function() {
    const emailIconElement = document.querySelector('.email');
    emailIconElement.style.fill = '#2196F3';
  });

  emailInput.addEventListener('blur', function() {
    const emailIconElement = document.querySelector('.email');
    emailIconElement.style.fill = '#757575';
  });

  rect.addEventListener('click', function() {
    svg.classList.remove('hidden');
    rect.classList.add('hidden');
  });

  svg.addEventListener('click', function() {
    svg.classList.add('hidden');
    rect.classList.remove('hidden');
  });
})();
