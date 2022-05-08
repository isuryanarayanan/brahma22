<script>
//import vuex mapstate from vuex
import { mapState } from "vuex";
export default {
  name: "NavbarMobile",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isMenu: "isMenu",
    }),
  },
  methods: {
    closeMenu: function () {
      this.$store.dispatch("CLOSE_MENU");
    },
  },
};
</script>
<template>
  <nav>
    <div class="navbar-item navbar-brand">
      <div class="brand-main">Brahma<span>"22</span></div>
      <div class="brand-sub">
        <hr />
        Awaken the creator within
        <hr />
      </div>
    </div>
    <div class="navbar-item navbar-button">
      <div class="navbar-button_menu_close" @click="closeMenu()" v-if="isMenu">
        xxx
      </div>
    </div>
  </nav>
  <div class="links">
    <div class="navbar-links">
      <ul class="font-3">
        <li>
          <router-link active-class="link-active" @click="closeMenu()" to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            active-class="link-active"
            @click="closeMenu()"
            to="/events/1"
            >Day 1</router-link
          >
        </li>
        <li>
          <router-link
            active-class="link-active"
            @click="closeMenu()"
            to="/events/2"
            >Day 2</router-link
          >
        </li>
        <li>
          <router-link
            active-class="link-active"
            @click="closeMenu()"
            to="/events/3"
            >Events</router-link
          >
        </li>
        <li>
          <router-link
            active-class="link-active"
            @click="closeMenu()"
            to="/sponsors"
            >Sponsors</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-action">
      <div class="action-button font-2">
        Register events <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.red {
  background: red;
}
nav {
  width: 100%;
  display: grid;
  z-index: 999;
  grid-template-areas: "header header header header button";
  padding-top: 5%;
}
.navbar-item {
  width: 100%;
  height: 64px;
}
.navbar-brand {
  grid-area: header;
}
.brand-main {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: white;
  margin-left: -11%;
  line-height: 100%;
}
.brand-main span {
  opacity: 50%;
}
.brand-sub {
  font-size: 14px;
  color: #8b44ff;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-sub hr {
  width: 10%;
  height: 1px;

  border: 0;

  background: black;
}

.navbar-links {
  font-size: 18px;
  color: white;
}
.navbar-links ul {
  width: 100%;
  list-style: none;
}
.navbar-links ul li {
  width: 100%;
}
.navbar-links a {
  text-decoration: none;
  color: #8b44ff;
}
.navbar-action {
}
.action-button {
  height: 40px;
  border-radius: 20px;
  width: 70%;
  margin: auto;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #381e63;
  font-size: 14px;
}
.action-button i {
  padding-left: 10px;
}
.navbar-button {
  grid-area: button;
}
</style>
