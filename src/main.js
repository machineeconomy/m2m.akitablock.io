import Vue from 'vue'
import { store } from './store/store'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
//import './registerServiceWorker'
import moment from 'moment'
import VueImg from 'v-img';

Vue.use(VueImg);

Vue.config.productionTip = false

Vue.use(Argon)

Vue.filter('formatTimestampToTime', function (timestamp) {
  if (timestamp) {
    return moment(timestamp).format('HH:mm:ss')
  }
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
