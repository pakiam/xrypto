import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

Vue.use(VueResource)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
