---
layout: ../../layouts/ReferenceLayout.astro
title: Gabocode | Variables
---

## Estructura condicional `Si-Entonces`

Esta estructura nos permite actuar tomando decisiones.

### Simple

```gabo
Si (<condicion>) Entonces;
  // Esto se ejecuta si la condicion es cierta

  // ...
Fin_Si
```

### Doble

```gabo
Si (<condicion 1>) Entonces;
  // Esto se ejecuta si la condicion 1 es cierta

  Sino
    // Esto se ejecuta si la condicion 1 es falsa

    // ...
Fin_Si
```

### Multiple

```gabo
Si (<condicion 1>) Entonces;
  // Esto se ejecuta si la condicion 1 es cierta

  Sino
    Si (<condicion 2>) Entonces;
    // Esto se ejecuta si la condicion 2 es cierta

    Sino
      Si (<condicion 3>) Entonces;
        // Igual con la condicion 3

        Sino
          Si (<condicion n>) Entonces;
            // Y con la cantidad de condiciones que quieras

            // ...
          Fin_Si
      Fin_Si
  Fin_Si
Fin_Si
```

## Operadores

Estos son simbolos que permiten obtener valores de verdad (verdadero o falso) al aplicarlos a dos elementos. Dicho resultado se obtiene de combinar valores de verdad o de realizar comparaciones entre los elementos

### Logicos

Permiten hacer combinaciones de valores de verdad.

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
Estan muy relacionados a la tabla de la verdad:

| a | b | a And b | a Or b |
|---|---|---------|--------|
| 1 | 1 |    1    |   1    |
| 1 | 0 |    0    |   1    |
| 0 | 1 |    0    |   1    |
| 0 | 0 |    0    |   0    |

Donde `1` es verdadero y `0` es falso.

### De comparacion

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

## Trabajando con condicionales

Usaremos el mismo enunciado para mostrar dos enfoques a la hora de validar con condicionales.

**ENUNCIADO:**

Cree un algoritmo que solicite dos numeros y calcule la raiz con el primer numero como indice y el segundo numero como radicando. Tome en cuenta que no se admiten numeros negativos para el calculo

Y ahora veremos como seria nuestro `Algoritmo Calculadora`. Notese que hay operadores que son ideales segun se use uno u otro enfoque

### Camino Feliz :D

Te enfocas en lo que quieres que sea verdadero, bueno o valido

```gabo
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
```

### Camino Triste :(

Te enfocas en lo que puede que sea falso, malo o invalido

```gabo
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
```

### Ejercicio de los dados

Se necesita un algoritmo que solicite los numeros de tres dados y muestre un mensaje dependiendo de la cantidad de 6 obtenidos:
   - 6 en los tres dados: "Excelente"
   - 6 en dos dados: "Muy bien"
   - 6 en un solo dado: "Regular"
   - Ningun 6: "Pesimo"

Esto solo debe realizarse con datos previamente validados. En caso de haber datos invalidos, notificar al usuario y finalizar el programa

```gabo
Algoritmo Armemos_un_casino_y_hagamonos_ricos
Inicio
  var dado1, dado2, dado3: Entero;

  Mostrar << "Ingrese el dado 1";
  Leer >> dado1; // 5
  Mostrar << "Ingrese el dado 2";
  Leer >> dado2; // 4
  Mostrar << "Ingrese el dado 3";
  Leer >> dado3; // 4

  Si (dado1 < 1) Or (dado1 > 6) Or (dado2 < 1) Or (dado2 > 6) Or (dado3 < 1) Or (dado3 > 6) Entonces;
    Mostrar << "Datos invalidos. Solo puedes ingresar numeros del 1 al 6";

    Sino Si (dado1 = 6 And dado2 = 6 And dado3 = 6) Entonces;
      Mostrar << "Excelente";

      Sino Si (dado1 = 6 And dado2 = 6) Or (dado2 = 6 And dado3 = 6) Or (dado1 = 6 And dado3 = 6) Entonces;
        Mostrar << "Muy bien";

        Sino Si (dado1 = 6 Or dado2 = 6 Or dado3 = 6) Entonces;
          Mostrar << "Regular";

          Sino
            Mostrar << "Pesimo";
          Fin_Si
      Fin_Si
    Fin_Si
  Fin_Si
Fin
```

### Ejercicio del carnet

Desarrolle un algoritmo que aplique un 10% de descuento en la compra de un usuario, en caso de poseer carnet de membresia. No olvide solicitar el nombre del mismo y validar el monto de la compra

```gabo
Algoritmo Golden_Member
Inicio
  var nombre: Cadena;
  var tiene_carnet: Booleano;
  var monto_compra, descuento, monto_final: Real;

  Mostrar << "Ingrese el nombre del usuario";
  Leer >> nombre;
  Mostrar << "Ingrese el monto de la compra";
  Leer >> monto_compra;
  Mostrar << "¿Posee el usuario carnet de membresia? (0: no, 1: si)";
  Leer >> tiene_carnet;

  Si (monto_compra > 0) Entonces;
    Si (tiene_carnet = 1) Entonces;
      descuento = (monto_compra * 10) / 100;
      monto_final = monto_compra - descuento;

      Mostrar << "El usuario ", nombre, " es miembro. Se le ha aplicado un 10% de descuento";
      Mostrar << "Monto de la compra: ", monto_compra;
      Mostrar << "Monto a pagar: ", monto_final;

      Sino 
        Mostrar << "El usuario ", nombre, " no es miembro. No se le ha aplicado ningun descuento";
        Mostrar << "Monto a pagar: ", monto_compra;
    Fin_Si

    Sino
      Mostrar << "Ha ingresado un monto invalido";
  Fin_Si
Fin
```
