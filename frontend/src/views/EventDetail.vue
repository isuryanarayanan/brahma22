<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return { event: {} };
  },
  computed: {
    ...mapGetters({
      server: "getServer",
      mode: "getMode",
    }),
  },
  mounted() {
    this.$store.dispatch("GET_EVENT", this.id).then((e) => {
      this.event = e;
      console.log(this.event);
    });
  },
  methods: {
    getDay(datetime) {
      // return 1 if date is 21 and 2 if date is 22
      var date = new Date(datetime);
      var day = date.getDate();
      if (day == 20) {
        return 1;
      } else {
        return 2;
      }
    },
    getParsedTime(datetime) {
      // write a function to return time in 12 hour format from a datetime string in the format of "YYYY-MM-DD HH:MM:SS"
      // return the time in 12 hour format
      // return "12:00 PM";
      var date = new Date(datetime);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
      //.replace(/(?:\r\n|\r|\n)/g, '<br />')
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="branding font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">{{ event.name }}</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>{{ event.name }}</p>
      </div>
    </div>
    <div class="event-info">
      <div class="info-left">
        <div class="poster">
          <img :src="`${server.slice(0, -1) + event.poster_image}`" />
        </div>

        <div class="register">
          <p v-if="event.sold_out" class="font-3">Sold Out</p>
          <p v-if="!event.offline_register && !event.sold_out">
            <a class="font-3" :href="event.register_url">Register Online</a>
          </p>
          <p v-if="event.offline_register && !event.sold_out" class="font-3">
            Offline registration
          </p>
        </div>
        <div class="prize font-1">
          <div class="prize-tag">
            PRIZE WORTH RS
            {{ event.prize }}
          </div>
        </div>
        <div class="organizers">
          <p class="organizers-brand font-1">Event organizers</p>
          <p class="font-3">{{ event.organizers }}</p>
        </div>
      </div>
      <div class="info-right">
        <div class="tags font-3">
          <div class="tag">Day {{ getDay(event.start) }}</div>
          <div class="tag">{{ event.fee }} {{ event.type }}</div>
          <div class="tag">
            {{ getParsedTime(event.start) }} - {{ getParsedTime(event.end) }}
          </div>
          <div class="tag">@{{ event.venue }}</div>
        </div>
        <div class="description font-3">
          <p class="font-3">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: auto;
  min-height: 100vh;
}
.organizers p {
  color: white;
  text-align: center;
  white-space: pre-wrap;
  line-height: 100%;
}
.prize {
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding-bottom: 10px;
  color: #3e216d;
}
.prize-tag {
  background: #3e216d;
  color: white;
  width: 50%;
  padding: 15px 5px 15px 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: auto;
}

.event-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.info-left {
  width: 61%;
}
.info-right {
  width: 100%;
  height: 100%;
  min-height: 430px;
  align-items: center;
}
.info-right .tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
}
.info-right .tag {
  position: relative;
  background: white;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  color: black;
}
.info-right .description {
  padding: 3%;
  white-space: pre-wrap;
}

.info-left .register p,
a {
  position: relative;
  margin-top: 10px;
  margin: auto;
  background: black;
  color: white;
  width: 280px;
  font-size: 14px;
  height: 50px;
  padding: 0px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.info-left .register a {
  text-decoration: none;
  color: white;
}
.register p:hover {
  box-shadow: 4px 4px 0px #ffffff;
}
.poster {
  margin: auto;
  width: 300px;
  height: auto;
  border-radius: 5px 5px 0px 0px;
}
.poster img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.brand-main {
  width: 100%;
  text-align: center;
}
.brand-main .brand-main_tag {
  font-size: 64px;
  margin: auto;
  color: #fff;
  z-index: 999;
}
.brand-main hr {
  width: 10%;
  border: 0px;
  height: 1px;
  background: #703bc4;
  padding-left: 50%;
}
.brand-background {
  line-height: 0%;
  position: absolute;
  white-space: nowrap;
}
.brand-background p {
  margin-top: -4%;
  opacity: 0.1;
}

/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 30%;
  }
  .brand-background {
    font-size: 120px;
  }
  .brand-main .brand-main_tag {
    font-size: 32px;
  }
  .event-info {
    flex-direction: column;
  }
  .info-left {
    width: 100%;
  }
  .info-right {
    width: 100%;
    margin-top: 20px;
  }
  .info-right .tags {
    margin: auto;
    width: 90%;
  }
  .info-right .tag {
    padding: 10px 10px 10px 10px;
    font-size: 10px;
  }
  .info-right .description {
    text-align: center;
  }

  .info-right .register {
    margin: auto;
    margin-top: 10px;
  }
  .organizers {
    width: 100%;
    text-align: center;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
  .brand-background {
    width: 100%;
    text-align: center;
    font-size: 250px;
  }
  .organizers {
    width: 100%;
  }
  .container {
    padding-top: 10%;
  }
  .info-left {
    width: 100%;
  }
  .info-right {
    width: 100%;
    margin-top: 20px;
  }
  .info-right .tags {
    margin: auto;
    width: 90%;
  }
  .info-right .tag {
    padding: 5px;
    font-size: 10px;
  }
  .info-right .description {
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
  }

  .info-right .register {
    margin-top: 50px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .container {
    padding-top: 10%;
  }
  .info-left {
    width: 50%;
  }
  .organizers {
    width: 100%;
  }
  .info-right {
    width: 100%;
    margin-top: 20px;
  }
  .info-right .tags {
    margin: auto;
    width: 90%;
  }
  .info-right .tag {
    padding: 10px 20px 10px 20px;
    font-size: 14px;
  }
  .info-right .description {
    text-align: left;
    padding-top: 50px;
    padding-left: 20px;
  }

  .info-right .register {
    margin-top: 50px;
    margin-left: 20px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .brand-background {
    margin-left: -10%;
    margin-top: 1%;
  }
  .container {
    margin: auto;
    padding-top: 10%;
    width: 80%;
  }
  .info-left {
    width: 10%;
  }
  .info-right {
    width: 80%;
    margin-top: 20px;
  }
  .info-right .tags {
    margin: auto;
    width: 90%;
  }
  .info-right .tag {
    padding: 10px 20px 10px 20px;
    font-size: 14px;
  }
  .info-right .description {
    text-align: left;
    width: 100%;
    font-size: 24px;
    padding-top: 50px;
    padding-left: 20px;
  }
  .organizers {
    width: 100%;
    font-size: 24px;
  }
  .info-right .register {
    margin-top: 50px;
    margin-left: 20px;
  }
}
</style>