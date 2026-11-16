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

## Decisiones de la Pre-entrega 4

- Pasé las piezas a dos arrays, `nombresPiezas` y `preciosPiezas`, donde la misma posición corresponde a la misma pieza. Sumé un dije para llegar a 5 piezas.
- El menú se arma solo con la función `armarMenu`, que recorre el catálogo con `for...of`. Si agrego una pieza a los arrays, aparece en el menú sin tocar nada más.
- El `switch` se reemplazó por la posición en el array: si el usuario escribe "3", busco la posición 2.
- El carrito pasó a ser un array: `push` agrega piezas, `pop` saca la última con la nueva opción "deshacer", `indexOf` encuentra su precio para restarlo, e `includes` avisa si ya había una igual.
- El resumen final lista las piezas del carrito con `for...of`.

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
| Pre-entrega 4 | Uso e interacción con Arrays: catálogo y carrito como arrays               | 17/11/2026 |

Autora: Agostina Tolotti.
