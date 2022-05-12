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
      <div class="card-image-actions">
        <router-link
          class="details"
          active-class="link-active"
          :to="'/events/details/' + event.id"
          >Details</router-link
        >
        <router-link
          class="register"
          active-class="link-active"
          :to="'/events/register/' + event.id"
          >Register</router-link
        >
      </div>
    </div>
    <div class="card-content">
      <div class="card-title font-1">
        <h3>{{ event.name }}</h3>
      </div>
      <div class="card-text font-3">
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* style the card */
.card {
  border-radius: 5px;
  width: 200px;
  margin: auto;
  height: 320px;
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
.card-image-actions {
  position: absolute;
  width: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image-actions a {
  text-decoration: none;
}

.card-image-actions .details {
  width: 50%;
  font-size: 14px;
  color: #381e63;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image-actions .register {
  width: 50%;
  font-size: 14px;
  color: #381e63;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content {
  padding-left: 10px;
}
.card-content .card-title {
  font-size: 18px;
  color: white;
}
.card-content .card-text {
  font-size: 14px;
  color: white;
  line-height: 0%;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .card-image-actions {
    margin-top: -13%;
    height: 48px;
    background: white;
  }
  .card {
    height: 400px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-image-actions {
    margin-top: -3%;
    height: 36px;
    background: white;
  }
  .card {
    height: 400px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .card-image-actions {
    margin-top: -3%;
    height: 48px;
    background: white;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .card-image-actions {
    margin-top: -2%;
    height: 48px;
    background: white;
  }
}
</style>