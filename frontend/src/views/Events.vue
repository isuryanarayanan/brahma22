<script>
import { mapGetters } from "vuex";
import EventCard from "../components/EventCard.vue";
export default {
  name: "Events",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isLoading: "get_isLoading",
      eventColumn1: "get_eventColumn1",
      eventColumn2: "get_eventColumn2",
      eventColumn3: "get_eventColumn3",
      server: "getServer",
    }),
  },
  components: { EventCard },
};
</script>
<template>
  <div class="event-wrapper">
    <div class="container">
      <div class="branding font-1">
        <div class="brand-main">
          <hr class="brand-main_line" />
          <p class="brand-main_tag">Event's</p>
          <hr class="brand-main_line" />
        </div>

        <div class="brand-background">
          <p>Event's</p>
        </div>
      </div>
      <div class="filters"></div>
      <div class="event-list">
        <div class="row">
          <div class="column">
            <div
              class="column-content column-content-1"
              v-for="event in eventColumn1"
              :key="event.id"
            >
              <EventCard :event="event" />
            </div>
          </div>
          <div class="column">
            <div
              class="column-content column-content-2"
              v-for="event in eventColumn2"
              :key="event.id"
            >
              <EventCard :event="event" />
            </div>
          </div>
          <div class="column">
            <div
              class="column-content column-content-3"
              v-for="event in eventColumn3"
              :key="event.id"
            >
              <EventCard :event="event" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  -ms-flex: 32%; /* IE10 */
  flex: 32%;
  max-width: 33%;
  padding: 0 4px;
}
.container {
  width: 100%;
  padding-top: 20%;
}

.branding {
  display: flex;
  align-items: center;
}

.brand-main {
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-main .brand-main_tag {
  font-size: 64px;
  margin: auto;
  white-space: nowrap;
  color: #381e63;
}
.brand-main hr {
  width: 10%;
  border: 0px;
  height: 1px;
  background: #381e63;
  padding-left: 50%;
}

.column-content {
  margin-bottom: 20px;
}
.brand-background {
  line-height: 0%;
  margin-left: -15%;
  position: absolute;
  white-space: nowrap;
}
.brand-background p {
  opacity: 0.1;
}

.event-list {
  padding-bottom: 500px;
}

/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 30%;
  }
  .brand-background {
    font-size: 120px;
    margin-left: -3%;
  }
  .brand-main .brand-main_tag {
    font-size: 32px;
  }
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
  .brand-background {
    width: 100%;
    text-align: center;
    font-size: 200px;
  }
}
</style>