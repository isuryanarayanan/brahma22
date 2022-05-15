<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters(["getDay1", "getDay2"]),
  },
  // Method to return day1 or day2 based on prop id
  methods: {
    getDay() {
      if (parseInt(this.id) == 1) {
        return this.getDay1;
      } else {
        return this.getDay2;
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
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="branding font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">Day - {{ id }}</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>BRAHMA</p>
      </div>
    </div>
    <div class="timeline">
      <div
        v-for="(event, index) in getDay()"
        v-bind:key="event.id"
        class="timeline-container"
        :class="{ right: index % 2 == 0, left: index % 2 == 1 }"
      >
        <div class="content">
          <h1 class="font-1">
            <router-link
              class="link"
              active-class="link-active"
              :to="'/events/details/' + event.id"
              >{{ event.name }}</router-link
            >
          </h1>
          <div class="tags font-3">
            <div class="tag">day {{ id }}</div>
            <div class="tag">{{ event.fee }} {{ event.type }}</div>
            <div class="tag">
              {{ getParsedTime(event.start) }} - {{ getParsedTime(event.end) }}
            </div>
            <div class="tag">@{{ event.venue }}</div>
          </div>
          <p class="font-3 content-description">
            {{ event.short_description }}
          </p>
          <div class="buttons font-2">
            <div class="button details">
              <router-link
                class="details"
                active-class="link-active"
                :to="'/events/details/' + event.id"
                >Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding-bottom: 100px;
}

.brand-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-main .brand-main_tag {
  font-size: 122px;
  margin: auto;
  white-space: nowrap;
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
.timeline {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 3px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.timeline-container {
  padding: 0px 0px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.timeline-container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;

  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: black;
  color: white;
  height: auto;
  margin-top: 10px;
  position: relative;
  border-radius: 20px;
}
.content-description {
  white-space: pre-wrap;
}

.content h1 a {
  color: white;
  text-decoration: none;
}
.content .tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.content .tag {
  background: white;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 14px;
  color: black;
}
.buttons {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.buttons .button {
  background: #703bc4;
  padding: 10px 20px 10px 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 5px solid #381e63;
  font-size: 14px;
  color: black;
}
.buttons .button a {
  text-decoration: none;
}
.buttons .register,
.details {
  color: white;
}
/* Place the timelime to the left */
.timeline::after {
  left: 31px;
}

/* Full-width containers */
.timeline-container {
  width: 80%;
  padding-left: 60px;
  padding-right: 5px;
}

/* Make sure that all arrows are pointing leftwards */
.timeline-container::before {
  left: 50px;
  border: medium solid #703bc4;
  border-width: 10px 10px 10px 0;
  border-color: transparent black transparent transparent;
}

/* Make sure all circles are at the same spot */
.left::after,
.right::after {
  left: 0px;
}

/* Make all right containers behave like the left ones */
.right {
  left: 0%;
}

/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 30%;
  }
  .brand-background {
    margin-left: -15%;
    margin-top: -5%;
    font-size: 120px;
  }
  .brand-main .brand-main_tag {
    font-size: 64px;
  }
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .timeline-container {
    width: 80%;
    padding-left: 60px;
    padding-right: 5px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .timeline-container::before {
    left: 50px;
    border: medium solid #703bc4;
    border-width: 10px 10px 10px 0;
    border-color: transparent black transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 0px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
  .content .tags {
    display: block;
    margin: auto;

    width: 80%;
    justify-content: space-around;
  }
  .content .tag {
    background: black;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 12px;
    border: 1px solid rgb(31, 31, 31);
    color: white;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
  .brand-background {
    width: 100%;
    font-size: 350px;
    margin-left: -7%;
  }
  .container {
    padding-top: 15%;
  }
  .content .tags {
    display: block;
    margin: auto;

    width: 80%;
    justify-content: space-around;
  }
  .content .tag {
    background: black;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 12px;
    border: 1px solid rgb(31, 31, 31);
    color: white;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .content .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .timeline {
    max-width: 900px;
  }
  .content .tag {
    background: white;
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 14px;
    color: black;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .brand-background {
    margin-left: 10%;
    margin-top: 1%;
  }
  .timeline {
    max-width: 1200px;
  }
  .content .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .content .tag {
    background: white;
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 16px;
    color: black;
  }
  .content {
    font-size: 24px;
  }
}
</style>