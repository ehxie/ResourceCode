/*
 * @Version: 
 * @Autor: XYH
 * @Date: 2021-11-19 16:23:25
 * @LastEditors: XYH
 * @LastEditTime: 2021-11-19 16:28:04
 * @Description: 
 */
const { Dep } = require('./depen.js')
module.exports = function observe(obj) {
    // 判断是否为对象
    if (!isObject(obj)) {
        throw new TypeError()
    }
    let dep = new Dep()
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                dep.depen()
                return internalValue
            },
            set(newValue) {
                if (newValue !== internalValue) {
                    internalValue = newValue
                    dep.notify()
                }
            }
        })
    })
}

function isObject(obj) {
    return typeof obj === 'object'
        && !Array.isArray(obj)
        && obj !== null
        && obj !== undefined
}