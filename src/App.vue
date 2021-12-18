<template class="app">
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: { Navbar },
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
body {
  margin: 0;
}

@media (orientation: landscape) {
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1rem;
    margin: 1rem;
    width: 75%;
    display: inline-block;
    background-color: gainsboro;
    border-radius: 0.5rem;
    font-size: large;
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
