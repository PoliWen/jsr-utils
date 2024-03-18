
/**
 * 这是一个js工具库
 * @module jsr-utils
 */

/**
 * 获取数据类型
 * @param target  目标数据
 * @returns string
 */
export function getType<T>(target: T): string {
    return Object.prototype.toString.call(target).slice(8, -1)
}

/**
 *  判断是否是字符串
 * @param str  目标数据
 * @returns string
 */
export function isString(str: unknown):boolean{
    return getType(str) === 'String'
}
