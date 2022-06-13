<script>
export default {
  data() {
    return {
      shown: "avial",
    };
  },
  methods: {
    show(name) {
      if (name == "avial") {
        this.shown = "avial";
      } else if (name == "hanna") {
        this.shown = "hanna";
      }
    },
  },
};
</script>
<template>
  <div class="slider-container">
    <div class="slider-nav font-3">
      <div class="slider-nav-item" v-on:click="show('avial')">Avial</div>
      <div class="slider-nav-item" v-on:click="show('hanna')">Hanna Shine</div>
    </div>
    <div class="slider-card avial" v-if="shown == 'avial'">
      <div class="slider-banner"></div>
      <div class="slider-info font-3">
        <h1>Avial</h1>
      </div>
    </div>
    <div class="slider-card hanna" v-if="shown == 'hanna'">
      <div class="slider-banner"></div>
      <div class="slider-info font-3">
        <h1>Hanna shine</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slider-container {
  height: 100%;
  padding-bottom: 50px;
}
.slider-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.slider-nav-item {
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: left;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  border: 1px solid #703bc4;
  border-radius: 20px;
  margin: 20px;
  position: relative;
}

.slider-nav-item:hover {
  background: #703bc4;
}

.slider-card {
  width: 100%;
}
.avial .slider-banner {
  height: 100%;
  border-radius: 20px;
  background-image: url("../assets/avial.jpg");
  background-size: cover;
  border: 5px solid #311a57;
}
.hanna .slider-banner {
  height: 100%;
  border-radius: 20px;
  background-image: url("../assets/hanna.jpeg");
  background-size: cover;
  border: 5px solid #311a57;
}
/* small screen */
@media only screen and (max-width: 600px) {
  .slider-card {
    height: 250px;
  }
  .slider-nav {
    padding: 0;
  }
  .slider-nav-item {
    margin: 0;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .slider-container {
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
  }
  .slider-nav {
    height: 32px;
  }
  .slider-nav-item {
    width: 100%;
    height: 100%;
    justify-content: space-around;
    font-size: 20px;
  }
  .slider-card {
    padding-top: 2%;
    height: 100vh;
  }
  .slider-banner {
    height: 100%;
    border-radius: 20px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
}
</style>