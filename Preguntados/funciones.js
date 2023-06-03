/**
 * Descripción: Función que al pasar el mouse por el canvas muestra un mensaje.
 * @method - textoCanvas
 * @return - no retorna ningún valor.
 */




let textoCanvas = () => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');

    ctx.font = "18px Arial"
    ctx.fillText("Primero: suerte en el juego, segundo Francia.", 20, 100);
}




/**
 * Descripción - La función comprueba si ingresaste algún valor al input
 * @method - validarFormulario
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return - Valor que retorna
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


/**
 * Descripción - La función cuenta la cantidad de respuestas correctas
 * @method - cantidadCorrectas
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return - Valor que retorna
 */

let  cantidadCorrectas  = () => {
    let p1, p2, p3, p4, p5, cantidad;

    if (document.getElementById('preg1_2').checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }
    if (document.getElementById('preg2_4').checked == true) {
        p2 = 1;
    } else {
        p2 = 0;
    }
    if (document.getElementById('preg3_2').checked == true) {
        p3 = 1;
    } else {
        p3 = 0;
    }if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }if (document.getElementById('preg5_3').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


cantidad=p1+p2+p3+p4+p5;
alert('cantidad de aciertos: '+cantidad);
window.location = 'hist_mundial.html';
}

let  cantidadCorrectas2  = () => {
    let p1, p2, p3, p4, p5, cantidad;

    if (document.getElementById('preg1_1').checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }
    if (document.getElementById('preg2_1').checked == true) {
        p2 = 1;
    } else {
        p2 = 0;
    }
    if (document.getElementById('preg3_1').checked == true) {
        p3 = 1;
    } else {
        p3 = 0;
    }if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }if (document.getElementById('preg5_4').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad=p1+p2+p3+p4+p5;
    alert('cantidad de aciertos: '+cantidad);
    window.location = 'mexico_86.html';
}
let  cantidadCorrectas3  = () => {
    let p1, p2, p3, p4, p5, cantidad;

    if (document.getElementById('preg1_2').checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }
    if (document.getElementById('preg2_1').checked == true) {
        p2 = 1;
    } else {
        p2 = 0;
    }
    if (document.getElementById('preg3_3').checked == true) {
        p3 = 1;
    } else {
        p3 = 0;
    }if (document.getElementById('preg4_4').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }if (document.getElementById('preg5_4').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad=p1+p2+p3+p4+p5;
    alert('cantidad de aciertos: '+cantidad);
    window.location = 'uruguay_30.html';
}

let  cantidadCorrectas4  = () => {
    let p1, p2, p3, p4, p5, cantidad;

    if (document.getElementById('preg1_4').checked == true) {
        p1 = 1;
    } else {
        p1 = 0;
    }
    if (document.getElementById('preg2_1').checked == true) {
        p2 = 1;
    } else {
        p2 = 0;
    }
    if (document.getElementById('preg3_3').checked == true) {
        p3 = 1;
    } else {
        p3 = 0;
    }if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }if (document.getElementById('preg5_2').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad=p1+p2+p3+p4+p5;
    alert('cantidad de aciertos: '+cantidad);
    window.location = 'qatar_22.html';
}
