import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'
import './utils/rem'
import router from './router'
import store from './store'
import { homeFilter } from './filters/index'
import Fw from './frmaework'

Vue.use(Fw)

for( var key in homeFilter){
  Vue.filter( key, homeFilter[[key]])
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
