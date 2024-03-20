import { camelCase } from '@luca/cases'
import { isString, myClone } from '@wen/utils'
import { isArray } from 'poli-utils'
console.log(isString('hello'))
console.log(isArray([1,2,3]))
console.log(camelCase('hello world'))
const arr = [1,2,3]
console.log(myClone()(arr))