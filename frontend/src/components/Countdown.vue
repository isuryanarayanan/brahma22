<script>
export default {
  data() {
    const now = new Date();
    const newYear = new Date("2022-05-20T09:00:00");
    return {
      time: newYear - now,
    };
  },
};
</script>
<template>
  <vue-countdown
    :time="time"
    :interval="100"
    v-slot="{ days, hours, minutes, seconds }"
  >
    <div class="time">
      <div class="days time-wrapper">
        <div class="big font-1">{{ days }}</div>
        <div class="small font-2">days</div>
      </div>

      <div class="days time-wrapper">
        <div class="big font-1">{{ hours }}</div>
        <div class="small font-2">hours</div>
      </div>

      <div class="days time-wrapper">
        <div class="big font-1">{{ minutes }}</div>
        <div class="small font-2">minutes</div>
      </div>

      <div class="days time-wrapper">
        <div class="big font-1">{{ seconds }}</div>
        <div class="small font-2">seconds</div>
      </div>
    </div>
  </vue-countdown>
</template>

<style scoped>
.time {
  display: flex;
  justify-content: space-around;
  width: 90%;
  text-align: center;
  margin: auto;
}

.small {
  color: #eee;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .days .big {
    font-size: 56px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .days .big {
    font-size: 64px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .time {
    height: 50vh;
    text-align: center;
  }
  .days .big {
    font-size: 132px;
  }
  .days .small {
    font-size: 24px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
}
</style>
