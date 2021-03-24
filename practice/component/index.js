import Vue from 'vue'

const ChildComponent = {
  template: '<div>childcomponent:{{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    // console.log(this.$parent.$options.name)
    // console.log(this.yeye, this.data.value)
  }
}

const component = {
  name: 'components',
  components: {
    ChildComponent
  },
  template: `<child-component></child-component>`
}

new Vue({
  el: '#root',
  components: {
    comp: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
  <div>
  <comp></comp>
  <input type='text' v-model='value'/>
  </div>
  `
})
