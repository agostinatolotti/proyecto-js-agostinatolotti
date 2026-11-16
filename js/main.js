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

// Variables
let cantidad = 0;
let total = 0;
let seleccion = "";

// Bucle de selección

do {
  seleccion = prompt(
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
      "Cuando hayas agregado los productos escribí 'continuar'",
  );

  // Si el cliente apretaba cancelar en el prompt se devolvía un null, así que lo convertí en un "continuar" con este condicional con un operador de igualdad estricta. También convertí el prompt en minúsculas.

  if (seleccion === null) {
    seleccion = "continuar";
  }

  seleccion = seleccion.toLowerCase();

  switch (seleccion) {
    case "1":
      total = total + precioPulsera1;
      cantidad = cantidad + 1;
      alert("Agregaste: " + nombrePulsera1);
      break;

    case "2":
      total = total + precioAnillo1;
      cantidad = cantidad + 1;
      alert("Agregaste: " + nombreAnillo1);
      break;

    case "3":
      total = total + precioCollar1;
      cantidad = cantidad + 1;
      alert("Agregaste: " + nombreCollar1);
      break;

    case "4":
      total = total + precioAros1;
      cantidad = cantidad + 1;
      alert("Agregaste: " + nombreAros1);
      break;

    case "continuar":
      break;

    default:
      alert('Opción inválida. Escribí un número del 1 al 4 o "continuar".');
  }
} while (seleccion !== "continuar");

// Condicionales

if (cantidad === 0) {
  alert("Tu carrito está vacío. ¡Te esperamos pronto!");
} else if (total >= montoMinimoEnvioGratis) {
  alert(
    "Llevás " +
      cantidad +
      " piezas.\n" +
      "Envío: gratis\n" +
      "Total a pagar: $" +
      total,
  );
} else {
  alert(
    "Llevás " +
      cantidad +
      " piezas.\n" +
      "Envío: $" +
      costoEnvio +
      "\n" +
      "Total a pagar: $" +
      (total + costoEnvio),
  );
}

// Cierre

console.log(
  "Compra finalizada. Piezas: " + cantidad + " | Subtotal: $" + total,
);
