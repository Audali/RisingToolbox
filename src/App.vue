<template class="app">
  <Navbar @speedChanged="changeSpeed" />
  <router-view v-bind:gameSpeed="speed" />
</template>
<script>
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: { Navbar },
  data: function () {
    return {
      speed: "legacy",
    };
  },
  methods: {
    changeSpeed(value) {
      this.speed = value;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  background-color: rgb(30, 30, 30);
  height: 100%;
  margin: 0;
}

@media (orientation: landscape) {
  .card {
    box-shadow: 0 8px 8px 0 rgb(36, 35, 35);
    border: 0.2rem solid azure;
    transition: 0.3s;
    padding: 1rem;
    margin: 1rem;
    height: 100%;
    width: 75%;
    display: inline-block;
    background-color: #393939;
    border-radius: 0.5rem;
    color: azure;
    font-size: large;
    /* display: block; */
    /* overflow: auto; */
  }
}

@media (orientation: portrait) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* padding: 1rem; */
    margin: 2%;
    width: 96%;
    padding-top: 1rem;
    display: inline-block;
    background-color: gainsboro;
    border-radius: 0.5rem;
    font-size: large;
  }
}
</style>
