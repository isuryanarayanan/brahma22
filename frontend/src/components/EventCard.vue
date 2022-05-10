<script>
import { mapGetters } from "vuex";
export default {
  name: "EventCard",
  props: ["event"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      server: "getServer",
    }),
  },
  methods: {},
};
</script>
<template>
  <div class="card">
    <!-- card with image and buttons on the bottom -->
    <div class="card-image">
      <img :src="`${server.slice(0, -1) + event.poster_image}`" />
    </div>
    <div class="card-content">
      <div class="card-title">
        <h3>{{ event.name }}</h3>
      </div>
      <div class="card-text">
        <p>{{ event.description }}</p>
      </div>
    </div>
    <div class="card-action">
      <router-link
        class="link"
        active-class="link-active"
        to="/events/{{ event.id }}"
        >View Event</router-link
      >
    </div>
  </div>
</template>
<style scoped>
/* style the card */
.card {
  border-radius: 5px;
  margin: 1rem;
  width: 300px;
  padding: 1rem;
  z-index: 9999;
}
.card-image {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0px 0px;
}
.card-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.card-action {
  position: absolute;
}
</style>