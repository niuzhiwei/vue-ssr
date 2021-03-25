<template>
  <div id="app">
    <div id="cover">
    </div>
    <Header></Header>
    <!-- <todo></todo> -->
    <router-link :to="{name:'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!-- <router-view name='a'></router-view> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
// import { mapState } from 'vuex'
export default {
  components: { Header, Footer, Todo },
  data () {
    return {}
  },
  computed: {
    // ...mapState(['count'])
  }
}
</script>
<style scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.1;
  z-index: -1;
}
</style>
