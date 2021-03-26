<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <button @click="notify">点我</button>
    <!-- <notification content="test notify"></notification> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  metaInfo: {
    title: "Niuniu's Todo App"
  },
  components: {
    Header,
    Footer
  },
  mounted () {},
  methods: {
    notify () {
      this.$notfiy({
        content: 'test123',
        btn: 'close'
      })
    }
  },
  computed: {}
}
</script>

<style lang="stylus" scoped>
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
  opacity: 0.9;
  z-index: -1;
}

#loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


