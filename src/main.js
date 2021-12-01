import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'dtoaster/dist/dtoaster.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './styles.scss'

import DToaster from 'dtoaster'
import ToasterPresets from './toastPreset.json' //Your predefined toasts presets (optionally)

Vue.use(DToaster, {
  presets: ToasterPresets,
  position: 'top-right', //toasts container position on the screen
  containerOffset: '45px', //toasts container offset from top/bottom of the screen
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
