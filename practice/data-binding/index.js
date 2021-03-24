import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>'
  },
  template: `
  <div>
    {{isActive ? 'active' :'not active'}}{{ arr.join('')}}
    <p v-html="html"></p>
  </div>
  `
})
