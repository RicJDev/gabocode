// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://ricjdev.github.io/',
  base: '/gabocode-website',

  markdown: {
    shikiConfig: {
      langs: [
        {
          name: 'gabo',
          scopeName: 'Gabocode',
          patterns: [
            {
              match:
                '\\b(?i:(Algoritmo|Inicio|Registro|Fin_Registro|Fin|Si|Fin_Si|En_Caso|Otro_Caso|Fin_Caso|Fin_Funcion|Fin_Procedimiento|Mientras|Fin_Mientras|Para|Fin_Para|Repetir|Fin_Repetir|Var|Mostrar|Leer|And|Or|Entonces|Sino|Hasta|Devolver|Hacer|Caso|Sea|Mod))\\b',
              name: 'keyword.gabo',
            },
            {
              begin: '\\b(?i:(Funcion|Procedimiento))\\b\\s+(\\w+(\\.\\w+)?)\\s*\\(',
              beginCaptures: {
                1: { name: 'storage.type.prototype.pascal' },
                2: { name: 'entity.name.function.prototype.pascal' },
                0: { name: 'punctuation.definition.parameters.begin.gabo' },
              },
              end: '\\)',
              endCaptures: {
                0: { name: 'punctuation.definition.parameters.end.gabo' },
              },
              name: 'meta.function.prototype.gabo',
              patterns: [
                {
                  match: '\\b(?i:(Entero|Real|Caracter|Cadena|Booleano|E|S))\\b',
                  name: 'support.type.primitive.gabo',
                },
                {
                  match: '\\w+',
                  name: 'variable.parameter.gabo',
                },
                {
                  match: ',',
                  name: 'punctuation.separator.parameter.gabo',
                },
              ],
            },
            {
              match: '\\b(?i:(Entero|Real|Caracter|Cadena|Booleano|E|S))\\b',
              name: 'support.type.primitive.gabo',
            },
            {
              match: '\\b(\\d+)|(\\d*\\.\\d+([Ee][-+]?\\d+)?)\\b',
              name: 'constant.numeric.gabo',
            },
            {
              begin: '"',
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.string.begin.gabo',
                },
              },
              end: '"',
              endCaptures: {
                0: {
                  name: 'punctuation.definition.string.end.gabo',
                },
              },
              name: 'string.quoted.double.gabo',
            },
            {
              begin: "'",
              beginCaptures: {
                0: {
                  name: 'punctuation.definition.string.begin.gabo',
                },
              },
              end: "'",
              endCaptures: {
                0: {
                  name: 'punctuation.definition.string.end.gabo',
                },
              },
              name: 'string.quoted.single.gabo',
            },
            {
              match: '\\b(?i:([a-zA-Z_][a-zA-Z_0-9]*))',
              name: 'variable.name.gabo',
            },
            {
              begin: '(^[\\t ]+)?(?=//)',
              beginCaptures: {
                1: {
                  name: 'punctuation.whitespace.comment.leading.pascal',
                },
              },
              end: '(?!\\G)',
              patterns: [
                {
                  begin: '//',
                  beginCaptures: {
                    0: {
                      name: 'punctuation.definition.comment.pascal',
                    },
                  },
                  end: '\\n',
                  name: 'comment.line.double-slash.pascal.two',
                },
              ],
            },
          ],
          repository: {},
        },
      ],
    },
  },
})
