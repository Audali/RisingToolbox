<template>
  <div>
    <ul>
      <li v-for="route in routeList" :key="route.name">
        <router-link :to="route.route">{{ route.name }}</router-link>
      </li>
      <li style="float: right">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      // Route list for navbar
      routeList: [
        { name: "Home", route: "/" },
        { name: "Planner", route: "/planner" },
        { name: "Cost calculator", route: "/costcalculator" },
      ],
    };
  },
};
</script>
<style scoped>
body {
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(11,11,11);
  /* background-color: #333; */
  top: 0;
  width: 100%;
}

li {
  display: inline-block;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}
</style>