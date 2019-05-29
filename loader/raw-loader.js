const loaderUtils = require('loader-utils')

function rawLoader(source) {
    const options = loaderUtils.getOptions(this) || {}
    const json = JSON.stringify(source)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')

    console.log('json====',json)
    return `export default ${json}`
}

module.exports = rawLoader
