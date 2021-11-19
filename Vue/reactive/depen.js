/*
 * @Version: 
 * @Autor: XYH
 * @Date: 2021-11-19 15:54:55
 * @LastEditors: XYH
 * @LastEditTime: 2021-11-19 16:29:03
 * @Description: 
 */
exports.Dep = class Dep {
    constructor() {
        this.subscribers = new Set()
    }

    depen() {
        // 依赖收集
        if (activeUpdate) {
            // 将正在运行的函数加入依赖
            this.subscribers.add(activeUpdate)
        }
    }

    notify() {
        // 通知依赖更新
        this.subscribers.forEach(sub => sub())
    }
}

// 因为JavaScript是单线程，所以定义一个全局变量，用于标记正在执行的函数，以便于将次函数加入依赖
let activeUpdate

exports.autorun = function autorun(update) {
    function wrappedUpdate() {
        activeUpdate = wrappedUpdate
        update()
        activeUpdate = null
    }
    wrappedUpdate()
}