import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'components',
  // template: `<div><slot></slot></div>`,
  render (h) {
    return h('div', {
      // on: {
      //   click: () => this.$emit('click')
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  }
}

new Vue({
  el: '#root',
  components: {
    comp: component
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp)
    console.log(this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('click')
    }
  },
  // template: `
  //    <comp>
  //       <span>{{value}}</span>
  //    </comp>
  // `,
  render (h) {
    return h('comp', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: {
        click: this.handleClick
      }
    }, [h('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>456</span>'
      },
      attrs: {
        id: 'test-id'
      }
    }, this.value)])
  }
})
