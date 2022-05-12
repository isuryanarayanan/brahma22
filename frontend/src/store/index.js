import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    isLoading: true,
    isMenu: false,
    events: [],
    currentEvent: null,
    day1: [],
    day2: [],
    displayedEvents: [],
    mode: "deployment",
    development_server: "http://192.168.232.50:8000/",
    deployment_server: "https://alohaasiet.pythonanywhere.com/"
  },
  getters: {
    get_isLoading: (state) => {
      return state.isLoading;
    }, get_isMenu: (state) => {
      return state.isMenu;
    },
    getEvents: (state) => {
      return state.events;
    },
    getServer: (state) => {
      if (state.mode === "development") {
        return state.development_server;
      } else {
        return state.deployment_server;
      }
    },
    getDisplayedEvents: (state) => {
      return state.displayedEvents;
    },
    getDay1: (state) => {
      return state.day1;
    },
    getDay2: (state) => {
      return state.day2;
    },
    getCurrentEvent: (state) => {
      return state.currentEvent;
    }
  },
  mutations: {
    set_isLoading: function (state, isLoading) {
      state.isLoading = isLoading
    },
    set_isMenu: function (state, isMenu) {
      state.isMenu = isMenu
    },
    set_events: function (state, events) {
      state.events = events

      // from event.start parse datetime string and sort the events list 
      // by start date
      state.events.sort((a, b) => {
        return new Date(a.start) - new Date(b.start);
      });






      state.day1 = [];
      state.day2 = [];
      for (let i = 0; i < events.length; i++) {
        if (events[i].start.substring(8, 10) === "21") {
          state.day1.push(events[i]);
        } else if (events[i].start.substring(8, 10) === "22") {
          state.day2.push(events[i]);
        }
      }

    },
    set_displayedEvents: function (state, displayedEvents) {
      state.displayedEvents = displayedEvents
    },
    set_currentEvent: function (state, currentEvent) {
      state.currentEvent = currentEvent
    }


  },
  actions: {
    START_LOADING: function ({ commit }) {
      commit('set_isLoading', true)
    },
    STOP_LOADING: function ({ commit }) {
      commit('set_isLoading', false)
    },
    OPEN_MENU: function ({ commit }) {
      commit('set_isMenu', true)
    },
    CLOSE_MENU: function ({ commit }) {
      commit('set_isMenu', false)
    },
    FILTER_EVENTS: function ({ commit, getters }, filters) {

      // return all events which name starts with filters.search
      let filteredEvents = getters.getEvents.filter(event => {
        return (event.name.toLowerCase().startsWith(filters.search.toLowerCase())) && (event.category.toLowerCase().startsWith(filters.category.toLowerCase()))
      }
      )

      // set filtered events as displayed events
      commit('set_displayedEvents', filteredEvents)

    },

    GET_EVENTS: function ({ getters, commit }) {
      let xhr = new XMLHttpRequest();
      let promise = new Promise((resolve, reject) => {
        xhr.open("GET", getters["getServer"] + "events/event/");
        xhr.setRequestHeader("Content-Type", "Application/json");

        xhr.onload = () => {
          resolve(xhr);
        };

        xhr.onerror = () => {
          reject(xhr);
        };
        xhr.send();
      });
      promise.then((e) => {
        commit("set_events", JSON.parse(e.response));
      });
      return promise;
    },
    GET_EVENT: function ({ getters, commit }, id) {
      let xhr = new XMLHttpRequest();
      let promise = new Promise((resolve, reject) => {
        xhr.open("GET", getters["getServer"] + "events/event/" + id + "/");
        xhr.setRequestHeader("Content-Type", "Application/json");

        xhr.onload = () => {
          resolve(xhr);
        };

        xhr.onerror = () => {
          reject(xhr);
        };
        xhr.send();
      });

      promise.then(e => {
        this.commit("set_currentEvent", JSON.parse(e.response))
      })

      return promise;
    },
  },
});

export default store;
