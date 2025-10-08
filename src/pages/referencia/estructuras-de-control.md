---
layout: ../../layouts/Reference.astro
title: Control del flujo
index: 4
---

## Control del flujo del programa

### Estructuras de control

Una estructura de control es aquella que nos permite controlar el flujo de la ejecución, basándonos en condiciones. Esto permite que nuestro programa pueda "decidir" qué hacer según los escenarios que programemos.

### Estructura condicional `Si-Entonces`

Esta es la estructura de control por excelencia. Evalúa condiciones y actúa en consecuencia de ellas.

Existe tres maneras de usar esta estructura, las cuales dependen de la cantidad de escenarios que estamos evaluando.

**Simple:** Un único escenario. Evaluamos que la condición se cumpla.

```gabo
Si (<condicion>) Entonces;
  // Esto se ejecuta si la condicion es cierta
  // De lo contrario se ignora

  // ...
Fin_Si
```

**Doble:** Dos escenarios posibles. Hay una acción para cuando la condición es verdadera y una para cuando es falsa.

```gabo
Si (<condicion>) Entonces;
  // Esto se ejecuta si la condicion es cierta

  Sino
    // Esto se ejecuta si la condicion es falsa

    // ...
Fin_Si
```

**Múltiple:** Evaluamos tres o más escenarios. Al no cumplirse una condición buscamos averiguar si otra podría ser cierta. Esto se logra anidando la misma estructura pero con condiciones diferentes.

```gabo
Si (<condicion 1>) Entonces;
  // Esto se ejecuta si la condicion 1 es cierta

  Sino
    Si (<condicion 2>) Entonces;
    // Esto se ejecuta si la condicion 1 es falsa
    // y la condicion 2 es verdadera

    Sino
      Si (<condicion 3>) Entonces;
        // Igual con la condicion 3

        Sino
          Si (<condicion n>) Entonces;
            // Y con la cantidad de condiciones que quieras

          Sino 
            // También puede suceder que ninguna sea verdadera
            // Y termina ejecuntándose esto

            // ...
          Fin_Si
      Fin_Si
  Fin_Si
Fin_Si
```

> IMPORTANTE: cierra todas tus estructuras condicionales. Si falta algún `Fin_Si` tendrás un error de sintaxis y el código no funcionará.

### Operadores utilizados en condicionales

Estos son símbolos que permiten obtener valores de verdad (verdadero o falso). Funcionan poniendo el operador entre dos elementos, razón por la cual se les conoce también como **operadores binarios**.

Cabe destacar que un grupo funciona como elemento. Los mismos agrupamientos que se hacen en la sección anterior con las operaciones matemáticas se pueden hacer con estos operadores.

> En programación existen, además, operadores unarios y ternarios. Pero Gabocode solo posee operadores binarios.

Tenemos dos tipos: los lógicos y los de comparación.

#### Operadores lógicos 

Permiten hacer combinaciones de valores de verdad. Solo hay dos, `And` y `Or`.

```gabo
var a, b: Booleano;

a = 1;
b = 1;

Si (a And b) Entonces;
  Mostrar << "a y b son verdaderas";
Fin_Si

a = 1;
b = 0;

Si (a Or b) Entonces;
  Mostrar << "a o b son verdaderas";
Fin_Si
```

Estos operadores están muy relacionados con la tabla de la verdad:

| a   | b   | a And b | a Or b |
| --- | --- | ------- | ------ |
| 1   | 1   | 1       | 1      |
| 1   | 0   | 0       | 1      |
| 0   | 1   | 0       | 1      |
| 0   | 0   | 0       | 0      |

Donde `1` es verdadero y `0` es falso.

#### Operadores de comparación

Permiten comparar números. Son una herencia de las matemáticas, en las que existen estos mismos operadores. Son seis en total: 

- Mayor que. `>`
- Menor que. `<`
- Mayor o igual que. `>=`
- Menor o igual que. `<=`
- Igual a. `=`
- Desigual de. `!=`

Veamos ejemplos de cómo se usa cada uno.

**Mayor que y menor que**

```gabo
var a, b: Entero;

a = 1;
b = 3;

Si (a > b) Entonces;
  Mostrar << "a es mayor que b";

  Sino
    Mostrar << "a no es mayor que b";
Fin_Si

Si (a < b) Entonces;
  Mostrar << "a es menor que b";

  Sino
    Mostrar << "a no es menor que b";
Fin_Si
```

**Igualdad y desigualdad**

```gabo
var a, b, c: Entero;

a = 2;
b = 3;
c = b;

// Aca usamos `=` aunque es mas usual `==` o `===`
Si (a = c) Entonces;
  Mostrar << "a es igual a b";
Fin_Si

Si (a != b) Entonces;
  Mostrar << "a es desigual a b";
Fin_Si
```

**Mayor o igual que y menor o igual que**

```gabo
var a, b: Entero;

a = 3;
b = 4;

Si (a >= b) Entonces;
  Mostrar << "a es mayor o igual que b";

  Sino
    Mostrar << "a no es mayor o igual que b";
Fin_Si

Si (a <= b) Entonces;
  Mostrar << "a es menor o igual que b";

  Sino
    Mostrar << "a no es menor o igual que b";
Fin_Si
```

### Trabajando con condicionales

Usaremos un mismo enunciado para mostrar los dos enfoques a la hora de trabajar condiciones: el **camino feliz** y el **camino triste**.

---

**Enunciado:**

Cree un algoritmo que solicite dos números y calcule la raíz en la que el primer número es el índice y el segundo número es el radicando. Tome en cuenta que no se admiten números negativos para el cálculo

---

Analicemos el problema un momento.

Obviamente usaremos el truco matemático para calcular raíces. También debemos revisar que el índice no sea un número menor a 1 y que el radicando no sea menor a 0 (o la operación no podría hacerse). Haremos estas validaciones una vez el usuario haya ingresado los datos, por lo que usaremos los comandos `Mostrar` y `Leer`. 

Y ahora crearemos nuestro `Algoritmo Calculadora` usando ambos enfoques. Los dos algoritmos hacen lo mismo, pero fíjate en la condición evaluada en cada uno y en cómo cambia la estructura del código.

#### Camino Feliz o Happy path

Te enfocas en lo que quieres que sea verdadero, bueno o válido.

```gabo
Algoritmo Calculadora
Inicio
  // :D
  var indice: Entero;
  var radicando, resultado: Real;

  Mostrar << "Ingrese el indice de la raiz";
  Leer >> indice;
  Mostrar << "Ingrese el radicando de la raiz";
  Leer >> radicando;

  Si (indice >= 1 And radicando >= 0) Entonces;
    resultado = radicando ^ (1 / indice);

    Mostrar << "La raiz es igual a ", resultado;

    Sino
      Mostrar << "Datos no validos para la operacion";
  Fin_Si
Fin
```

#### Camino Triste o Unhappy path

Te enfocas en lo que puede que sea falso, malo o inválido.

```gabo
Algoritmo Calculadora
Inicio
  // :(
  var indice: Entero;
  var radicando, resultado: Real;

  Mostrar << "Ingrese el indice de la raiz";
  Leer >> indice;
  Mostrar << "Ingrese el radicando de la raiz";
  Leer >> radicando;

  Si (indice < 1 Or radicando < 0) Entonces;
    Mostrar << "Datos no validos para la operacion";

    Sino
      resultado = radicando ^ (1 / indice);

      Mostrar << "La raiz es igual a ", resultado;
  Fin_Si
Fin
```

#### ¿Cuándo usar uno y cuándo usar otro?

Mmmm... depende.

Si necesitas que tu solución se enfoque en los posibles errores o situaciones en las que algo podría salir mal, entonces ve por el camino triste.

Si en cambio tu solución requiere que te centres en las condiciones ideales para lograr la funcionalidad esperada, ve por el camino feliz.

Al final todo dependerá del problema y de la solución que estés diseñando para resolverlo. Y a veces será una cuestión de legibilidad, ya que el enfoque cambia cómo se lee y entiende el código.

Lo importante acá es entender ambos enfoques e ir practicando con ellos para que con la experiencia puedas decidir cuál es el mejor para la situación a la que te estés enfrentando.

