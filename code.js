//Funcion para tomar el valor de cada boton(numero o operacion) y mostrarlo en pantalla
function tomarValor(x) {
     console.log("valor precionado")
    console.log(x) 
    document.querySelector('#Result').innerHTML += x;
}

//Funcion para calcular resultado de cada operación (se ejecuta cada que dan click en igual(=))
function calcularResultado() {
    let result = eval(document.getElementById('Result').innerHTML);
    document.querySelector('#Result').innerHTML = result;
}

//Funcion para limpiar la calculadora (se ejecuta cada que se le da click en 'C')
function reset() {
    document.querySelector('#Result').innerHTML = "";
}

//Declaracion de *Varialbles* y  seleccionando cada boton por su ID
let cero = document.querySelector('#cero');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let equal = document.querySelector('#equal');
let deleteN = document.querySelector('#Delete');
let coma = document.querySelector('#coma');



//Agregar el evento del click y llamar la respectiva funcion a ejecutar. 

coma.addEventListener("click", function () {
    tomarValor(',');
})
cero.addEventListener("click", function () {
    tomarValor(0);
})
one.addEventListener("click", function () {
    tomarValor(1);
})
two.addEventListener("click", function () {
    tomarValor(2);
})
three.addEventListener("click", function () {
    tomarValor(3);
})
four.addEventListener("click", function () {
    tomarValor(4);
})
five.addEventListener("click", function () {
    tomarValor(5);
})
six.addEventListener("click", function () {
    tomarValor(6);
})
seven.addEventListener("click", function () {
    tomarValor(7);
})
eight.addEventListener("click", function () {
    tomarValor(8);
})
nine.addEventListener("click", function () {
    tomarValor(9);
})
plus.addEventListener("click", function () {
    tomarValor("+");
})
minus.addEventListener("click", function () {
    tomarValor("-");
})
multiply.addEventListener("click", function () {
    tomarValor("*");
})
divide.addEventListener("click", function () {
    tomarValor("/");
})

equal.addEventListener("click", function () {
    calcularResultado();
})

deleteN.addEventListener("click", function () {
    reset()
})