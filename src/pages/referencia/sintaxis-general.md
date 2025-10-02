---
layout: ../../layouts/Reference.astro
title: Sintaxis General
index: 2
---

## Sintaxis general y tipos de datos

### Estructura de un algoritmo

Veamos este programa básico en Gabocode:

```gabo
Algoritmo hola_mundo
Inicio
  Mostrar << "Hola, mundo";
Fin
```

Un algoritmo siempre debe tener estas dos partes: **un nombre**, al que le precede la palabra reservada `Algoritmo`, y **un cuerpo**. El cuerpo se debe encerrar entre las palabras reservadas `Inicio` y `Fin`, y es donde escribiremos las instrucciones de nuestro algoritmo.

También vemos un comando `Mostrar`. Si has programado antes, sabes que todo lenguaje tiene un método para mandar texto a la terminal o consola en la que se ejecuta. En el caso del Gabocode esta es una instrucción más, la cual siempre debe ir acompañada del operador `<<` seguido de lo que queremos mostrar. En este caso, un mensaje en forma de cadena de texto, las cuales se envuelven con comillas dobles (`"`).

> El operador `<<` es heredado del de C++ (fuente de inspiración para el profesor). En ese lenguaje está asociado al objeto `cout` y permite, precisamente, mandar texto a la consola. Pronto veremos otro operador tomado de este mismo lenguaje.

### Variables y tipos de datos

En programación una variable es un espacio en memoria reservado para guardar un dato. Sucede de manera similar en el pseudo código. Recordar que en la [sección anterior](/gabocode/referencia/introduccion) se hablaba de solicitar datos y transformarlos para obtener un resultado. Si no guardamos esos datos en alguna parte ninguna de estas transformaciones sería posible. He ahí la importancia de las variables.

Para declarar una variable, usamos la palabra reservada `var` seguida del nombre de la variable y finalmente su tipo de dato precedido por dos puntos (`:`). Se reserva la parte superior del cuerpo para declarar todas las variables.

Por ejemplo:

```gabo
Algoritmo Saludo
Inicio
  // Aquí van todas las variables
  var nombre: Cadena;

  // ...
Fin
```

Dentro de la sintaxis del profesor tenemos **cinco tipos de datos**: `Caracter`, `Cadena`, `Entero`, `Real`, `Booleano`. Explicaré brevemente cada uno:

- `Caracter`: representa cualquier símbolo escrito. Letras, números, signos de puntuación, símbolos matemáticos... cualquiera que puedas escribir con el teclado, siempre que sea un único caracter.
- `Cadena`: este, en cambio, representa varios caracteres unidos (mejor dicho, una "cadena" de ellos), por lo que es el tipo de dato que necesitarías para guardar nombres, correos, textos... Es decir, todo lo que tenga dos o más caractateres.
- `Entero`: este representa números del conjunto de enteros, los cuales se caracterizan por no tener una parte decimal. Sí, incluye al cero y a los números negativos.
- `Real`: este representa el conjunto de los números reales, que básicamente es el conjunto de números enteros más el conjunto de números que sí tienen parte decimal. También hay reales negativos.
- `Booleano`: este es un tipo de dato que solo toma uno de dos valores, ya sea 1 o 0 (equivalente a verdadero o falso). Es especialmente útil en casos en los que se tenga que evaluar una decisión o alternativa.

Puedes declarar tantas variables como necesites, pero recuerda usar el tipo de dato correcto. Un buen **truco para identificar** cuál tipo es el ideal es preguntarse **qué es lo que estás guardando** en esa variable.

De esta manera, sin conocer el resto del código, es posible hacernos una idea de para qué son las variables en este ejemplo:

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

Bueno, y los nombres de las variables también ayudan 😅.

> Si eres atento habrás visto que he dejado comentarios dentro del código con un `//`. En cualquier lenguaje el intérprete o compilador ignora los comentarios. Con ellos puedes agregar información, documentar o descargar tus frustaciones mientras desarrollas.

En Gabocode puedes declarar más de una variable en la misma línea, ya sean o no del mismo tipo, si separas los nombres por comas. Ojo, igualmente debes especificar el tipo de dato.

```gabo
Algoritmo control_de_granja
Inicio
  var contador_a, contador_b: Entero;
  var impuesto: Real, propietario: Cadena, tiene_deuda: Booleano;

  // ...
Fin
```

Personalmente prefiero no mezclar los tipos de datos en una misma línea. Eso ya es cuestión de gustos y de qué consideras más legible.

```gabo
Algoritmo control_de_granja
Inicio
  var impuesto: Real;
  var propietario: Cadena;
  var tiene_deuda: Booleano;
  var contador_a, contador_b: Entero;

  // ...
Fin
```

### Asignando valores

Bien, ya tenemos variables. Es hora de asignarles valores.

Esto se puede hacer de dos maneras. La primera es utilizando el operador de asignación, es decir, el signo igual (`=`). Tal como en las matemáticas, asignarle un valor a una variable hará que esta se comporte como ese valor.

Por ejemplo:

```gabo
Algoritmo spoiler_de_las_matematicas
Inicio
  var a, b, c: Entero;

  a = 12;
  b = 3;
  c = a * b;

  Mostrar << c; // 36
Fin
```

Luego entraremos en detalle con las operaciones matemáticas. Por ahora vamos a centrarnos en que `a` y `b` se comportan como el 12 y el 3, respectivamente. Al multiplicarlas obtenemos el mismo resultado que si hubiéramos multiplicado directamente los números. Igualmente, ese resultado es posible almacenarlo en una variable para luego mostrarlo por pantalla.

Gabocode permite hacer lo mismo de esta otra forma:

```gabo
Algoritmo spoiler_de_las_matematicas
Inicio
  var a = 12, b = 3, c: Entero;

  c = a * b;

  Mostrar << c; // 36
Fin
```

> Dentro de la programación, asignarle un valor inicial a una variable se conoce como inicialización. En la sección de contadores y acumuladores veremos muchos ejemplos de esto.

### Leyendo input del usuario

La segunda forma de asignarle un valor a una variable es obteniéndolo del usuario. En el pseudo código, esto se logra gracias al comando `Leer`, el cual va acompañado del operador `>>`, seguido de la variable en la que guardaremos la entrada del usuario.

De esta manera podemos mejorar nuestro algoritmo `Saludo`

```gabo
Algoritmo Saludo
Inicio
  var nombre: Cadena;

  Mostrar << "Ingrese su nombre: ";
  Leer >> nombre; // El nombre ingresado queda guardado en la variable

  // Luego podemos mostrar un saludo con ese nombre
  Mostrar << "Bienvenido seas, ", nombre, ". Has llegado al paraíso.";
Fin
```

Podemos hacer esto con todos los tipos de datos. Sin embargo hay que considerar cómo se comportan estos con la entrada del usuario.

- El tipo `Caracter` tomará un único caracter. Así se introduzcan varios, solo almacenará el primer caracter de la cadena.
- El tipo `Entero` solo tomará la parte entera de un número, aún cuando el usuario introduzca un número decimal. Simplemente ignorará lo que haya después del punto.
- El tipo `Booleano` no tomará ningún valor que no sea 1 o 0. Según lo explicado en clase, al asignarle un valor a una variable booleana, se ignorará cualquier entrada que no sea ninguno de estos dos valores.
