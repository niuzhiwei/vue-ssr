export default {
  doLogin (state, userInfo) {
    state.user = userInfo
  },
  fillTodos (state, todos) {
    state.todos = todos
  },
  createTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, {
    id,
    todo
  }) {
    state.todos.splice(state.todos.findIndex(t => t.id === id), 1, todo)
  },
  deleteTodo (state, id) {
    state.todos.splice(state.todos.findIndex(t => t.id === id), 1)
  },
  deleteAllCompleted (state) {
    state.todos = state.todos.filter(t => !t.completed)
  }
}
