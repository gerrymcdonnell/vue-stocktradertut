import Vue from 'vue'
import App from './App.vue'

//import fvgue router
import VueRouter from 'vue-router';

//import routes
import {routes} from './routes'

const router=new VueRouter(
  {
    mode:'history',
    routes:routes
  }
);

//enavble router
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
