
var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

var colores = ["white","black","yellow","blue","red","orange","skyblue", "darkgreen","fuchsia","pink","brown", "grey"];

var tamahoCuadrado = 30; 
var j = 0;

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 400, 400);

crearPaleta();
function crearPaleta() {
    let xMover = 5; 
    for (let i = 0; i < colores.length; i++) {
        pincel.fillStyle = colores [i];
        pincel.fillRect(xMover, 5,  tamahoCuadrado, tamahoCuadrado); 
        pincel.stroke = "black";
        pincel.strokeRect(xMover,5,tamahoCuadrado,tamahoCuadrado);
        xMover = xMover + 30;

    }
}

function seleccionarColor(evento) {
    let x = evento.pageX-pantalla.offsetLeft; 
    let y = evento.pageY-pantalla.offsetTop;
    
    if(x < tamahoCuadrado*colores.length+5 && x > 5
         && y < tamahoCuadrado+5 && y > 5) {
        for(let i = 0; i < colores.length; i++) {
            if(x < tamahoCuadrado*(i+1)+5 && x > 5 
            && y < tamahoCuadrado+5 && y > 5) {
                j = i; 
                break;
            }
        }
    }
}

var puedoDibujar = false; 

function dibujarCirculo(evento) {
    if(puedoDibujar){
        var x, y;

        if(evento.type === 'mousemove') {
            x = evento.pageX - pantalla.offsetLeft,
            y = evento.pageY - pantalla.offsetTop;
        } else if(evento.type === 'touchmove'){
            x = evento.touches[0].clientX - pantalla.offsetLeft;
            y = evento.touches[0].clientY - pantalla.offsetTop;
        }

        if (y > tamahoCuadrado + 10) {
            pincel.fillStyle = colores[j];
            pincel.beginPath();
            pincel.arc(x, y, 5, 0, 2*Math.PI);
            pincel.fill();
        }
    }
}

pantalla.addEventListener('mousemove', dibujarCirculo);
pantalla.addEventListener('touchmove', dibujarCirculo);

function habilitarDibujar() {
    puedoDibujar = true;
}

function deshabilitarDibujar() {
    puedoDibujar = false;
}

pantalla.addEventListener('mousedown', habilitarDibujar);
pantalla.addEventListener('touchstart', habilitarDibujar);

pantalla.addEventListener('mouseup', deshabilitarDibujar);
pantalla.addEventListener('touchend', deshabilitarDibujar);

pantalla.onclick = seleccionarColor;


/*
// Selecciona los elementos de la animación
const circle = document.querySelector('.circle');
const triangle = document.querySelector('.triangle');
const square = document.querySelector('.square');

// Crea un temporizador para animar las formas
setTimeout(() => {
  // Añade una clase a la forma del círculo para iniciar la animación de rotación
  circle.classList.add('animate');

  // Añade una clase a la forma del triángulo para iniciar la animación de desvanecimiento y movimiento hacia la derecha
  triangle.classList.add('animate');

  // Añade una clase a la forma del cuadrado para iniciar la animación de movimiento hacia la izquierda
  square.classList.add('animate');
}, 500);
*/


// Constantes
const SHAPES_AMOUNT = 36;
const SHAPE_SIZE = 20;

// Seleccionar el contenedor y calcular su tamaño
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// Función para crear formas
function createShape(type) {
  // Crear la forma
  const shape = document.createElement("div");
  shape.classList.add("shape", type);

  // Posicionar aleatoriamente la forma en la pantalla
  const x = Math.random() * (containerWidth - SHAPE_SIZE -5);
  const y = Math.random() * (containerHeight - SHAPE_SIZE);
  shape.style.top = `${y}px`;
  shape.style.left = `${x}px`;

  // Añadir la forma al contenedor
  container.appendChild(shape);
}

// Crear las formas
for (let i = 0; i < SHAPES_AMOUNT; i++) {
  createShape("circle");
  createShape("square");
  createShape("triangle");
}

/*
// crear formas
function createShapes() {
  for (var i = 0; i < 65; i++) {
    var shape = document.createElement("div");
    shape.classList.add("shape");
    var type = Math.floor(Math.random() * 3);
    if (type === 0) {
      shape.classList.add("circle");
    } else if (type === 1) {
      shape.classList.add("square");
    } else {
      shape.classList.add("triangle");
    }
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    shape.style.top = y + "px";
    shape.style.left = x + "px";
    document.body.appendChild(shape);
  }
}

createShapes();
*/