let textoCanvas = () => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');

    ctx.font = "18px Arial"
    ctx.fillText("Primero: suerte en el juego, segundo Francia.", 20, 100);
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById("usuario1").value;
    if (usuario.length == "") {
        alert('Ingresa un usuario válido por favor');
        return;
    }
    this.submit();
}