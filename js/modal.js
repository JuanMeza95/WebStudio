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
// Obtener los elementos de input y checkbox
   // Obtener los elementos de input y checkbox
      const userInput = document.getElementById('user-input');
      const userTelefono = document.getElementById('user-telefono');
      const userEmail = document.getElementById('user-email');
      const checkbox = document.getElementById('rectangle-checkbox');
      const checkboxSvg = document.querySelector('.checkbox-svg');

      // Función para aplicar el efecto de focus a los elementos de input y su respectivo icono SVG
      function applyFocusEffect(inputElement, svgElement) {
        inputElement.addEventListener('focus', function () {
          svgElement.style.fill = '#2196F3';
        });

        inputElement.addEventListener('blur', function () {
          svgElement.style.fill = '#757575';
        });
      }

      // Aplicar efecto de focus a los elementos de input y sus respectivos iconos SVG
      applyFocusEffect(userInput, document.querySelector('.persona'));
      applyFocusEffect(userTelefono, document.querySelector('.telefono'));
      applyFocusEffect(userEmail, document.querySelector('.email'));

      // Agregar evento de clic al checkbox
      checkbox.addEventListener('click', function () {
        checkboxSvg.classList.remove('hidden');
        checkbox.classList.add('hidden');
      });

      checkboxSvg.addEventListener('click', function () {
        checkboxSvg.classList.add('hidden');
        checkbox.classList.remove('hidden');
      });
  
     const myInput = document.getElementById('myinput');

      // Agregar evento 'input' al input del footer
      myInput.addEventListener('input', function () {
        // Obtener el valor del input
        const inputValue = this.value;

        // Verificar si el valor del input está vacío
        if (inputValue.trim() === '') {
          // Si está vacío, quitar la clase 'active'
          this.classList.remove('active');
        } else {
          // Si no está vacío, agregar la clase 'active'
          this.classList.add('active');
        }
      });

      // Agregar evento 'focus' al input del footer
      myInput.addEventListener('focus', function () {
        // Al obtener el foco, asegurarse de que el input tenga la clase 'active'
        this.classList.add('active');
      });

      // Agregar evento 'blur' al input del footer
      myInput.addEventListener('blur', function () {
        // Al perder el foco, verificar si el valor del input está vacío y quitar la clase 'active' si es necesario
        const inputValue = this.value;
        if (inputValue.trim() === '') {
          this.classList.remove('active');
        }
      });
    })();
   