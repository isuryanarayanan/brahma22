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
  methods: {
    getStyle: function () {
      return this.server.slice(0, -1) + this.event.poster_image;
    },
  },
};
</script>
<template>
  <div class="card">
    <div
      class="card-image"
      :style="{
        'background-image': `url(${getStyle()})`,
      }"
    ></div>
    <div class="card-details">
      <div class="name font-1">
        {{ event.name }}
      </div>
      <div class="date"></div>
    </div>
  </div>
</template>
<style scoped>
.card {
  border-radius: 10px;
  width: 72%;
  height: 500px;

  margin: auto;
}
.card-image {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.name {
  font-size: 24px;
}
</style>