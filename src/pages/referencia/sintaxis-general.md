---
layout: ../../layouts/Reference.astro
title: Sintaxis General
index: 2
---

## Sintaxis general y tipos de datos

### Estructura de un algoritmo

He aquí un programa básico en Gabocode:

```gabo
Algoritmo HolaMundo
Inicio
  Mostrar << "Hola, mundo";
Fin
```

Un algoritmo siempre tendrá estas dos partes: **un nombre**, al que le precede la palabra reservada `Algoritmo`, y **un cuerpo**. El cuerpo se debe encerrar entre las palabras reservadas `Inicio` y `Fin`, y es donde escribiremos las instrucciones de nuestro algoritmo.

También vemos un comando `Mostrar`. Si has programado antes, sabes que todos los lenguajes tienen un método para mandar texto a la terminal o consola en la que se ejecutan. En el caso del Gabocode esta es una instrucción más, la cual siempre debe ir acompañada del operador `<<`.

Este operador es heredado del de C++ (fuente de inspiración según lo dicho por el profesor). En ese lenguaje está asociado al objeto `cout` y permite, precisamente, mandar texto a la consola.

### Variables y tipos de datos

En programación, una variable es un espacio en memoria reservado para guardar un dato. Sucede de manera similar, en el pseudo código. Recordar que en la [sección anterior](/gabocode/referencia/introduccion) se hablaba de solicitar datos y transformarlos para obtener un resultado. Si no guardamos esos datos en alguna parte ninguna de estas transformaciones sería posible. He ahí la importancia de las variables.

Para declarar una variable, usamos la palabra reservada `var` seguida del nombre de la variable y finalmente su tipo de dato. Esto debe ir en la parte de arriba del cuerpo. Por ejemplo:

```gabo
Algoritmo Saludo
Inicio
  // Aquí van todas las variables
  var nombre: Cadena;

  // ...
Fin
```

Dentro de la sintaxis del profesor tenemos cinco tipos de datos: `Caracter`, `Cadena`, `Entero`, `Real`, `Booleano`.

- `Caracter`: representa cualquier símbolo escrito. Letras, números, signos de puntuación, símbolos matemáticos... cualquiera que puedas escribir con el teclado, siempre que sea un único caracter.
- `Cadena`: este, en cambio, representa varios caracteres unidos (o una "cadena" de ellos), por lo que es el tipo de dato que necesitarías para guardar nombres, correos, textos, etc. Es decir, todo lo que tenga dos o más caractateres.
- `Entero`: este representa números del conjunto de enteros, los cuales se caracterizan por no tener una parte decimal. Sí, incluye a los números negativos también.
- `Real`: este representa el conjunto de los números reales, que básicamente es el conjunto de números enteros más el conjunto de números que sí tienen parte decimal. También hay reales negativos.
- `Booleano`: este es un tipo de dato que solo toma uno de dos valores, ya sea 1 o 0 (equivalente a verdadero o falso). Es especialmente útil en casos en los que se tenga que evaluar una decisión.

Dentro del Gabocode puedes declarar tantas variables como necesites, del tipo de dato que requiera el problema:

```gabo
Algoritmo obtener_calificacion
Inicio
  var nombre: Cadena;
  var edad: Entero;
  var promedio: Real;
  var literal: Caracter; // nota literal del alumno. A, B, C, D o E
  var esta_aprobado: Booleano;

  // ...
Fin
```

> Si eres atento viste que he dejado un par de comentarios. Usa `//` seguido de lo que quieras escribir cuando necesites dejar un mensaje para ti o para otra persona que lea el código. En un lenguaje esto sería ignorado por el intérprete

Y puedes declarar más de una variable en la misma línea, ya sean o no del mismo tipo, si separamos los nombres por comas:

```gabo
Algoritmo control_de_granja
Inicio
  var contador_a, contador_b: Entero;
  var impuesto: Real, propietario: Cadena, tiene_deuda: Booleano;

  // ...
Fin
```

Aunque personalmente prefiero no mezclar los tipos de datos en una misma línea. Es cuestión de gustos.
### Asignando valores

### Leyendo input del usuario

