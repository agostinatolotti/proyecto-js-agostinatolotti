# Obelisca | Joyería contemporánea

Es un simulador de compra online de Obelisca, una marca ficticia de joyería contemporánea porteña que creé para el trabajo final de la Diplomatura en Diseño UX/UI de Coderhouse.

El proyecto es realizado en el marco de aprendizaje de la materia **JavaScript**, dentro de la Diplomatura de "Full Stack Development" de Coderhouse. Lo voy construyendo entrega a entrega, con la idea de que termine siendo el e-commerce de la marca.

## Sitio publicado

[agostinatolotti.github.io/proyecto-js-agostinatolotti](https://agostinatolotti.github.io/proyecto-js-agostinatolotti/)

Está publicado en GitHub Pages. También se puede abrir el archivo "index.html" directamente en el navegador.

## Cómo funciona

1. La clienta elige piezas de la Colección Permanente escribiendo su número en el menú y apretando "Aceptar". Puede agregar la misma pieza varias veces.
2. Escribe "continuar" para terminar la compra.
3. Ve el resumen con la cantidad de piezas, el envío y el total. Superando $1.000.000 el envío es gratis.

## Decisiones de la Pre-entrega 2

- A partir de esta entrega el proyecto pasa a ser del simulador de Obelisca.
- Usé `do...while` porque el menú tiene que aparecer al menos una vez antes de saber si la clienta quiere terminar.
- El menú se resuelve con un `switch`, y el envío con `if`, `else if` y `else`, que también tiene en cuenta la opción del carrito vacío.
- Si el usuario aprieta "Cancelar", el prompt devuelve `null`. Lo tomo como que terminó su compra, para que el programa no se rompa al pasar la respuesta a minúsculas.
- Por ahora cada pieza es una constante. En las próximas entregas evolucionará por supuesto.

## Tecnologías

- HTML5
- JavaScript

## Cronología

Creación del repositorio: 29/10/2026.

| Entrega | Tema | Fecha |
|---|---|---|
| Pre-entrega 1 | Primeros pasos con JavaScript: calculadora de IMC | 29/10/2026 |
| Pre-entrega 2 | Lógica de programación y control de flujo: simulador de compra de Obelisca | 16/11/2026 |

Autora: Agostina Tolotti.
