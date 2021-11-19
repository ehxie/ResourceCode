/*
 * @Version: 
 * @Autor: XYH
 * @Date: 2021-11-19 16:23:09
 * @LastEditors: XYH
 * @LastEditTime: 2021-11-19 16:40:38
 * @Description: 
 */
const observe = require('./observe.js')
const { autorun } = require('./depen.js')
const state = {
    count: 0
}
observe(state)

autorun(() => {
    console.log(`count is: ${state.count}`);
})
// should immediately log "count is: 0"

state.count = 1
  // should log "count is: 1"