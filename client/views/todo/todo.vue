<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs
        :value="filter"
        @change="handleChangeTab"
      >
        <tab
          v-for="tab in states"
          :key=tab
          :label=tab
          :index=tab
        >
        </tab>
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus='autofocus'
      placeholder="接下去要做什么呢"
      @keyup.enter="handleAdd"
    >
    <Item
      v-for="todo in filteredTodos"
      :key='todo.id'
      :todo='todo'
      @del='deleteTodo'
      @toggle="toggleTodoState"
    ></Item>
    <helper
      :filter="filter"
      :todos='todos'
      @clearAllCompleted='clearAllCompleted'
    ></helper>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Item from './item.vue'
import Helper from './helper.vue'

export default {
  metaInfo: {
    title: "Niuniu's Todo"
  },
  components: { Item, Helper },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo update enter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo leave enter')
    next()
  },
  props: ['id'],
  data () {
    return {
      filter: 'all',
      states: ['all', 'active', 'completed']
    }
  },
  mounted () {
    this.fetchTodos()
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter((todo) => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'createTodo',
      'deleteTodo',
      'updateTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      this.createTodo({ content, completed: false })
      e.target.value = ''
    },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, { completed: !todo.completed })
      })
    },

    clearAllCompleted () {
      this.deleteAllCompleted()
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>
<style lang='stylus' scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.tab-container {
  background-color: #fff;
  padding: 0 15px;
}
</style>
