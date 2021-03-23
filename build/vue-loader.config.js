module.exports = (isDev) => {
    return {
        preserveWhitespace: true,
        extractCSS: !isDev, //分离vue文件中的css
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // hotReload: false //根据环境变量生成
    }
}