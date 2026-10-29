// alert("prueba de enrutado");

// 01. Calculadora de índice de masa corporal
const nombre = prompt("Ingrese su nombre");
alert(
  "bienvenid@ al sistema " +
    nombre +
    "." +
    " Vamos a calcular tu índice de masa corporal.",
);

const altura = parseFloat(prompt("Ingrese su altura en metros (con punto)"));
// parseFloat porque convierte el string del prompt, que siempre devuelve texto en formato string, en números.
const peso = parseFloat(prompt("Ingrese su peso en kg"));
const resultado = peso / altura ** 2;
const salida = "Tu IMC es " + resultado.toFixed(1);

// Ningún valor se reasigna, por eso usé const, como pide la consigna. Aproveché el ejercicio que hicimos en clases.

console.log(
  "Datos de " + nombre + ": " + altura + " m, " + peso + " kg. " + salida,
);

// Yo le agregue esto de la clase de condicionales;
if (resultado < 18.5) {
  alert(salida + " " + "y estás por debajo de un peso normal");
} else if (resultado < 25) {
  alert(salida + " " + "y estás en un peso normal");
} else if (resultado < 30) {
  alert(salida + " " + "y estás por arriba de un peso normal");
} else {
  alert(
    salida +
      " y estás en rango de obesidad (el IMC no distingue entre músculo y grasa)",
  );
}
