/**
 * Funcion para que cicle por todas las imagenes cada 5 segundos
 * @method cambiarImagenAlAzar
 * @return returna la imagen al azar
 */

function cambiarImagenAlAzar() {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");

    // donde estan las imagenes

    const imagenes = [
        "../imagenes/imagen1.jpg",
        "../imagenes/imagen2.jpg",
        "../imagenes/imagen3.jpg",
        "../imagenes/imagen4.jpg",
        "../imagenes/imagen5.jpg",
        "../imagenes/imagen6.jpg",
        "../imagenes/imagen7.jpg",
        "../imagenes/imagen8.jpg",
        "../imagenes/imagen9.jpg",
        "../imagenes/imagen10.jpg",
        "../imagenes/imagen11.jpg",
        "../imagenes/messi1.jpg",
    ];

    let indice = 0;

    function cambiarImagen() {
        // usa la imagen del indice
        const imagen = new Image();
        imagen.src = imagenes[indice];

        // pasa la imagen al canvas
        imagen.onload = function() {
            // bora la foto que estaba antes
            context.clearRect(0, 0, canvas.width, canvas.height);

            //ajusta el tamaño de la foto para que no se vea mal
            context.drawImage(imagen, 0, 0, canvas.width, canvas.height);
        };

        // le suma 1 al indice para que pasa a la foto siguiente
        indice = (indice + 1) % imagenes.length;
    }

    // lo hace por primera vez para que carge
    cambiarImagen();

    // le ingresa el tiempo en milisegundos para que cambie la imagen
    setInterval(cambiarImagen, 5000);
}

// para que se ejecute la funcion por primera vez y comienze el ciclo
window.onload = cambiarImagenAlAzar;