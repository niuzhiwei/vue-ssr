module.exports = (isDev) => {
  return {
    modules: true,
    localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    camelCase: true
    // cssModules: {
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //   camelCase: true
    // },
    // hotReload: false //根据环境变量生成
  }
}
