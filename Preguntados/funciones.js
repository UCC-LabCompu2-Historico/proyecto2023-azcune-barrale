/**
 * La función cambia la imagen del canvas al azar
 * @method cambiarImagenAlAzar
 * @return return la imagen
 */

function cambiarImagenAlAzar() {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");

    const imagenes = ["../imagenes/imagen1.jpg", "../imagenes/imagen2.jpg", "../imagenes/imagen3.jpg", "../imagenes/imagen4.jpg", "../imagenes/imagen5.jpg", "../imagenes/imagen6.jpg", "../imagenes/imagen7.jpg", "../imagenes/imagen8.jpg", "../imagenes/imagen9.jpg", "../imagenes/imagen10.jpg", "../imagenes/imagen11.jpg"];

    const indice = Math.floor(Math.random() * imagenes.length);

    const imagen = new Image();
    imagen.src = imagenes[indice];

    imagen.onload = function() {
        //para calcular la escala, se divide el ancho del canvas por el ancho de la imagen
        const escala = Math.max(canvas.width / imagen.width, canvas.height / imagen.height);
        const ancho = imagen.width * escala;
        const alto = imagen.height * escala;

        //se calcula la diferencia entre el ancho del canvas y el ancho de la imagen
        const x = (canvas.width - ancho) / 2;
        const y = (canvas.height - alto) / 2;

        //vaciar
        context.clearRect(0, 0, canvas.width, canvas.height);

        //dibuja la imagen en el canvas con la escala y el tamaño
        context.drawImage(imagen, x, y, ancho, alto);
    };
}

const canvas = document.getElementById("canvas1");
canvas.addEventListener("click", cambiarImagenAlAzar);



/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas
 * @return returna let cantidad
 */

let cantidadCorrectas = () => {
    let p1, p2, p3, p4, p5, cantidad, respuestas;


    respuestas = 0;

    for (var i = 0; i < document.pregun1.a1.length; i++) {
        if (document.pregun1.a1[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a2[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a3[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a4[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a5[i].checked) {
            respuestas = respuestas + 1;
        }
    }

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
    if (respuestas == 5) {
        alert('cantidad de aciertos: ' + cantidad);
        window.location = 'hist_mundial.html';
    } else {
        alert('cantidad de aciertos: ' + cantidad + '\n' + 'Sin embargo, te faltó responder algunas preguntas!');
    }

}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas2
 * @return returna let cantidad
 */

let cantidadCorrectas2 = () => {
    let p1, p2, p3, p4, p5, cantidad, respuestas;

    respuestas = 0;

    for (var i = 0; i < document.pregun1.a1.length; i++) {
        if (document.pregun1.a1[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a2[i].checked) {
            respuestas = respuestas + 1;
        }
        if (i < 2) {
            if (document.pregun1.a3[i].checked) {
                respuestas = respuestas + 1;
            }
        }
        if (document.pregun1.a4[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a5[i].checked) {
            respuestas = respuestas + 1;
        }
    }

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

    if (respuestas === 5) {
        alert('cantidad de aciertos: ' + cantidad);
        window.location = 'mexico_86.html';
    } else {
        alert('cantidad de aciertos: ' + cantidad + '\n' + 'Sin embargo, te faltó responder algunas preguntas!');
    }

}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas3
 * @return returna let cantidad
 */
let cantidadCorrectas3 = () => {
    let p1, p2, p3, p4, p5, cantidad, respuestas;
    respuestas = 0;

    for (var i = 0; i < document.pregun1.a2.length; i++) {
        if (i < 2) {
            if (document.pregun1.a1[i].checked) {
                respuestas = respuestas + 1;
            }
        }
        if (document.pregun1.a2[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a3[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a4[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a5[i].checked) {
            respuestas = respuestas + 1;
        }
    }


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
    if (respuestas == 5) {
        alert('cantidad de aciertos: ' + cantidad);
        window.location = 'uruguay_30.html';
    } else {
        alert('cantidad de aciertos: ' + cantidad + '\n' + 'Sin embargo, te faltó responder algunas preguntas!');

    }
}

/**
 * La función cuenta la cantidad de respuestas correctas (hay 4 funciones, 1 para cada tema)
 * @method cantidadCorrectas4
 * @return returna let cantidad
 */
let cantidadCorrectas4 = () => {
    let p1, p2, p3, p4, p5, cantidad, respuestas;

    respuestas = 0;

    for (var i = 0; i < document.pregun1.a1.length; i++) {
        if (document.pregun1.a1[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a2[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a3[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a4[i].checked) {
            respuestas = respuestas + 1;
        }
        if (document.pregun1.a5[i].checked) {
            respuestas = respuestas + 1;
        }
    }

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
    if (respuestas == 5) {
        alert('cantidad de aciertos: ' + cantidad);
        window.location = 'qatar_22.html';
    } else {
        alert('cantidad de aciertos: ' + cantidad + '\n' + 'Sin embargo, te faltó responder algunas preguntas!');
    }
}

/**
 * Función que muestra una alerta si presionas el botón "VOLVER", diciendo que las respuestas no se guardaran.
 * @method volver
 * @return no retorna ningun valor
 */
let volver = () => {
    if (document.getElementById("cartelVolver").checked = true) {
        alert('Se le recuerda que al volver a la página anterior, el progreso del juego se perderá al igual que las respuestas.');
    }
}
