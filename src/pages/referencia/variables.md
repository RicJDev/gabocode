---
layout: ../../layouts/ReferenceLayout.astro
title: Gabocode | Variables
---

## Sintaxis general y tipos de datos

```gabo
Algoritmo Variables_y_tipos
Inicio
  // Todos los algoritmos incluyen un Inicio.
  // Esto es un comentario. Te permite dar informacion a quien lea el codigo

  // Para declarar una variable se usa la palabra reservada "var".
  // Se reserva la parte superior del documento para declarar todas las variables.

  // Estos son los tipos de datos primitivos para los algoritmos:
  var numero_real: Real;
  var numero_entero: Entero;
  var mi_caracter: Caracter;

  // Puedes declarar varias variables del mismo tipo separandolas por coma
  var mi_cadena_de_texto, nombre: Cadena;
  var mi_booleano: Booleano;

  // Con el operador `=` puedes asignar valores a las variables
  numero_real = 1.2;
  numero_entero = 12;
  mi_caracter = 'a';
  mi_cadena_de_texto = "Hola, mundou!";
  mi_booleano = 1;

  // Asi se muestra un mensaje por pantalla
  Mostrar << "Este es un mensaje sumamente importante";

  // Asi se almacena la entrada de un usuario en una variable
  Mostrar << "Ingrese su nombre";
  Leer >> nombre;
  Mostrar << "Hola. Bienvenido, ", nombre;
Fin
```

## Operaciones matematicas

```gabo
var suma, resta, multiplicacion, division, modulo, potencia: Real;

// Esta es la sintaxis que maneja el lenguaje para ejecutar estas operaciones matematicas

suma = 1 + 2;
resta = 3 - 1;
multiplicacion = 2 * 4;
division = 4 / 2;
modulo = 10 MOD 2;
potencia = 3 ^ 4;

Mostrar << "La suma de 1 y 2: ", suma; // muestra 3
Mostrar << "La diferencia entre 3 y 1: ", resta; // muestra 2
Mostrar << "El producto de 2 por 4: ", multiplicacion; // muestra 8
Mostrar << "El cociente de 4 entre 2: ", division; // muestra 2
Mostrar << "El modulo de 10 entre 2: ", modulo; // muestra 0
Mostrar << "Potencia de 3 elevado a 4: ", potencia; // muestra 81
```

## Agrupamiento

```gabo
var a, b, c, d: Entero

a = 1 + 2 * 3
b = (1 + 2) * 3
c = (a + b) * 3 ^ 2
d = [(a + b) * 3] ^ 2

Mostrar << "1 + 2 * 3 = "  a; // 7
Mostrar << "(1 + 2) * 3 = ", b; // 9
Mostrar << "(", a, "+",  b, ") * 3 ^ 2 = ", c; // 144
Mostrar << "[(", a, "+", b, ") * 3] ^ 2 = ", d; // 2304
```

## Ejemplo con ejercicio basico

**Enunciado**:

Desarrolle un algoritmo que solicite el nombre de un empleado, la cantidad de horas que dicho empleado ha trabajado y su salario por hora. El programa debe calcular el salario total que le corresponde al empleado. Ademas, considerando que estamos en epoca de bonificaciones, debe calcular el monto de la misma, que es igual al 10% del salario total, y mostrar todos los datos al empleado

**Solución**:

```gabo
Algoritmo salario
Inicio
  var nombre: Cadena;
  var horas_trabajadas: Entero;
  var salario_hora, salario_neto, bonificacion, salario_total: Real;

  Mostrar << "Ingrese su nombre";
  Leer >> nombre;
  Mostrar << "Ingrese la cantidad de horas que ha trabajado";
  Leer >> horas_trabajadas;
  Mostrar << "Ingrese el salario basico por hora";
  Leer >> salario_hora;

  salario_neto = salario_hora * horas_trabajadas;
  bonificacion = (salario_neto * 10) / 100;
  salario_total = salario_neto + bonificacion;

  Mostrar << "-------------------------------------"
  Mostrar << "Datos del trabajador";
  Mostrar << "Nombre: ", nombre;
  Mostrar << "Salario neto: ", salario_neto;
  Mostrar << "Bonificacion del 10%: ", bonificacion;
  Mostrar << "-------------------------------------"
  Mostrar << "Salario total: ", salario_total;
Fin
```
