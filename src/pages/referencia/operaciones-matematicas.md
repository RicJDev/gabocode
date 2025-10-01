---
layout: ../../layouts/Reference.astro
title: Operaciones matemáticas
index: 3
---

## Operaciones matemáticas

### Sintaxis básica
Empecemos viendo un algoritmo:

```gabo
Algoritmo que_hace_demasiadas_cosas
Inicio
  var suma, resta, multiplicacion, division, modulo, potencia: Real;

  suma = 1 + 2;
  resta = 3 - 1;
  multiplicacion = 2 * 4;
  division = 4 / 2;
  modulo = 10 MOD 3;
  potencia = 3 ^ 4;

  Mostrar << "La suma de 1 y 2: ", suma;                   // muestra 3
  Mostrar << "La diferencia entre 3 y 1: ", resta;         // muestra 2
  Mostrar << "El producto de 2 por 4: ", multiplicacion;   // muestra 8
  Mostrar << "El cociente de 4 entre 2: ", division;       // muestra 2
  Mostrar << "El módulo de 10 dividido entre 3: ", modulo; // muestra 1
  Mostrar << "Potencia de 3 elevado a 4: ", potencia;      // muestra 81
Fin
```

Ya sabemos lo que hacen las primeras líneas, así que vamos directo a estas:

```gabo
suma = 1 + 2;
resta = 3 - 1;
multiplicacion = 2 * 4;
division = 4 / 2;
modulo = 10 MOD 2;
potencia = 3 ^ 4;
```

Los nombres de las variables indican claramente qué operación matemática estamos realizando. Casi todas son ampliamente conocidas, a excepción del módulo. Este también se conoce como resto o residuo de la división.

Desarrollando la división del ejemplo, podemos ver por qué da 1.

<!-- TODO: insertar imagen -->

Aquí tienes [este artículo](https://es.wikipedia.org/wiki/M%C3%B3dulo_(matem%C3%A1tica)) por si necesitas más información acerca del módulo.

### Obteniendo la "raíz cuadrada"

Si ya tienes algo de conocimiento matemático conoces la siguiente propiedad de la potencia:

<!-- TODO: insertar imagen -->

De la cual proviene la siguiente igualdad:

<!-- TODO: insertar imagen -->

Y aprovechando esto es que podemos calcular raíces cuadradas aunque no tengamos una función u operador para ello. Como en este ejemplo:

```gabo
Algoritmo raiz_cuadrada
Inicio
  var numero, resultado: Real;

  Mostrar << "Ingresa un número positivo";
  Leer >> numero;

  resultado = numero ^ (1 / 2);

  Mostrar << "La raíz cuadrada de ", numero, " es ", resultado;
Fin
```

> El Gabocode es un caso especial. En general el operador `^` no se usa para representar la potenciación, ya que suele tener otro significado dentro los lenguajes de programación (en los que existen funciones u otros operadores, como el `Math.pow()` en JavaScript o el `**` en Python). Sin embargo, al tratarse de pseudo código, la elección de este operador pudo haber sido por simple familiaridad.

### Agrupamiento

```gabo
Algoritmo agrupemos_todo
Inicio
  var a, b, c, d: Entero;

  a = 1 + 2 * 3;
  b = (1 + 2) * 3;
  c = (a + b) * 3 ^ 2;
  d = [(a + b) * 3] ^ 2;

  Mostrar << "1 + 2 * 3 = "  a;                     // 7
  Mostrar << "(1 + 2) * 3 = ", b;                   // 9
  Mostrar << "(", a, "+",  b, ") * 3 ^ 2 = ", c;    // 144
  Mostrar << "[(", a, "+", b, ") * 3] ^ 2 = ", d;   // 2304
Fin
```

### Ejemplo con ejercicio basico

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
