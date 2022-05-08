<script>
import Proshows from "./Proshows.vue";
import Events from "./Events.vue";
export default {
  name: "Home",
  components: {
    Proshows,
    Events,
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
            21<span class="event-date_day_end">'st</span>
          </p>
          <p class="event-date_day2">
            22<span class="event-date_day_end">'nd</span>
          </p>
          <p class="event-date_may">MAY</p>
        </div>
        <div class="event-background font-1">Brahma</div>
        <div class="event-seperator">
          <div class="line"></div>
        </div>
        <div class="event-buttons">
          <div class="event-button event-button_venue">
            <i class="fas fa-map-pin"></i>
            <p class="font-2">ASIET kalady</p>
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
    <div class="proshows">
      <Proshows />
    </div>
  </div>
</template>

<style scoped>
.event-scroll {
  margin-top: 5%;
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

.event-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
}
.event-button_tag {
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

.event-button_tag hr {
  width: 10%;
  height: 1px;
  border: 0;

  background: black;
}

.event-button {
  /* design an action button */
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
  color: #8b44ff;
}
.event-button_venue i {
  color: #000;
  padding-right: 5px;
}
.Home {
  padding-top: 6%;
  display: flex;
}
.container {
  height: 500px;
  width: 100%;
  display: grid;
}

.event-buttons {
  grid-area: eventbutton;
}
.event-seperator {
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

.event-name {
  grid-area: eventname;
  color: white;
  z-index: 99;
}

.event-name-sub {
  grid-area: eventsubname;
  color: white;
  opacity: 0.5;
  white-space: nowrap;
  z-index: 99;
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
.event-background {
  position: absolute;
  z-index: 9;
  opacity: 0.1;
  color: white;
}
/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    grid-template-areas:
      "eventname eventname eventname eventname"
      "eventsubname eventsubname eventsubname eventsubname "
      "eventbutton eventbutton eventbutton eventbutton"
      "eventdate eventdate eventdate eventdate";
  }

  .event-name {
    margin-top: 10%;
    font-size: 90px;
    text-align: center;
  }
  .event-name-sub {
    margin-top: -5%;
    margin-bottom: 5%;
    font-size: 30px;
    text-align: center;
  }
  .event-date {
    margin-top: -10%;
    margin-left: 5%;
    font-size: 135px;
  }

  .event-date_day_end {
    font-size: 100px;
  }
  .event-date_may {
    font-size: 135px;
  }
  .event-background {
    font-size: 175px;
    margin-top: -5%;
    margin-left: -50px;
  }
  .event-seperator,
  .event-scroll {
    display: none;
  }
  .event-button {
    width: 150px;
    border-radius: 50px;
    height: 45px;
    font-size: 12px;
  }
  .event-buttons :nth-child(3) {
    position: absolute;
    transform: rotate(90deg);
    width: 100%;
    right: -47%;
    top: 35%;
  }
}

/* big screen */
@media only screen and (min-width: 600px) {
  .container {
    grid-template-areas:
      "eventname line line eventdate"
      "eventsubname line line eventdate"
      "eventbutton blank blank blank"
      "eventscroll eventscroll eventscroll eventscroll";
  }
  .event-name {
    font-size: 220px;
    text-align: right;
  }
  .event-name-sub {
    font-size: 70px;
    text-align: right;
    margin-top: -13%;
  }
  .event-date {
    font-size: 100px;
    margin-top: 10%;
  }
  .event-date_day_end {
    font-size: 100px;
  }
  .event-date_may {
    font-size: 75px;
  }
  .event-background {
    font-size: 400px;
    margin-top: -50px;
    margin-left: -50px;
  }
  .event-button {
    height: 45px;
    width: 200px;
  }
  .event-buttons {
    margin-left: 5%;
    margin-top: -5%;
    text-align: right;
  }
}
</style>
