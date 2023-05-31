let textoCanvas = () => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');

    ctx.font = "20px arial"
    ctx.fillText("Buena suerte en el juego :)", 100, 100);
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