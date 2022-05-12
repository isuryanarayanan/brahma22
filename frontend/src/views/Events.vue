<script>
import { mapGetters } from "vuex";
import EventCard from "../components/EventCard.vue";
export default {
  name: "Events",
  data() {
    return {
      filter_search: "",
      filter_category: "",
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "get_isLoading",
      displayedEvents: "getDisplayedEvents",
      server: "getServer",
    }),
  },
  components: { EventCard },
  methods: {
    runFilters: function () {
      this.$store.dispatch("FILTER_EVENTS", {
        search: this.filter_search,
        category: this.filter_category,
      });
    },
  },
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
      <div class="filters">
        <div class="filter-search">
          <input
            type="text"
            placeholder="search for events"
            v-model="filter_search"
            v-on="runFilters()"
          />
        </div>
        <div class="filter-category">
          <select name="category" id="event" v-model="filter_category">
            <option value="">Select category</option>
            <option value="cultural">Cultural</option>
            <option value="technical">Technical</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>
      <div class="event-list">
        <EventCard
          v-for="event in displayedEvents"
          v-bind:key="event.id"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 250px;
  min-height: 100vh;
  background: #381e63;
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
  color: #fff;
  z-index: 999;
}
.brand-main hr {
  width: 10%;
  border: 0px;
  height: 1px;
  background: #703bc4;
  padding-left: 50%;
  z-index: 999;
}
.brand-background {
  line-height: 0%;
  margin-left: -15%;
  position: absolute;
  white-space: nowrap;
}
.brand-background p {
  margin-top: -4%;
  opacity: 0.1;
}

.event-list {
  margin-top: 20px;
  display: grid;
  width: 100%;
  height: 500px;
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #381e63;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #703bc4;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.filters {
  position: relative;
}
.filter-search input {
  background: black;
  color: white;
}
/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 30%;
  }
  .brand-background {
    font-size: 120px;
    margin-left: -10%;
  }
  .brand-main .brand-main_tag {
    font-size: 32px;
  }
  .filters {
    padding-top: 10%;
    width: 100%;
  }
  .event-list {
    grid-template-columns: repeat(1, 1fr);
  }
  .filter-search {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .filter-search input {
    width: 80%;
    height: 48px;
    border-radius: 5px;
    border: 0;
    padding-left: 20px;
  }
  .filter-category {
    padding-top: 10px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .filter-category select {
    width: 60%;
    height: 48px;
    border-radius: 5px;
    padding-left: 10px;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
  .brand-background {
    width: 100%;
    text-align: center;
    font-size: 250px;
  }
  .container {
    padding-top: 10%;
  }
  .filters {
    padding-top: 5%;
    display: flex;
    width: 100%;
    margin-left: 10%;
  }
  .event-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .filter-search {
    width: 35%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .filter-search input {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border: 0;
    padding-left: 20px;
  }
  .filter-category {
    width: 10%;
    padding-left: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .filter-category select {
    width: 100%;
    border: 0;
    height: 48px;
    border-radius: 5px;
    padding-left: 10px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .event-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .event-list {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
