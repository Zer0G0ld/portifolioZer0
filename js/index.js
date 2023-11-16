// CONTROLANDO A VISIBILIDADE COM CLASSES
function toggleExpansion(className) {
  var content = document.querySelector('.' + className);
  content.classList.toggle('visible');
}

// VALIDÇÃO DE FORMULARIO
document.getElementById('contact-form').addEventListener('submit', function (event) {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  // LOGICA DE VALIDAÇAO
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === ''){
    alert('Por favor, preencha todos os campos.');
    event.preventDefault();
  };
});
