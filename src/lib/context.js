/**
 * 全局上线文，以k-v的方式存储
 * @type {{routes: Array}}
 */
const context = {
    routes:false
}

export const set = (key, value) => {
    !context[key] && context.warn(key, 'not exists! current context:', context)
    context[key] = value
}

export const get = (key) => context[key]