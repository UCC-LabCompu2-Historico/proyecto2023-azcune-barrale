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

