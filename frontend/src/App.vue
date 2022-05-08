<script>
import { mapGetters } from "vuex";
import Loading from "./views/Loading.vue";
import Navbar from "./components/Navbar3.vue";

export default {
  name: "App",
  computed: {
    ...mapGetters({ isLoading: "get_isLoading" }),
  },
  components: { Loading, Navbar },
  mounted() {
    this.$store.dispatch("GET_EVENTS");
  },
};
</script>

<template>
  <div id="App">
    <div class="">
      <link
        href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
        rel="stylesheet"
        type="text/css"
      />

      <transition :duration="1000" enter-active-class="animated fadeInUp">
        <Navbar v-if="!isLoading" />
      </transition>
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          mode="out-in"
        >
          <div class="loading" v-if="isLoading">
            <Loading />
          </div>
          <component v-else :is="Component" />
        </transition>
      </router-view>
      <div class="navbar"></div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins");
#App {
  background: #8b44ff;
}
.pages {
  height: 100vh;
}
.font-1 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 800;
}
.font-2 {
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-weight: 300;
}
.font-3 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
}
</style>
