# Obelisca | Joyería contemporánea

Es un simulador de compra online de Obelisca, una marca ficticia de joyería contemporánea porteña que creé para el trabajo final de la Diplomatura en Diseño UX/UI de Coderhouse.

El proyecto es realizado en el marco de aprendizaje de la materia **JavaScript**, dentro de la Diplomatura de "Full Stack Development" de Coderhouse. Lo voy construyendo entrega a entrega, con la idea de que termine siendo el e-commerce de la marca.

## Sitio publicado

[agostinatolotti.github.io/proyecto-js-agostinatolotti](https://agostinatolotti.github.io/proyecto-js-agostinatolotti/)

Está publicado en GitHub Pages. También se puede abrir el archivo "index.html" directamente en el navegador.

## Cómo funciona

1. El usuario elige piezas de la Colección Permanente escribiendo su número en el menú y apretando "Aceptar". Puede agregar la misma pieza varias veces.
2. Escribe "continuar" para terminar la compra.
3. Ve el resumen con la cantidad de piezas, el envío y el total. Superando $1.000.000 el envío es gratis.

## Decisiones de la Pre-entrega 3

- Separé la lógica en tres funciones, siguiendo el esquema entrada, proceso y salida: "pedirSeleccion" muestra el menú y devuelve la respuesta en minúsculas, `calcularEnvio` (función flecha) devuelve el costo del envío, y `mostrarResumen` muestra el total final.
- Guardé el texto del menú en la constante `textoMenu` y se lo paso a `pedirSeleccion` como parámetro.
- Sumé `break` para salir del bucle al escribir "continuar", y `continue` para volver al menú sin sumar nada cuando la opción no existe, como me sugirió el profe en la devolución anterior.
- Si el usuario aprieta "Cancelar" con piezas en el carrito, le pregunto con un `confirm` si está seguro. Si confirma, se vacía el carrito; si no, vuelve al menú con lo que tenía.

## Tecnologías

- HTML5
- JavaScript

## Cronología

Creación de la marca Obelisca: 15/05/2026.

Creación del repositorio: 29/10/2026.

| Entrega       | Tema                                                                       | Fecha      |
| ------------- | -------------------------------------------------------------------------- | ---------- |
| Pre-entrega 1 | Primeros pasos con JavaScript: calculadora de IMC                          | 29/10/2026 |
| Pre-entrega 2 | Lógica de programación y control de flujo: simulador de compra de Obelisca | 16/11/2026 |
| Pre-entrega 3 | Funciones e integración de lógica: simulador organizado en funciones       | 16/11/2026 |

Autora: Agostina Tolotti.
