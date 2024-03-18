import { camelCase } from '@luca/cases'
import {isString} from '@wen/utils'
console.log(isString('hello')) // true
console.log(camelCase('hello world')) // helloWorld