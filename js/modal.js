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

  var input = document.getElementById('user-input');
  var rect = document.querySelector('.rectangle');
  var svg = document.querySelector('.checkbox-svg');

  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#2196F3';
    rect.classList.remove('hidden');
    svg.classList.remove('hidden');
  });

  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#757575';
    rect.classList.add('hidden');
    svg.classList.add('hidden');
  });

  var input = document.getElementById('user-telefono');

  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.telefono');
    personaIconElement.style.fill = '#2196F3';
    rect.classList.remove('hidden');
    svg.classList.remove('hidden');
  });

  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.telefono');
    personaIconElement.style.fill = '#757575';
    rect.classList.add('hidden');
    svg.classList.add('hidden');
  });

  var input = document.getElementById('user-email');

  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.email');
    personaIconElement.style.fill = '#2196F3';
    rect.classList.remove('hidden');
    svg.classList.remove('hidden');
  });

  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.email');
    personaIconElement.style.fill = '#757575';
    rect.classList.add('hidden');
    svg.classList.add('hidden');
  });

  var usermailInput = document.getElementById('myinput');

  usermailInput.addEventListener('input', function() {
    usermailInput.classList.add('active');
    rect.classList.remove('hidden');
    svg.classList.remove('hidden');
  });

  usermailInput.addEventListener('blur', function() {
    if (usermailInput.value === '') {
      usermailInput.classList.remove('active');
      rect.classList.add('hidden');
      svg.classList.add('hidden');
    }
  });
 const rectanglecheckbox = document.querySelector('.rectangle-checkbox');

  rectanglecheckbox.addEventListener('click', function() {
    svg.classList.remove('hidden');
    rectanglecheckbox.classList.add('hidden');
  });

  svg.addEventListener('click', function() {
    svg.classList.add('hidden');
    rectanglecheckbox.classList.remove('hidden');
  });
})();


