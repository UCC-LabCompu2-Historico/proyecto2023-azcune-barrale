/**
 * Descripción  La función comprueba si ingresaste algún valor al input
 * @method  validarFormulario
 * @param {string} ParámetroA - almacena un evento que se activa al cargarse la página, luego va a activarse otro evento cuando la página envíe el formulario.
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return si se valida el formulario, se envia el valor del input
 */

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    const usuario = document.getElementById("usuario1").value;
    if (usuario.length == '') {
        alert('Ingresa un usuario válido por favor');
        return;
    }
    this.submit();
}
