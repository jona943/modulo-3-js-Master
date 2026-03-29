## Proyecto del Recursion y backtracking
La recursión y el backtracking son herramientas poderosas para resolver problemas dividiendo tareas complejas en partes más pequeñas. Mientras que la recursión se centra en resolver problemas de manera repetitiva, el backtracking agrega una capa de toma de decisiones, probando y retrocediendo cuando es necesario.

# Objetivo
El objetivo es que se practique cómo usar recursión para buscar un objeto específico en un arreglo. Practicará cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base.

# Problema: Buscar un objeto en una lista de regalos
Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple.

# Instrucciones para resolver el problema:
- Escribe una función recursiva que busque un regalo específico en un arreglo.
- Si el regalo se encuentra, devuelve un mensaje indicando su posición.
- Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
- Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/07642b0746bb8101258995f539ab372e

# Pistas:
1. Usa un índice inicial (index = 0) para rastrear la posición en el arreglo.

2. Implementa los casos base sugeridos:

- Si index === gifts.length, el regalo no está en la lista.

- Si gifts[index] === giftName, el regalo está en esa posición.

- Realiza una llamada recursiva aumentando el índice (index + 1).