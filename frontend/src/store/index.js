import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    isLoading: true,
    isMenu: false,
    events: [],
    column1: [],
    column2: [],
    column3: [],
    mode: "development",
    development_server: "http://192.168.232.50:8000/",
    deployment_server: ""
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
    get_eventColumn1: (state) => {
      return state.column1;
    },
    get_eventColumn2: (state) => {
      return state.column2;
    },
    get_eventColumn3: (state) => {
      return state.column3;
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
      // split events objects into the 3 columns in order
      state.column1 = events.slice(0, Math.ceil(events.length / 3));
      state.column2 = events.slice(Math.ceil(events.length / 3), Math.ceil(events.length / 3) * 2);
      state.column3 = events.slice(Math.ceil(events.length / 3) * 2, events.length);
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
    GET_EVENT: function ({ getters }, id) {
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

      return promise;
    },
  },
});

export default store;
