import { camelCase } from '@luca/cases'
import { isArray } from 'poli-utils'
import { wrapAdd, isString } from '@wen/utils'
console.log(isString('hello'))
console.log(isArray([1,2,3]))
console.log(camelCase('hello world'))
const arr = [1,2,3]
console.log(wrapAdd(1,2))
