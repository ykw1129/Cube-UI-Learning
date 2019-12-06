import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import Cube from 'cube-ui'
import 'amfe-flexible'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
