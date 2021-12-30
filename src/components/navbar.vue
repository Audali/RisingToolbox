<template>
  <div>
    <ul>
      <li style="float: center">
        <router-link
          v-for="route in routeList"
          :key="route.name"
          :to="route.route"
          >{{ route.name }}</router-link
        >
      </li>
      <li style="float: right">
        <button class="active_button" ref="en" @click="setLanguage('en')">
          EN
        </button>
        <button class="inactive_button" ref="fr" @click="setLanguage('fr')">
          FR
        </button>
        <router-link to="/about">{{ $t("about") }}</router-link>
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
        { name: "Home", route: "/", i18name: "home" },
        { name: "Planner", route: "/planner", i18name: "planner" },
        {
          name: "Cost calculator",
          route: "/costcalculator",
          i18name: "costCalculator",
        },
      ],
    };
  },
  methods: {
    setLanguage(newLang) {
      if (newLang !== this.$i18n.locale) {
        this.replaceActiveButton(this.$i18n.locale);
        this.$i18n.locale = newLang;
        this.$cookie.setCookie("locale", newLang);

        this.routeList.forEach((elem) => {
          elem.name = this.$t(elem.i18name);
        });
        this.replaceInactiveButton(newLang);
      }
    },
    // Replace active button class to inactive button class on given ref
    replaceActiveButton(refToSwap) {
      this.$refs[refToSwap].classList.replace(
        "active_button",
        "inactive_button"
      );
    },
    // Replace inactive button class to active button class on given ref
    replaceInactiveButton(refToSwap) {
      this.$refs[refToSwap].classList.replace(
        "inactive_button",
        "active_button"
      );
    },
  },
  mounted() {
    // Check if localization cookie exists and set the language accordingly
    if (this.$cookie.isCookieAvailable("locale")) {
      this.setLanguage(this.$cookie.getCookie("locale"));
    } else {
      this.$cookie.setCookie("locale", "en");
    }
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
  background-color: rgb(11, 11, 11);
  /* background-color: #333; */
  top: 0;
  width: 100%;
  text-align: center;
}

li {
  display: inline-flex;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.active_button {
  background-color: #8e60bf;
  border: solid 2px #8e60bf;
  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  margin-left: 0.2rem;
  border-radius: 15%;
}
.active_button:hover {
  background-color: #8752c0;
}
.inactive_button {
  background-color: #e6e6e5;
  border: solid 1px rgb(80, 80, 80);
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  margin-left: 0.2rem;
  border-radius: 15%;
}
.inactive_button:hover {
  background-color: #8752c0;
}

li a:hover:not(.active) {
  background-color: #222;
}

.active {
  background-color: #04aa6d;
}
</style>