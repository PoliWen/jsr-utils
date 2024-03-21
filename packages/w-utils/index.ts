import add  from 'lodash.add'
/**
 * 获取数据类型
 * @param target  目标数据
 * @returns boolean
 */
export function getType<T>(target: T): string {
    return Object.prototype.toString.call(target).slice(8, -1)
}

/**
 *  判断是否是字符串
 * @param str  目标数据
 * @returns boolean
 */
export function isString(str: unknown):boolean{
    return getType(str) === 'String'
}


/**
 *  判断是否是数组
 * @param str  目标数据
 * @returns boolean
 */
export function isArray(str: unknown):boolean{
    return getType(str) === 'Array'
}


/**
 *  判断是否是数组
 * @param str  目标数据
 * @returns boolean
 */
export function wrapAdd(a: number,b:number):number{
    return add(a,b)
}
