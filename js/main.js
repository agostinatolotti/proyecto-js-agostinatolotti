// Constantes

const nombrePulsera1 = "Pulsera N°1 - Colección Permanente";
const precioPulsera1 = 200000;
const nombreAnillo1 = "Anillo N°1 - Colección Permanente";
const precioAnillo1 = 150000;
const nombreCollar1 = "Collar N°1 - Colección Permanente";
const precioCollar1 = 300000;
const nombreAros1 = "Aros N°1 - Colección Permanente";
const precioAros1 = 100000;

const montoMinimoEnvioGratis = 1000000;

const costoEnvio = 9999;

const textoMenu =
  "Escribí el número de la pieza que querés agregar a tu compra y clickeá en aceptar. Podés agregarlas múltiples veces.\n" +
  "1. " +
  nombrePulsera1 +
  " - $" +
  precioPulsera1 +
  "\n" +
  "2. " +
  nombreAnillo1 +
  " - $" +
  precioAnillo1 +
  "\n" +
  "3. " +
  nombreCollar1 +
  " - $" +
  precioCollar1 +
  "\n" +
  "4. " +
  nombreAros1 +
  " - $" +
  precioAros1 +
  "\n" +
  "Cuando hayas agregado los productos escribí 'continuar'";

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

// 3. Resumen de la compra

function mostrarResumen(cantidad, total, envio) {
  // Variable local, solo dentro de esta función.
  let textoEnvio = "gratis";

  if (envio > 0) {
    textoEnvio = "$" + envio;
  }

  alert(
    "Llevás " +
      cantidad +
      " piezas.\n" +
      "Envío: " +
      textoEnvio +
      "\n" +
      "Total a pagar: $" +
      (total + envio),
  );
}

// Variables

let cantidad = 0;
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
    if (cantidad === 0) {
      break;
    }

    const confirmaCancelacion = confirm(
      "Tenés " +
        cantidad +
        " piezas en tu carrito. ¿Seguro que querés cancelar tu compra?",
    );

    if (confirmaCancelacion) {
      compraCancelada = true;
      cantidad = 0;
      total = 0;
      break;
    }

    continue;
  }

  let nombreElegido = "";
  let precioElegido = 0;

  switch (seleccion) {
    case "1":
      nombreElegido = nombrePulsera1;
      precioElegido = precioPulsera1;
      break;
    case "2":
      nombreElegido = nombreAnillo1;
      precioElegido = precioAnillo1;
      break;
    case "3":
      nombreElegido = nombreCollar1;
      precioElegido = precioCollar1;
      break;
    case "4":
      nombreElegido = nombreAros1;
      precioElegido = precioAros1;
      break;
  }

  if (precioElegido === 0) {
    alert('Opción inválida. Escribí un número del 1 al 4 o "continuar".');
    continue;
  }

  total = total + precioElegido;
  cantidad = cantidad + 1;
  alert("Agregaste: " + nombreElegido);
} while (seleccion !== "continuar");

// Cierre del simulador

if (compraCancelada) {
  alert("Cancelaste tu compra. ¡Te esperamos pronto!");
} else if (cantidad === 0) {
  alert("Tu carrito está vacío. ¡Te esperamos pronto!");
} else {
  const envio = calcularEnvio(total);
  mostrarResumen(cantidad, total, envio);

  // Registro interno
  console.log(
    "Compra finalizada. Piezas: " +
      cantidad +
      " | Subtotal: $" +
      total +
      " | Envío: $" +
      envio,
  );
}
