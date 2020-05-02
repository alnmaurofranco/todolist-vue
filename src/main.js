import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from '@/router'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
