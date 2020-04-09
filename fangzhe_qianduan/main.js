import Vue from 'vue'
import App from './App'
import Service from 'service/Imports.js'

Vue.prototype.$http = new Service();
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
