import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import "@/assets/css/style.css"
import axios from "axios";
import VueAxios from 'vue-axios';
// import "@/assets/css/r_vuetify.css"

Vue.config.productionTip = false
// Vue.use(VueSweetalert2)
Vue.use(VueAxios, axios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
