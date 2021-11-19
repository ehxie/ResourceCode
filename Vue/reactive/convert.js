/*
 * @Version: 
 * @Autor: XYH
 * @Date: 2021-11-19 15:35:30
 * @LastEditors: XYH
 * @LastEditTime: 2021-11-19 15:42:15
 * @Description: 
 */

module.exports = function convert(obj) {
    // 判断是否为对象
    if (!isObject(obj)) {
        throw new TypeError()
    }
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                console.log(`getting key "${key}": ${internalValue}`)
                return internalValue
            },
            set(newValue) {
                console.log(`setting key "${key}" to: ${newValue}`)
                internalValue = newValue
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