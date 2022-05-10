<script>
//import vuex mapstate from vuex
import { mapState } from "vuex";
import NavbarMobile from "./NavbarMobile.vue";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  components: {
    NavbarMobile,
  },
  computed: {
    ...mapState({
      isMenu: "isMenu",
    }),
  },
  methods: {
    openMenu: function () {
      this.$store.dispatch("OPEN_MENU");
    },
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
      <div class="navbar-button_menu_open" @click="openMenu()" v-if="!isMenu">
        |||
      </div>
    </div>
    <div class="navbar-menu" v-if="isMenu">
      <NavbarMobile />
    </div>
    <div class="navbar-item navbar-links">
      <ul class="font-3">
        <li>
          <router-link active-class="link-active" to="/">Home</router-link>
        </li>
        <li>
          <router-link active-class="link-active" to="/events/1"
            >Day 1</router-link
          >
        </li>
        <li>
          <router-link active-class="link-active" to="/events/2"
            >Day 2</router-link
          >
        </li>
        <li>
          <router-link active-class="link-active" to="/events/3"
            >Events</router-link
          >
        </li>
        <li>
          <router-link active-class="link-active" to="/sponsors"
            >Sponsors</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-item navbar-action">
      <div class="action-button font-2">
        Register events <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.navbar-menu {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #381e63;
}

.navbar-button_menu_close {
  position: absolute;
}

nav {
  position: absolute;
  width: 100%;
  display: grid;
  z-index: 999;
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
  font-size: 28px;
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
  color: #381e63;
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
  grid-area: link;
  display: flex;
  align-content: center;
  justify-content: center;
}
.navbar-links ul {
  padding-top: 4%;
  width: 70%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-links ul li {
  width: 100%;
}
.navbar-links a {
  text-decoration: none;
  color: #381e63;
}

.navbar-action {
  grid-area: action;
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
/*extra small devices*/
@media only screen and (max-width: 600px) {
  nav {
    grid-template-areas: "header header header header button";
    padding-top: 5%;
  }
  .brand-main {
    font-size: 24px;
  }
  .brand-sub {
    font-size: 14px;
  }
  .navbar-links,
  .navbar-action {
    display: none;
  }
  .navbar-button {
    grid-area: button;
  }
}
/* small devices */
@media only screen and (min-width: 600px) {
  nav {
    grid-template-areas: "header header header header button";
    padding-top: 5%;
  }
  .brand-main {
    font-size: 24px;
  }
  .brand-sub {
    font-size: 14px;
  }
  .navbar-links,
  .navbar-action {
    display: none;
  }
  .navbar-button {
    grid-area: button;
  }
}

/* large devices */
@media only screen and (min-width: 992px) {
  nav {
    grid-template-areas: "header link link link action";
    padding: 0;
  }
  .brand-main,
  .navbar-action {
    padding-top: 10%;
  }
  .navbar-links,
  .navbar-action {
    display: block;
  }
  .navbar-button {
    display: none;
  }
}

@media only screen and (min-width: 1920px) {
  .brand-main {
    font-size: 48px;
  }
  .brand-sub {
    font-size: 28px;
  }
  .navbar-links {
    font-size: 24px;
  }
  .navbar-action i {
    font-size: 24px;
  }
  .action-button {
    height: 60px;
    border-radius: 20px;
    width: 70%;
    margin: auto;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #381e63;
    font-size: 24px;
  }
}
</style>
