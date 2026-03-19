## Proyecto Algoritmo de Los 2 Punteros
El algoritmo de los dos punteros es un concepto fundamental en algoritmos y estructuras de datos que se utiliza comúnmente en problemas que requieren recorrer un arreglo de manera eficiente. Este algoritmo se utiliza en diversas situaciones, como en la búsqueda de pares de números que cumplan ciertas condiciones, en la fusión de listas ordenadas, o para resolver problemas relacionados con secuencias y cadenas.

# Objetivo
Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de invitados cuyos nombres comienzan con la misma letra.

# Problema: Encuentra los Invitados que Pueden Sentarse Juntos
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

# Instrucciones para resolver el problema:
1. Usa un puntero al inicio del arreglo y otro al siguiente elemento.
2. Compara las iniciales de los nombres en las posiciones de ambos punteros.
3. Si coinciden, detén la búsqueda y devuelve los nombres.
4. Si no coinciden, avanza ambos punteros y repite.
5. Detén la búsqueda si recorres toda la lista sin encontrar un par.
6. Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url:     https://gist.github.com/heladio-devf-mx/e091e8dba47d51693cec1154f1cd2ed6
