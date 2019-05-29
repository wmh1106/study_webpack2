// 获取参数
const loaderUtils = require('loader-utils')
// 验证
const validateOptions = require('schema-utils')

// 这里不能用箭筒函数，必须使用关键字 function 的，
// 否则，函数里的 this 不好用
function rawLoader(source) {
    // 文件内容
    // console.log(source)
    const options = getOptions(this) || {}
    // console.log('this.query:', options)

    // 使用 callback(有 4 个参数)
    // this.callback(null, result)


    validateOptions(schema, options, 'Loader Name')

    // 异步
    // const callback = this.async()
    // setTimeout(()=>{
    //     const result = source.replace('dell', 'dellLee')
    //     callback(null, result)
    // }, 1000)
}


module.exports = rawLoader
