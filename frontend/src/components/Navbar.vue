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
  <nav :class="[isMenu ? 'mobile-navbar-root' : 'navbar-root']">
    <div class="navbar-item navbar-logo"></div>
    <div class="navbar-item navbar-brand">
      <div class="brand-main">Brahma<span>"22</span></div>
      <div class="brand-sub">
        <hr />
        Awaken the creator within
        <hr />
      </div>
    </div>
    <div class="navbar-item navbar-links">
      <ul class="font-3">
        <li>
          <router-link
            class="link"
            @click="closeMenu()"
            active-class="link-active"
            to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            @click="closeMenu()"
            active-class="link-active"
            to="/events/1"
            >Day 1</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            @click="closeMenu()"
            active-class="link-active"
            to="/events/2"
            >Day 2</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            @click="closeMenu()"
            active-class="link-active"
            to="/events/3"
            >Events</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            @click="closeMenu()"
            active-class="link-active"
            to="/sponsors"
            >Sponsors</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-item navbar-action">
      <div class="navbar-action-button font-3">Register Events</div>
    </div>
    <div class="navbar-item navbar-button" @click="openMenu()" v-if="!isMenu">
      XXX
    </div>
    <div class="navbar-item navbar-button" @click="closeMenu()" v-if="isMenu">
      XXX
    </div>
  </nav>
</template>

<style scoped>
/* global css */

.navbar-root {
  padding-top: 2%;
  position: absolute;
  width: 100%;
  display: grid;
  z-index: 999;
}
.mobile-navbar-root {
  padding-top: 2%;
  position: absolute;
  width: 100%;
  background-color: #15082b;
  display: grid;
}

.navbar-items {
  height: 100%;
}

.navbar-logo {
  background-image: url("../assets/brahmalogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.navbar-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  grid-area: brand;
}
.brand-main {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
  color: white;
  line-height: 100%;
}
.brand-main span {
  opacity: 50%;
}
.brand-sub {
  color: #381e63;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.brand-sub hr {
  height: 1px;

  border: 0;

  background: black;
}
.navbar-links {
  grid-area: links;
}
.link {
  color: #381e63;
  text-decoration: none;
}
.link-active {
  color: white;
}
.navbar-links ul {
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
}

.navbar-action {
  grid-area: action;
}
.navbar-button {
  grid-area: button;
  color: white;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar-root {
    grid-template-areas: "logo brand button";
  }
  .mobile-navbar-root {
    grid-template-areas:
      "logo brand button"
      "links links links"
      "action action action";
    z-index: 9999;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .mobile-navbar-root .navbar-links {
    display: flex;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 24px;
    line-height: 250%;
    height: 300px;
  }
  .mobile-navbar-root .navbar-links ul {
    display: block;
    list-style: none;
    margin: 0;
  }
  .mobile-navbar-root .navbar-action {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: white;
    height: 50px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .navbar-action,
  .navbar-links {
    display: none;
  }
  .brand-main {
    font-size: 28px;
    margin-left: -9%;
  }

  .brand-sub {
    font-size: 14px;
  }
  .brand-sub hr {
    background: white;
    width: 10%;
  }
  .navbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .navbar-root {
    grid-template-areas: "logo brand button";
  }
  .navbar-action,
  .navbar-links {
    display: none;
  }
  .brand-main {
    font-size: 32px;
  }

  .brand-sub {
    font-size: 14px;
  }
  .brand-sub hr {
    width: 20%;
  }
  .mobile-navbar-root {
    grid-template-areas:
      "logo brand button"
      "links links links"
      "action action action";
    z-index: 9999;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .mobile-navbar-root .navbar-links {
    display: flex;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 24px;
    line-height: 250%;
    height: 300px;
  }
  .mobile-navbar-root .navbar-links ul {
    display: block;
    list-style: none;
    margin: 0;
  }
  .mobile-navbar-root .navbar-action {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: white;
    height: 50px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .navbar-root {
    grid-template-areas: "logo brand links links links action ";
  }
  .mobile-navbar-root {
    display: none;
  }

  .navbar-action,
  .navbar-links {
    display: block;
  }
  .navbar-button {
    display: none;
  }
  .link-active {
    border-bottom: 5px solid white;
  }
  .brand-main {
    font-size: 28px;
    margin-left: -8%;
  }

  .brand-sub {
    font-size: 14px;
  }
  .brand-sub hr {
    width: 15%;
  }
  .navbar-action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar-action-button {
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 45px;
    border-radius: 25px;
    background: white;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .navbar-root {
    grid-template-areas: "logo brand links links links action";
  }
  .brand-main {
    font-size: 32px;
    margin-left: -10%;
  }
  .navbar-links {
    font-size: 24px;
  }
  .navbar-action {
    font-size: 20px;
  }
  .navbar-action-button {
    width: 250px;
    height: 55px;
  }

  .brand-sub {
    font-size: 18px;
  }
  .brand-sub hr {
    width: 20%;
  }
}
</style>

