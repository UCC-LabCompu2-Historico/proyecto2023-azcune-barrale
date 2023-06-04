/**
 * Descripción Función que al pasar el mouse por el canvas muestra un mensaje.
 * @method  textoCanvas
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return  no retorna ningún valor.
 */
let textoCanvas = () => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');

    ctx.font = "18px Arial"
    ctx.fillText("Primero: suerte en el juego, segundo Francia.", 20, 100);
}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return returna let cantidad
 */

let cantidadCorrectas = () => {
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
    }
    if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }
    if (document.getElementById('preg5_3').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad = p1 + p2 + p3 + p4 + p5;
    alert('cantidad de aciertos: ' + cantidad);
    window.location = 'hist_mundial.html';
}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas2
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return returna let cantidad
 */

let cantidadCorrectas2 = () => {
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
    }
    if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }
    if (document.getElementById('preg5_4').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad = p1 + p2 + p3 + p4 + p5;
    alert('cantidad de aciertos: ' + cantidad);
    window.location = 'mexico_86.html';
}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas3
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return returna let cantidad
 */
let cantidadCorrectas3 = () => {
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
    }
    if (document.getElementById('preg4_4').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }
    if (document.getElementById('preg5_4').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad = p1 + p2 + p3 + p4 + p5;
    alert('cantidad de aciertos: ' + cantidad);
    window.location = 'uruguay_30.html';
}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas4
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return returna let cantidad
 */
let cantidadCorrectas4 = () => {
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
    }
    if (document.getElementById('preg4_3').checked == true) {
        p4 = 1;
    } else {
        p4 = 0;
    }
    if (document.getElementById('preg5_2').checked == true) {
        p5 = 1;
    } else {
        p5 = 0;
    }


    cantidad = p1 + p2 + p3 + p4 + p5;
    alert('cantidad de aciertos: ' + cantidad);
    window.location = 'qatar_22.html';
}
