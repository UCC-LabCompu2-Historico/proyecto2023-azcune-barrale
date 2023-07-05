/**
 * La función muestra una imagen que va desde la izquierda del canvas hasta donde termina, de manera infinita
 * @method animarImg
 * @return no retorna ningun valor
 */


x = 0;
dx = 2;
let animarImg = () => {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");
    canvas.width = canvas.width;


    const imagen = new Image();

    imagen.src = "../imagenes/messi1.jpg"
    imagen.onload = function () {
        context.drawImage(imagen, x, 60);
    }


    if (x > canvas.width) {
        x = 0;
    }
    x += dx;

}