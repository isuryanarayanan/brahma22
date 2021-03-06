import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import VueCountdown from '@chenfengyuan/vue-countdown';

library.add(faUserSecret);
createApp(App).use(router).use(store).component(VueCountdown.name, VueCountdown).mount("#app");

