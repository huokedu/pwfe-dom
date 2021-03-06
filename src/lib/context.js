/**
 * 全局上线文，以k-v的方式存储
 * @type {{routes: Array}}
 */
const context = {
    routes:false, //路由列表
    initRoute:false //首屏路径
}

export const set = (key, value) => {
    'undefined' === typeof context[key] && console.warn(key, 'not exists! current context:', context)
    context[key] = value
}

export const get = (key) => context[key]