import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/socket'
import './plugins/resource'
import './plugins/qrcode'
import './plugins/shortkey'
import './plugins/mask'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

fetch('/api/v1/account/me')
  .then(async function (response) {
    if (response.status === 200) {
      await localStorage.setItem('isLogged', 'true')
    } else {
      await localStorage.setItem('isLogged', 'false')
    }
  })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
