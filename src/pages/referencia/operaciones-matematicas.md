---
layout: ../../layouts/Reference.astro
title: Operaciones matemáticas
index: 3
---

## Operaciones matemáticas

Empecemos viendo un algoritmo:

```gabo
Algoritmo que_hace_demasiadas_cosas
Inicio
  var suma, resta, multiplicacion, division, modulo, potencia: Real;

  suma = 1 + 2;
  resta = 3 - 1;
  multiplicacion = 2 * 4;
  division = 4 / 2;
  modulo = 10 MOD 2;
  potencia = 3 ^ 4;

  Mostrar << "La suma de 1 y 2: ", suma;                   // muestra 3
  Mostrar << "La diferencia entre 3 y 1: ", resta;         // muestra 2
  Mostrar << "El producto de 2 por 4: ", multiplicacion;   // muestra 8
  Mostrar << "El cociente de 4 entre 2: ", division;       // muestra 2
  Mostrar << "El modulo de 10 entre 2: ", modulo;          // muestra 0
  Mostrar << "Potencia de 3 elevado a 4: ", potencia;      // muestra 81
Fin
```

Ya sabemos lo que hacen las primeras líneas, así que vamos directo a estas:

```
suma = 1 + 2;
resta = 3 - 1;
multiplicacion = 2 * 4;
division = 4 / 2;
modulo = 10 MOD 2;
potencia = 3 ^ 4;
```

Para la mayoría debería ser normal ver estas operaciones, ya que las hemos ido aprendiendo desde la escuela, a excepción de `MOD`, que no es tan conocida. Este operador representa el módulo de la división de dos números, también conocido como resto de la división.

[Aquí](https://es.wikipedia.org/wiki/M%C3%B3dulo_(matem%C3%A1tica)) dejo el artículo de wikipedia donde se explica mejor.
