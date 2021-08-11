//Funcion para tomar el valor de cada boton(numero o operacion) y mostrarlo en pantalla
function tomarValor(x) {
    console.log("valor presionado")
    console.log(x) 
    document.querySelector('#Result').innerHTML += x;
}

//Funcion para calcular resultado de cada operación (se ejecuta cada que dan click en igual(=))
function calcularResultado() {
    var result = eval(document.querySelector('#Result').innerHTML);
    document.querySelector('#Result').innerHTML = result;
}

//Funcion para calcular la raiz cuadrada
function cal() {
    var x=Math.sqrt(document.querySelector('#Result').innerHTML) //resolver raíz cuadrada.
    document.querySelector('#Result').innerHTML = x; //mostrar en pantalla resultado
}

// Funcion para calcular el porcentaje
var x;
function porcent() {
    x = parseInt(document.querySelector('#Result').innerHTML)/100
    console.log(x)
    document.querySelector('#Result').innerHTML = x;
}

//Ejecutar la funcion final del porcentaje
function final(){
    var f= parseInt(document.querySelector('#Result').innerHTML) * x
    console.log(f)
    document.querySelector('#Result').innerHTML = f
}

//Funcion para calcular la potencia
function potencia(){
    var x=parseInt(document.querySelector('#Result').innerHTML) * parseInt(document.querySelector('#Result').innerHTML)
    document.querySelector('#Result').innerHTML= x
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
let punto = document.querySelector('#punto');



//Agregar el evento del click y llamar la respectiva funcion a ejecutar. 

punto.addEventListener("click", function () {
    tomarValor('.');
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
    teclado(8)
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


//Funcion para el uso del teclado

function teclado (elEvento) { 
    evento = elEvento || window.event;
    k=evento.keyCode; //número de código de la tecla.
    //teclas númericas del teclado alfamunérico
    if (k>47 && k<58) { 
       p=k-48; //buscar número a mostrar.
       p=String(p) //convertir a cadena para poder añádir en pantalla.
       tomarValor(p); //enviar para mostrar en pantalla
       }	
    //Teclas del teclado númerico. Seguimos el mismo procedimiento que en el anterior.
    if (k>95 && k<106) {
       p=k-96;
       p=String(p);
       tomarValor(p);
       }
    if (k==110 || k==190) {tomarValor(".")} //teclas de coma decimal
    if (k==106) {tomarValor('*')} //tecla multiplicación
    if (k==107) {tomarValor('+')} //tecla suma
    if (k==109) {tomarValor('-')} //tecla resta
    if (k==111) {tomarValor('/')} //tecla división
    if (k==32 || k==13) {calcularResultado()} //Tecla igual: intro o barra espaciadora
    if (k==8) {reset()} //Retroceso en escritura : tecla retroceso.
    }
    window.onload = function(){ //Acciones tras cargar la página
        result=document.getElementById("textoPantalla");  //elemento pantalla de salida
        document.onkeydown = teclado;  //función teclado disponible
        }
        