import Vue from "vue";
import App from "@/App.vue";
import store from '@/store.js' // @はsrcへのエイリアス
import router from '@/router.js'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import "material-design-icons/iconfont/material-icons.css";
import '@fortawesome/fontawesome-free/css/all.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
