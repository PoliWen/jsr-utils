import { camelCase } from '@luca/cases'
import { isString } from '@wen/utils'
import { isArray } from 'poli-utils'
console.log(isString('hello'))
console.log(isArray([1,2,3]))
console.log(camelCase('hello world'))