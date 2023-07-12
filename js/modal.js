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
  
  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#2196F3';
  });
  
  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.persona');
    personaIconElement.style.fill = '#757575';
  });

   var input = document.getElementById('user-telefono');
  
  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.telefono');
    personaIconElement.style.fill = '#2196F3';
  });
  
  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.telefono');
    personaIconElement.style.fill = '#757575';
  });

  var input = document.getElementById('user-email');
  
  input.addEventListener('focus', function() {
    var personaIconElement = document.querySelector('.email');
    personaIconElement.style.fill = '#2196F3';
  });
  
  input.addEventListener('blur', function() {
    var personaIconElement = document.querySelector('.email');
    personaIconElement.style.fill = '#757575';
  });

var usermailInput = document.getElementById('myinput');

usermailInput.addEventListener('input', function() {
  usermailInput.classList.add('active');
});

usermailInput.addEventListener('blur', function() {
  if (usermailInput.value === '') {
    usermailInput.classList.remove('active');
  }
});
   
})();