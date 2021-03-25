import Todo from '../views/todo/todo.vue'

export default [{
  path: '/',
  redirect: '/app'
},
{
  path: '/app',
  // path: '/app/:id',
  // props: true,
  component: Todo,
  // components: {
  //   default: Todo,
  //   a: Login
  // },
  name: 'app',
  meta: {
    title: 'this is app',
    description: 'app'
  },
  beforeEnter (to, from, next) {
    console.log('app beforeenter')
    next()
  }
  // children: [{
  //   path: 'test',
  //   component: Login
  // }]
},
{
  path: '/login',
  component: () => import('../views/login/login.vue')
}
]
