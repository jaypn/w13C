<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="https://image.shutterstock.com/image-vector/dj-icon-illustration-isolated-vector-260nw-768126589.jpg"
    />
    <page-body />
  </div>
</template>

<script>
import pageBody from "./components/body.vue";

export default {
  name: "App",
  components: {
    pageBody
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
