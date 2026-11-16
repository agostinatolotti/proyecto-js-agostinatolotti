// Constantes

const nombresPiezas = [
  "Pulsera N°1 - Colección Permanente",
  "Anillo N°1 - Colección Permanente",
  "Collar N°1 - Colección Permanente",
  "Aros N°1 - Colección Permanente",
  "Dije N°1 - Colección Permanente",
];

const preciosPiezas = [200000, 150000, 300000, 100000, 80000];

const montoMinimoEnvioGratis = 1000000;

const costoEnvio = 9999;

// Funciones

// 1. Principio. Muestra el menú y registra la respuesta del usuario, ya adaptada en minúsculas.

function pedirSeleccion(menu) {
  let respuesta = prompt(menu);

  if (respuesta === null) {
    respuesta = "cancelar";
  }

  respuesta = respuesta.toLowerCase();

  return respuesta;
}

// 2. Cálculo de envío

const calcularEnvio = (total) => {
  if (total >= montoMinimoEnvioGratis) {
    return 0;
  } else {
    return costoEnvio;
  }
};

// 3. Total a pagar. Función flecha con retorno implícito: sin llaves ni return, devuelve directamente la suma.

const calcularTotalFinal = (subtotal, envio) => subtotal + envio;

// 4. Resumen de la compra

function mostrarResumen(carrito, total, envio) {
  // Variable local, solo dentro de esta función.
  let textoEnvio = "gratis";

  if (envio > 0) {
    textoEnvio = "$" + envio;
  }

  let listaPiezas = "";

  for (const pieza of carrito) {
    listaPiezas = listaPiezas + "- " + pieza + "\n";
  }

  alert(
    "Tu compra:\n" +
      listaPiezas +
      "\n" +
      "Llevás " +
      carrito.length +
      " piezas.\n" +
      "Envío: " +
      textoEnvio +
      "\n" +
      "Total a pagar: $" +
      calcularTotalFinal(total, envio),
  );
}

// 5. Menú

function armarMenu(nombres, precios) {
  let menu =
    "Escribí el número de la pieza que querés agregar a tu compra y clickeá en aceptar. Podés agregarlas múltiples veces.\n";
  let numero = 1;

  for (const nombre of nombres) {
    menu = menu + numero + ". " + nombre + " - $" + precios[numero - 1] + "\n";
    numero = numero + 1;
  }

  menu =
    menu + "Escribí 'deshacer' para sacar la última pieza que agregaste.\n";
  menu = menu + "Cuando hayas terminado, escribí 'continuar'.";

  return menu;
}

const textoMenu = armarMenu(nombresPiezas, preciosPiezas);

// Variables

let carrito = [];
let total = 0;
let seleccion = "";
let compraCancelada = false;

// Bucles

// 1. Selección. Se repite el menú hasta que el usuario termine. Se registran las posibilidades.

do {
  seleccion = pedirSeleccion(textoMenu);

  if (seleccion === "continuar") {
    break;
  }

  if (seleccion === "cancelar") {
    if (carrito.length === 0) {
      break;
    }

    const confirmaCancelacion = confirm(
      "Tenés " +
        carrito.length +
        " piezas en tu carrito. ¿Seguro que querés cancelar tu compra?",
    );

    if (confirmaCancelacion) {
      compraCancelada = true;
      // Acá directamente vacío el carrito
      carrito = [];
      total = 0;
      break;
    }

    continue;
  }

  if (seleccion === "deshacer") {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío, no hay nada para deshacer.");
      continue;
    }

    // Acá el pop saca la última pieza del carrito y la guarda en piezaEliminada.
    const piezaEliminada = carrito.pop();
    // Acá indexOf busca en qué posición del catálogo está esa pieza, para saber cuánto restar.
    const posicionEliminada = nombresPiezas.indexOf(piezaEliminada);
    total = total - preciosPiezas[posicionEliminada];

    alert("Se ha eliminado: " + piezaEliminada);
    continue;
  }

  // El -1 es para corregir la posición del array y que coincida con el índice.
  const posicion = parseInt(seleccion) - 1;

  // Acá puse que si la posición no existe en el catálogo (es negativa, se pasa del total de piezas o no es un número), la opción es inválida.
  if (!(posicion >= 0 && posicion < nombresPiezas.length)) {
    alert(
      "Opción inválida. Escribí un número del 1 al " +
        nombresPiezas.length +
        ', "deshacer" o "continuar".',
    );
    continue;
  }

  const nombreElegido = nombresPiezas[posicion];

  // Acá includes revisa si la pieza ya estaba en el carrito para cambiar el mensaje.
  if (carrito.includes(nombreElegido)) {
    alert("Agregaste otra unidad de: " + nombreElegido);
  } else {
    alert("Agregaste: " + nombreElegido);
  }

  // Acá push agrega esa pieza al final del array del carrito.
  carrito.push(nombreElegido);
  total = total + preciosPiezas[posicion];
} while (seleccion !== "continuar");

// Cierre del simulador

if (compraCancelada) {
  alert("Cancelaste tu compra. ¡Te esperamos pronto!");
} else if (carrito.length === 0) {
  alert("Tu carrito está vacío. ¡Te esperamos pronto!");
} else {
  const envio = calcularEnvio(total);
  mostrarResumen(carrito, total, envio);

  // Registro interno
  console.log(
    "Compra finalizada. Piezas: " +
      carrito.length +
      " | Subtotal: $" +
      total +
      " | Envío: $" +
      envio,
  );
}
