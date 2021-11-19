/*
 * @Version: 
 * @Autor: XYH
 * @Date: 2021-11-19 15:32:11
 * @LastEditors: XYH
 * @LastEditTime: 2021-11-19 15:42:59
 * @Description: 
 */
const convert = require('./convert.js')
let state = {
    count:0,
}

convert(state);

state.count;     // > getting key "count": 0
state.count = 1; // > setting key "count" to: 1