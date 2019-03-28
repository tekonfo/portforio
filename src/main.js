import Vue from "vue";
import App from "@/App.vue";
import store from '@/store.js' // @はsrcへのエイリアス
import router from '@/router.js'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import "material-design-icons/iconfont/material-icons.css";
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)
new Vue({
  el: '#app',
  store, // アプリケーションに登録
  router, // アプリケーションに登録
  render: h => h(App)
})
