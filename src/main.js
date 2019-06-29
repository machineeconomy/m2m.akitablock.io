import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
//import './registerServiceWorker'
import moment from 'moment'


Vue.config.productionTip = false;

Vue.use(Argon);

Vue.filter('formatTimestampToTime', function (timestamp) {
  if (timestamp) {
    return moment(timestamp).format('HH:mm:ss')
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
