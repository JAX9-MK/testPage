const formulario = document.querySelector('.formulario');
const alerta = document.getElementById('alerta');

formulario.addEventListener('submit', function(e) {
   
    e.preventDefault();

    const nombre = document.getElementById('nombreid').value;

    if (nombre.length < 4) {
        alerta.textContent = 'El nombre debe tener al menos 4 caracteres';
    } else {
        this.submit();
    }
});
