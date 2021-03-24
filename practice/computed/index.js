import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
     <div>
        <span>{{name}}</span>
        <span>{{getName()}}</span>
        <span>{{number}}</span>
        <p>{{fullName}}</p>
        <input type='text' v-model='number'>
        <input type='text' v-model='firstName'>
        <input type='text' v-model='lastName'>
        <input type='text' v-model='name'>
     </div>
  `,
  data: {
    firstName: 'niu',
    lastName: 'zhiwei',
    number: 0,
    fullName: ''
  },
  computed: {
    name: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
    // name () {
    //   console.log('new name')
    //   return `${this.firstName}${this.lastName}`
    // }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    }
  },
  methods: {
    getName () {
      console.log('name invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
