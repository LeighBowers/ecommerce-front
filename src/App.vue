<template>
  <div id="app">
    <Base />
    <router-view />
  </div>
</template>
  <script>
import Base from "./layouts/Base.vue";
export default {
  components: {
    Base,
  },
  // computed: {
  //   isLoggedIn: function () {
  //     return this.$store.getters.isLoggedIn;
  //   },
  // },
  // methods: {
  //   logout: function () {
  //     this.$store.dispatch("logout").then(() => {
  //       this.$router.push("/login");
  //     });
  //   },
  // },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
