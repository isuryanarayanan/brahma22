<script>
import Proshows from "./Proshows.vue";
import Events from "./Events.vue";
import Contact from "../components/Contact.vue";
import Countdown from "../components/Countdown.vue";
import Slider from "../components/Slider.vue";
export default {
  name: "Home",
  components: {
    Proshows,
    Events,
    Contact,
    Countdown,
    Slider,
  },
};
</script>
<template>
  <div class="home-wrapper">
    <div class="Home pages">
      <div class="container">
        <div class="event-name font-1">Brahma</div>
        <div class="event-name-sub font-1">Techno-Cultural Festival</div>
        <div class="event-date font-1">
          <p class="event-date_day1">
            21<span class="event-date_day_end">st</span>
          </p>
          <p class="event-date_day2">
            20<span class="event-date_day_end">th</span>
          </p>
          <p class="event-date_may">MAY</p>
        </div>
        <div class="event-background font-1">Brahma</div>
        <div class="event-seperator">
          <div class="line"></div>
        </div>
        <div class="event-buttons">
          <div class="event-button event-button_venue">
            <i class="font-1"></i>
            <a
              class="font-2"
              href="https://www.google.com/maps/place/Adi+Shankara+Institute+of+Engineering+and+Technology+Kaladi/@10.178164,76.4282693,17z/data=!3m1!4b1!4m5!3m4!1s0x3b0807bfa8906d61:0x11ad08dbd85357dc!8m2!3d10.178164!4d76.430458"
              target="blank"
              ><img src="../assets/asietwhite.png" alt=""
            /></a>
          </div>
          <div class="event-button event-button_guidelines font-2">
            Read guidelines
          </div>
          <div class="event-button_tag">
            <hr />
            Awaken the creator within
            <hr />
          </div>
        </div>
        <div class="event-scroll font-3">
          <p>
            SCROLL
            <i class="fas fa-arrow-down"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="countdown">
      <Countdown />
    </div>
    <div class="proshows">
      <Proshows />
      <Slider />
    </div>
    <div class="events">
      <Events />
    </div>
    <div class="more"><h1 class="font-1">More events coming soon...</h1></div>
    <div class="contact">
      <Contact />
    </div>
  </div>
</template>

<style scoped>
/* Global css */
.home-wrapper {
  height: 100%;
}
.countdown {
  width: 100%;
  height: auto;
  min-height: 20vh;
}
.more {
  position: relative;
  z-index: 99999999;
  width: 100%;
  text-align: center;
  color: #703bc4;
  border-bottom: 5px solid #381e63;
}
.container {
  width: 100%;
  display: grid;
}
.proshows {
  display: none;
  width: 100%;
  grid-area: proshows;
  background: #381e63;
}
.event-name {
  grid-area: eventname;
  color: white;
  z-index: 99;
}
.event-background {
  position: absolute;
  opacity: 0.1;
}
.event-name-sub {
  grid-area: eventsubname;
  position: relative;
  color: white;
}
.event-date {
  grid-area: eventdate;
  color: #4b2a80;
  z-index: 99;
}
.event-date p {
  line-height: 0%;
}
.event-date_day_end {
  opacity: 0.5;
}
.event-date_may {
  color: white;
}
.event-seperator {
  grid-area: eventseperator;
}
.event-buttons {
  grid-area: eventbutton;
  position: relative;
}
.event-button {
  background: #381e63;
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  filter: drop-shadow(0px -4px 10px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
}
.event-button_venue {
  background: transparent;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
}
.event-button_venue a {
  text-decoration: none;
  color: white;
}

.event-button_venue a img {
  width: 200px;
}
.event-button_venue i {
  color: #000;
  padding-right: 5px;
}
.event-button_tag {
  color: #381e63;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
}
.event-button_tag hr {
  width: 10%;
  height: 1px;
  border: 0;
  background: black;
}
.event-scroll {
  grid-area: eventscroll;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    grid-template-areas:
      "eventname eventname eventname eventname"
      "eventsubname eventsubname eventsubname eventsubname "
      "eventbutton eventbutton eventbutton eventbutton"
      "eventdate eventdate eventdate eventdate";
    padding-top: 15%;
  }
  .countdown {
    margin-top: -15%;
  }
  .event-name {
    position: absolute;
    width: 100%;
    font-size: 84px;
    text-align: center;
    margin: auto;
    margin-top: 15%;
  }
  .event-background {
    width: 100%;
    text-align: center;
    font-size: 1000%;
    margin-left: -10%;
  }
  .event-name-sub {
    position: absolute;
    width: 100%;
    font-size: 20px;
    text-align: center;
    white-space: nowrap;
    margin-top: 40%;
  }
  .event-buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50%;
    margin-left: 4px;
  }
  .event-button {
    width: 145px;
    border-radius: 50px;
    height: 45px;
    font-size: 12px;
  }
  .event-buttons :nth-child(3) {
    position: absolute;
    transform: rotate(90deg);
    width: 100%;
    right: -45%;
    top: 250px;
    opacity: 0.5;
  }
  .event-button_tag {
    width: 50%;
    font-size: 14px;
  }
  .event-date {
    margin-top: -10%;
    margin: auto;
    width: 80%;
    text-align: left;
    font-size: 96px;
  }

  .event-date_day_end {
    font-size: 75px;
  }
  .event-date_may {
    font-size: 100px;
  }
  .event-seperator,
  .event-scroll {
    display: none;
  }
  .proshows {
    margin-top: -20%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .container {
    grid-template-areas:
      "eventname eventname eventname eventname"
      "eventsubname eventsubname eventsubname eventsubname "
      "eventbutton eventbutton eventbutton eventbutton"
      "eventdate eventdate eventdate eventdate"
      "proshows proshows proshows proshows";
  }
  .event-name {
    position: absolute;
    width: 100%;
    font-size: 84px;
    text-align: center;
    margin: auto;
    margin-top: 15%;
  }
  .event-background {
    width: 100%;
    text-align: center;
    font-size: 1500%;
    margin-left: -10%;
  }
  .event-name-sub {
    position: absolute;
    width: 100%;
    font-size: 32px;
    text-align: center;
    white-space: nowrap;
    margin-top: 28%;
  }
  .event-buttons {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 35%;
    margin-left: 25%;
  }
  .event-button {
    width: 145px;
    border-radius: 50px;
    height: 45px;
    font-size: 12px;
  }
  .event-buttons :nth-child(3) {
    position: absolute;
    width: 100%;
    top: 70px;
    opacity: 0.5;
  }
  .event-button_tag {
    width: 50%;
    font-size: 14px;
  }
  .event-date {
    padding-top: 20%;
    margin: auto;
    width: 80%;
    text-align: center;
    font-size: 96px;
  }

  .event-date_day_end {
    font-size: 96px;
  }
  .event-date_may {
    margin-left: 10px;
    font-size: 120px;
  }
  .event-seperator,
  .event-scroll {
    display: none;
  }
  .events,
  .proshows {
    margin-top: 50%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .container {
    grid-template-areas:
      "eventname line line eventdate"
      "eventsubname line line eventdate"
      "eventbutton blank blank blank"
      "eventscroll eventscroll eventscroll eventscroll";
    padding-top: 10%;
  }

  .countdown {
    padding-top: 10%;
  }
  .event-name {
    position: relative;
    font-size: 220px;
    margin: 0;
  }
  .event-background {
    font-size: 450px;
    margin-top: -100px;
  }
  .event-name-sub {
    font-size: 70px;
    position: relative;
    margin-top: -15%;
  }

  .event-date {
    padding-top: 15%;
    position: relative;
    margin: 0;
    text-align: left;
    font-size: 100px;
  }

  .event-date_day_end {
    font-size: 100px;
  }
  .event-date_may {
    font-size: 100px;
    margin-left: 0;
  }
  .event-buttons {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    margin-top: -10%;
    margin-left: 4%;
  }
  .event-button {
    width: 220px;
    height: 45px;
    border-radius: 10px;
    font-size: 14px;
    margin-left: 4%;
  }
  .event-buttons :nth-child(3) {
    position: relative;
    top: 0;
  }
  .event-button_tag {
    width: 50%;
    font-size: 14px;
  }

  .event-seperator {
    display: block;
    grid-area: line;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 100px;
  }
  .event-seperator .line {
    height: 200px;
    width: 1px;
    background: white;
  }
  .event-scroll {
    margin-top: 2%;
    display: block;
    grid-area: eventscroll;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .event-scroll i {
    padding-left: 5px;
  }
  .event-scroll p {
    width: 150px;
    height: 36px;
    font-size: 10px;
    border-radius: 15px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
  }
  .proshows,
  .events {
    margin: 0;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .container {
    grid-template-areas:
      "eventname line line eventdate"
      "eventsubname line line eventdate"
      "eventbutton blank blank blank"
      "eventscroll eventscroll eventscroll eventscroll";
  }
  .event-name {
    position: relative;
    font-size: 320px;
    margin: 0;
  }
  .event-background {
    font-size: 550px;
    margin-top: -100px;
  }
  .event-name-sub {
    font-size: 100px;
    position: relative;
    margin-top: -10%;
  }

  .event-date {
    position: relative;
    margin: 0;
    text-align: left;
    font-size: 140px;
  }

  .event-date_day_end {
    font-size: 150px;
  }
  .event-date_may {
    font-size: 150px;
    margin-left: 0;
  }
  .event-buttons {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    margin-left: 4%;
  }
  .event-button {
    width: 320px;
    height: 65px;
    border-radius: 10px;
    font-size: 18px;
    margin-left: 4%;
  }
  .event-buttons :nth-child(3) {
    position: relative;
    top: 0;
  }
  .event-button_tag {
    width: 50%;
    font-size: 18px;
  }

  .event-seperator {
    display: block;
    grid-area: line;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 100px;
  }
  .event-seperator .line {
    height: 400px;
    width: 1px;
    background: white;
  }
  .event-scroll {
    margin-top: 0%;
    display: block;
    grid-area: eventscroll;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .event-scroll i {
    padding-left: 5px;
  }
  .event-scroll p {
    width: 250px;
    height: 46px;
    font-size: 10px;
    border-radius: 15px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
  }
  .proshows {
    margin: 0;
  }
}
</style>

