import Vue from 'vue'
const app = new Vue({
  data: {
    text: 1
  },
  // template: '<div>{{text}}</div>',
  beforeCreate () {
    console.log(this.$el) // 不要修改data数据
  },
  created () {
    console.log(this.$el)
  },
  beforeMount () {
    console.log(this.$el)
  },
  mounted () {
    console.log(this.$el)
  },
  beforeUpdate () {
    console.log(this)
  },
  updated () {
    console.log(this)
  },
  activated () { // 与keep-alive相关
    console.log(this)
  },
  deactivated () {
    console.log(this)
  },
  beforeDestroy () {
    console.log(this)
  },
  destroyed () {
    console.log(this)
  },
  render (h) {
    throw new TypeError('render error')
    // console.log('render function') // render在beforemount和mounted之间执行
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack) // 只关注组件本身的错误，子组件不关心
  },
  errorCaptured () {
    // 会向上冒泡，正式环境可用
  }
})
app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy() // 主动销毁
}, 3000)
